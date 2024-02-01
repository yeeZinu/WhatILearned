// spread syntax
const numbers = [1, 2, 3];

console.log(...numbers); // 1,2,3
console.log(1, 2, 3);  // 1,2,3

// Rest Parameter도 비슷하나 차이가 있음ㅇㅇ
// 여기서는 하나로 뭉침
const sumAll = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4));


// 배열을 합칠때
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2] //[1,2,3,4,5,6]
console.log(arr3);

// 배열을 합쳐서 객체에 할당할 때
const members = ['철수', '영희', '바둑이'];
const newObject = { ...members };
console.log(newObject); // {0: '철수', 1:'영희', 2: '바둑이'}

// 객체를 펼칠 때
const dog = { name: '멍멍이', age: 2, color: 'black' };

const animal = {
  ...dog,
  type: '개'
};
// console.log(...dog); // syntax error
console.log(animal);

// 이중배열은 어떻게 펼치려나?
// 짜피 2중배열에서 풀어봤자 똑같네;; 겉에거 하나 까는거니까 ㅋㅋ
// for 돌려서 하나씩 까서 넣어주면 됨
const doubleArr = [[1, 2], [3, 4], [5, 6]];
let spreadDoubleArr = [];

for (let dArr of doubleArr) {
  spreadDoubleArr.push(...dArr);
};
console.log(spreadDoubleArr);


// spead syntax 연습 예제
const snacks = ['원카칩', '꿀버터칩', '헛스윙칩', '태양칩', '야채시간'];
const drinks = ['사이다', '콜라', '우유', '물', '커피', '레몬에이드'];

function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

// 1. Spread 구문을 활용해서 sancks와 drinks 배열을 각각 mySnacks와 myDrinks 변수에 복사해 주세요
const mySnacks = [...snacks];
const myDrinks = [...drinks];

mySnacks.splice(2, 3);
myDrinks.splice(1);

// 2. Spread 구문을 활용해서 mySnacks와 myDrinks 순서로 두 배열을 합쳐서 myChoice 변수에 할당해 주세요
const myChoice = [...mySnacks, ...myDrinks];

// 3. Spread 구문을 활용해서 myChoice의 각 요소들을 printArguments 함수의 아규먼트로 전달해 주세요
printArguments(...myChoice);