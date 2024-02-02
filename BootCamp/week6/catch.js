/*
fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response) => response.json())
  .catch((error) => console.log(error))
  // 위의 catch는 아래와 같은 값을 가진다.
  // catch는 then메서드를 변형한것에 불과하다.
  .then(undefined, (error) => { console.log(error) })
  .then((result) => { console.log(result); });
*/


fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then(undefined, (error) => { console.log(error) })
  .then((result) => { console.log(result); })
