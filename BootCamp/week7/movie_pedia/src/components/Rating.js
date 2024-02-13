import './Rating.css';

// 1~5점까지의 별점
const RATINGS = [1, 2, 3, 4, 5];

// 5점의 별점 중 별점에 맞게 ★을 표시하는 컴포넌트
function Star({ selected = false, rating = 0, onSelect, onHover }) {
  // select라는 조건이 true일 때 selected라는 클래스를 추가
  const className = `Rating-star ${selected ? 'selected' : ''}`;

  // 별을 클릭했을 때 해당값을 저장하는 변수
  const handleSelect = onSelect ? () => onSelect(rating) : undefined;

  // 별에 마우스를 올렸을 때 해당값을 보여주는 변수
  const handleHover = onHover ? () => onHover(rating) : undefined;

  return (
    <span
      className={className}
      onClick={handleSelect}
      onMouseOver={handleHover}
    >
      ★
    </span >
  );
}

// 별점을 받는 컴포넌트
// value값을 통해 별점을 받아옴
function Rating({ className, value = 0, onSelect, onHover, onMouseOut }) {
  // map함수를 통해 1~5까지 각각의 별을 랜더링
  // map안의 rating값은 RATING배열의 각각의 요소
  // selected값은 조건에 따라 true, false로 결정
  // rating값은 인풋으로 받은 rating값
  // onSelect는 별을 클릭했을 때 실행되는 함수
  // onHover는 별에 마우스를 올렸을 때 실행되는 함수
  // onMouseOut은 별에서 마우스를 뗐을 때 실행되는 함수
  return (
    <div className={className} onMouseOut={onMouseOut}>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          selected={value >= rating}
          rating={rating}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export default Rating;
