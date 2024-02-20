import { useCallback, useEffect, useState } from 'react';
import { createReview, deleteReview, getReviews, updateReview } from '../api';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import LocaleSelect from './LocaleSelect';
import useAsync from '../hooks/useAsync';
import useTranslate from '../hooks/useTranslate';
import './App.css';
import logoImg from '../assets/logo.png';
import ticketImg from '../assets/ticket.png';

const LIMIT = 6;

function AppSortButton({ selected, children, onClick }) {
  return (
    <button
      disabled={selected}
      className={`AppSortButton ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function App() {
  const t = useTranslate();
  const [order, setOrder] = useState('createdAt');
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, loadingError, getReviewsAsync] = useAsync(getReviews);
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');

  const handleBestClick = () => setOrder('rating');

  const handleDelete = async (id) => {
    const result = await deleteReview(id);
    if (!result) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleLoad = useCallback(async (options) => {
    const result = await getReviewsAsync(options);
    if (!result) return;

    const { reviews, paging } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + LIMIT);
    setHasNext(paging.hasNext);
  }, [getReviewsAsync]);

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
  }, [order, handleLoad]);

  // 생성한 LocalContext.Provider를 사용하여 할당할 범위를 지정
  // 이렇게 하면 하위 컴포넌트에서 해당 컨텍스트를 사용할 수 있음
  // value에 ko값을 넣어줌
  return (
    <div className="App">
      <nav className="App-nav">
        <div className="App-nav-container">
          <img className="App-logo" src={logoImg} alt="MOVIDE PEDIA" />
          <LocaleSelect />
        </div>
      </nav>
      <div className="App-container">
        <div
          className="App-ReviewForm"
          style={{
            backgroundImage: `url("${ticketImg}")`,
          }}
        >
          <ReviewForm
            onSubmit={createReview}
            onSubmitSuccess={handleCreateSuccess}
          />
        </div>
        <div className="App-sorts">
          <AppSortButton
            selected={order === 'createdAt'}
            onClick={handleNewestClick}
          >
            {t('newest')}
          </AppSortButton>
          <AppSortButton
            selected={order === 'rating'}
            onClick={handleBestClick}
          >
            {t('best')}
          </AppSortButton>
        </div>
        <div className="App-ReviewList">
          <ReviewList
            items={sortedItems}
            onDelete={handleDelete}
            onUpdate={updateReview}
            onUpdateSuccess={handleUpdateSuccess}
          />
          {hasNext ? (
            <button
              className="App-load-more-button"
              disabled={isLoading}
              onClick={handleLoadMore}
            >
              {t('load more')}
            </button>
          ) : (
            <div className="App-load-more-button" />
          )}
          {loadingError?.message && <span>{loadingError.message}</span>}
        </div>
      </div>
      <footer className="App-footer">
        <div className="App-footer-container">
          {t('terms of service')} | {t('privacy policy')}
        </div>
      </footer>
    </div>
  );
}

export default App;