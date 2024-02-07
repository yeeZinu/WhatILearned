import './ReviewList.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewItem({ item }) {
  return (
    <div className='ReviewListItem'>
      <img className='ReviewListItem-img' src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function Reviewlist({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}><ReviewItem item={item} /></li>
      ))}
    </ul>
  );

}

export default Reviewlist;