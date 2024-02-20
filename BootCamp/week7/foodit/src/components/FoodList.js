import { useState } from 'react';
import './FoodList.css';
import FoodForm from './FoodForm';
import useTranslate from '../hooks/useTranslate';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item, onDelete, onEdit }) {
  const { imgUrl, title, calorie, content, createdAt } = item;
  const t = useTranslate();


  const handleDeleteClick = () => onDelete(item.id);

  const handleEditClick = () => onEdit(item.id);

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <div>{formatDate(createdAt)}</div>
      <button onClick={handleDeleteClick}>{t('delete button')}</button>
      <button onClick={handleEditClick}>{t('edit button')}</button>
    </div>
  );
}

function FoodList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <ul className="FoodList">
      {items.map((item) => {
        // 수정 중인 아이템이라면
        if (editingId === item.id) {
          // 수정 폼에 들어갈 아이템 구조분해 할당
          const { id, imgUrl, title, calorie, content } = item;
          const initialState = { title, calorie, content, imgUrl: null };

          const handleSubmit = (formData) => onUpdate(id, formData);

          const handleUpdateSuccess = (food) => {
            onUpdateSuccess(food);
            setEditingId(null);
          };
          return (
            <li key={item.id}>
              <FoodForm
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
            <FoodListItem
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

export default FoodList;
