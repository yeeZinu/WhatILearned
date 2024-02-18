import { useEffect, useState } from 'react';
import { createFood, getFoods, updateFood } from '../api';
import FoodList from './FoodList';
import FoodForm from './FoodForm';

function App() {
  const [order, setOrder] = useState('createdAt');
  const [cursor, setCursor] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [search, setSearch] = useState('');

  const handleNewestClick = () => setOrder('createdAt');

  const handleCalorieClick = () => setOrder('calorie');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getFoods(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const {
      foods,
      paging: { nextCursor },
    } = result;
    if (!options.cursor) {
      setItems(foods);
    } else {
      setItems((prevItems) => [...prevItems, ...foods]);
    }
    setCursor(nextCursor);
  };

  const handleLoadMore = () => {
    handleLoad({
      order,
      cursor,
      search,
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value);
  };

  const handleCreateSuccess = (food) => {
    setItems((prevItems) => [food, ...prevItems]);
  };

  const handleUpdateSuccess = (food) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === food.id);
      return [...prevItems.slice(0, splitIdx),
        food,
      ...prevItems.slice(splitIdx + 1)
      ];
    });
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  useEffect(() => {
    handleLoad({
      order,
      search,
    });
  }, [order, search]);

  return (
    <div>
      <FoodForm onSubmit={createFood} onSubmitSuccess={handleCreateSuccess} />
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleCalorieClick}>칼로리순</button>
      <form onSubmit={handleSearchSubmit}>
        <input name="search" />
        <button type="submit">검색</button>
      </form>
      <FoodList items={sortedItems} onDelete={handleDelete} onUpdate={updateFood} onUpdateSuccess={handleUpdateSuccess} />
      {cursor && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
      {loadingError && <p>{loadingError.message}</p>}
    </div>
  );
}

export default App;
