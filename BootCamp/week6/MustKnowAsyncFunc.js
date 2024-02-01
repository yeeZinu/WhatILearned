// 알아야 하는 비동기 실행 함수

// setTimeout
// setTimeout은 비동기 실행 함수로, 지정된 시간이 지난 후에 콜백 함수를 실행한다.
// setTimeout(콜백 함수, 밀리초);

console.log('a');
setTimeout(() => {
  console.log('b');
}, 2000);
console.log('c');
// a
// c
// undefined
// b

// setInterval
// setInterval은 비동기 실행 함수로, 지정된 시간마다 콜백 함수를 반복 실행한다.
// setInterval(콜백 함수, 밀리초);

console.log('a');
setInterval(() => {
  console.log('b');
}, 2000);
console.log('c');
// a
// c
// undefined
// b, 2초마다 실행

// addEventListener
// addEventListener는 비동기 실행 함수로, 지정된 이벤트가 발생했을 때 콜백 함수를 실행한다.
// addEventListener(이벤트 이름, 콜백 함수);

// 만약 클릭 시 어떤 동작하는 함수를 실행하고 싶다면?
// 1. 해당 DOM 객체의 onclick 속성에 함수를 할당한다.
btn.onclick = function(e) {
  console.log('Hello Codeit!');
};
// 화살표 함수로도 할당 가능
btn.onclick = (e) => {
  console.log('Hello Codeit!');
};

// 2. 해당 DOM 객체의 addEventListener 메소드의 파라미터로 전달하면 됨.
btn.addEventListener('click', function (e) { // 해당 이벤트 객체가 파라미터 e로 넘어옵니다.
  console.log('Hello Codeit!');
});

// 또는 arrow function 형식으로 이렇게 나타낼 수도 있습니다.
btn.addEventListener('click', (e) => {
  console.log('Hello Codeit!');
});

// 또는 외분에 함수를 정의하고 그 함수를 파라미터로 전달할 수도 있습니다.
const sayHello = (e) => {
  console.log('Hello Codeit!');
};
btn.addEventListener('click', sayHello);
