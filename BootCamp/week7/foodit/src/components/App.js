import FoodList from './FoodList';
import { useEffect, useState } from 'react';
import { getFoods } from '../api';

function App() {
  const [order, setSorted] = useState('createdAt');
  const [items, setItems] = useState([]);

  const handleNewsSort = () => {
    setSorted('createdAt');
  };

  const handleCalorieSort = () => {
    setSorted('calorie');
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((items) => items.id !== id);
    setItems(nextItems);
  };

  const handelFetchFoods = async (orderQuery) => {
    const { foods } = await getFoods(orderQuery);
    setItems(foods);
  };

  useEffect(() => {
    handelFetchFoods(order);
  }, [order]);

  const sortItems = items.sort((a, b) => b[order] - a[order]);

  return (
    <div>
      <button onClick={handleNewsSort}>최신순</button>
      <button onClick={handleCalorieSort}>칼로리순</button>
      <FoodList items={sortItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
