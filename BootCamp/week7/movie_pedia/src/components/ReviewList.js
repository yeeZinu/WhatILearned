import { useState } from 'react';
import Rating from './Rating';
import './ReviewList.css';
import ReviewForm from './ReviewForm';
import useTranslate from '../hooks/useTranslate';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  const t = useTranslate();

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>{t('delete button')}</button>
        <button onClick={handleEditClick}>{t('edit button')}</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  // 리뷰를 수정중인지 여부를 관리하는 스테이트
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <ul>
      {items.map((item) => {
        // 만약 아이템의 id가 수정중인 아이템의 id와 같다면
        //  리뷰 수정 폼을 렌더링 
        if (item.id === editingId) {
          // 해당 아이디의 아이템을 구조분해하여 초기 상태로 전달
          // 이미지는 FileInput 컴포넌트에서 처리 하기 위해 따로 전달
          // 수정하는 정보의 id값 추가
          const { id, imgUrl, title, rating, content } = item;
          const initialState = { title, rating, content };

          const handleSubmit = (formData) => onUpdate(id, formData);

          const handleUpdateSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <ReviewForm
                initialState={initialState}
                initialPreview={imgUrl}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleUpdateSuccess}
                onCancel={handleCancel}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
