//fetch: 가져오다라는 영어단어
// fetch 라는 이름의 함수 : 서버로 request를 보내고 response를 받음
fetch('https://www.google.com')  // 파라미터로 넘어온 url로 request를 보내고 받음
  // 받은 response는 then안의 함수에 객체형태의 파라미터로 전달이 됨
  // callBack 함수: 나중에 어떤 조건이 만족되었을 때 실행되는 함수
  .then((response) => response.text())
  // then 메서드: 콜백을 등록시켜주는 메서드
  // then 메서드: fetch가 return 하는 어떤 객체(Promis)의 메서드
  // 이전 콜백의 리턴값을 다음 콜백이 받을 수 있음
  .then((result) => { console.log(result); });

// ------------------------

// Promise 객체를 배운 후 다시보는 fetch

cosole.log('start!');

fetch('https://jsonplaceholder.typicode.com/users')
// 아래 then은 Promise 객체의 상태가 pendeing -> fulfilled로 바뀔 때 실행될 콜백을 등록하는 메서드
// fullfild: 성공적으로 끝났다는 의미
// 서버로 부터 response를 받아오면 Promise 객체의 상태가 fulfilled로 바뀜
// thhen 메서드로 등록되어있던 콜백이 실행됨

// Promise 객체의 상태가 fulfilled 가 되면 실행 성공 결과 함께 전달됨
// 전달된 실행 성공 결과는 첫번째 콜백의 파라미터로 전달됨
.then((response) => reponse.text())
.then((result) => {console.log(result)});

cosole.log('end!');


/*
fetch 함수 마지막 정리

- fetch 함수는 Promise 객체를 리턴한다.
- 이때 Promise 객체의 then 메서드를 활용하면
- 나중에 Promise 객체의 상태가 fulfilled가 되었을 때 실행할 콜백을 등록할 수 있다.
- response 가 와서 Promise 객체의 상태가 pending -> fulfilled가 되면
- 등록해둔 콜백이 실행된다.
- Promise의 작업 실행 결과가 첫번째 콜백의 파라미터로 들어간다.

- Promise 객체의 상태가 rejected가 될때 실행할 콜백을 등록하려면
- then 메서드의 두번째 파라미터에 콜백을 등록하면 된다.
- then((result) => {console.log(result)}, (error) => {console.log(error)};
*/