// 1. 함수 선언식
function funcA() {
  //   console.log("funcA");
}

// 함수 표현식을 설명하기 위한 예시시
let varA = funcA;
varA();

// 2. 함수표현식
let varB = function () { // 익명 함수수
  //   console.log("funcB");
};

varB();

// 3. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));