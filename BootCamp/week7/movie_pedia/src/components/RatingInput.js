import { useState } from "react";
import Rating from "./Rating";
import './RatingInput.css';

// 별점 인풋의 name 과 value, onChange를 받아옴 
// onChange함수는 ReviewForm에서 가져온 handleChange함수
// state lifting
function RatingInput({ name, value, onChange }) {

  // value값을 통해 별점을 저장
  const [rating, setRating] = useState(value);

  // 별을 클릭했을 때 해당값을 저장하는 함수
  const handleSelect = (nextValue) => onChange(name, nextValue);

  // 별에서 마우스를 떼었을때 클릭 된 값을 보여주는 함수
  const handleHoverOut = () => setRating(value);


  return (
    <Rating className="RatingInput" value={rating} onSelect={handleSelect} onHover={setRating} onMouseOut={handleHoverOut} />
  )
};
export default RatingInput;