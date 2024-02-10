import './FoodList.css';

function FoodListItem({ item, onDelete }) {
  const { imgUrl, title, calorie, content } = item;
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="FoodListItem">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}cal</div>
      <div>{content}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul className="FoodList">
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
