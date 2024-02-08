import Reviewlist from "./ReviewList";
import items from '../mock.json';
import { useState } from "react";

function App() {
  const [order, setOrder] = useState('createdAt');

  const handleNewsSort = () => {
    setOrder('createdAt');
  };

  const handleRateSort = () => {
    setOrder('rating');
  };

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  return (
    <div>
      <div>
        <button onClick={handleNewsSort}>최신순</button>
        <button onClick={handleRateSort}>베스트순</button>
      </div>
      <Reviewlist items={sortedItems} />
    </div>
  );
}

export default App;