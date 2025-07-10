// 함수
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
/*
JavaScript 호이스팅은 인터프리터가 코드를 실행하기 전에에
함수, 변수, 클래스 또는 임포트(import)의 선언문을
해당 범위의 맨 위로 끌어올리는 것처럼 보이는 현상을 뜻합니다.
출처: https://developer.mozilla.org/ko/docs/Glossary/Hoisting

함수선언식 같은 경우 호이스팅이 되지만
함수표현식 같은 경우는 변수만 올라가기때문에 호이스팅이 되지않는다.
*/
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
