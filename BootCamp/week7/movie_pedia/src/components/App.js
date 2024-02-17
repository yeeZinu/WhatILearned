import { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import { createReview, getReviews, updateReview } from '../api';
import ReviewForm from './ReviewForm';

const LIMIT = 6;

function App() {
  const [order, setOrder] = useState('createdAt');
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lodingError, setLoadingError] = useState(null);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');

  const handleBestClick = () => setOrder('rating');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getReviews(options);
    }
    catch (error) {
      setLoadingError(error);
      return;
    }
    finally {
      setIsLoading(false);
    }

    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + LIMIT);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    await handleLoad({ order, offset, limit: LIMIT });
  };

  // 여기서는 리뷰를 생성하는 기능만 담당
  // 때문에 onSubmit에 createReview 함수를 전달하여 api요청을 보냄
  // 성공적으로 리뷰를 생성하면 handleCreateSuccess 함수를 실행
  // onSubmit이라는 props를 만든것은 리뷰 생성과 수정을 props로 구분해서 처리하기위함
  const handleCreateSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  // 업데이트 성공시 리뷰를 업데이트하는 함수
  // 리뷰 객체를 받아옴.
  const handleUpdateSuccess = (review) => {
    // 이전 아이템을 콜백으로 받아옴
    setItems((prevItems) => {
      // 리뷰의 id와 같은 아이템을 찾아서 인덱스를 반환
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      return [
        // 인덱스 이전까지의 아이템을 스프레드 연산자로 전달
        ...prevItems.slice(0, splitIdx),
        // 수정된 리뷰 추가
        review,
        // 리뷰 이후의 아이템을 스프레드 연산자로 전달
        ...prevItems.slice(splitIdx + 1),
      ];
    });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm
        onSubmit={createReview}
        onSubmitSuccess={handleCreateSuccess}
      />
      <ReviewList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={updateReview}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {hasNext && <button disabled={isLoading} onClick={handleLoadMore}>더보기</button>}
      {lodingError?.message && <span>{lodingError.message}</span>}
    </div>
  );
}

export default App;