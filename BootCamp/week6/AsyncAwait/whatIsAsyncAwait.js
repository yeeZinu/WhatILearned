/*
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => reponse.text())
  .then((result) => { console.log(result) });
 */
// 위의 코드를 async/await로 변환하면 아래와 같다.

// async는 asynchronous의 약자로, 함수를 비동기 함수로 만들어준다.
async function fetchAndPrint() {
  // await은 Promise 객체를 리턴하는 코드앞에 사용
  // await는 그 뒤의 코드를 실행하고 그 코드가 리턴하는 Promise 객체가 fulfilled 상태가 되거나 recjected 상태가 될때 까지 기다려줌
  // Promise 객체가 fulfilled 상태가 되면 그 결과를 리턴하고, rejected 상태가 되면 에러를 던진다.
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text(); // response.text()도 Promise 객체를 리턴하기 때문에 await를 사용할 수 있다.
  console.log(result);
}

fetchAndPrint();  