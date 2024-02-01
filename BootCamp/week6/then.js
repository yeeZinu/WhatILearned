/*
Case(1) : 콜백에서 Promise 객체를 리턴
Case(2) : 콜백에서 Promise 객체가 아닌 일반적인 값을 리턴
Case(3) : 콜백에서 아무것도 리턴하지 않음
Case(4) : 콜백 실행 중 에러 발생 
Case(5) : 콜백이 실행되지 않음
*/
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    // return response.json(); // <- Case(1)
    // return 10; // <- Case(2)
    // <- Case(3)
    // throw new Error('failed'); // <- Case(4)
  })
  .then((result) => {
    console.log(result);
  });

// 존재하지 않는 URL
/* fetch('https://jsonplaceholder.typicode.commmmmm/users')
  .then((response) => response.json()) // <- Case(5)
  .then((result) => { }, (error) => { console.log(error) }); */

/*
Case(1) : 콜백에서 Promise 객체를 리턴
콜백이 리턴한 Promise  객체를 B라고 하면 A는 B와 동일한 상태와 결과를 갖게 됩니다. 
나중에 B가 fulfilled 상태가 되면 A도 똑같이 fulfilled 상태가 되고 동일한 작업 성공 결과를, 
나중에 B가 rejected 상태가 되면 A도 똑같이 rejected 상태가 되고 동일한 작업 실패 정보를 가진다는 뜻입니다.

Case(2) : 콜백에서 Promise 객체가 아닌 일반적인 값을 리턴
A는 fulfilled 상태가 되고, 해당 리턴값을 작업 성공 결과로 갖게 됩니다.

Case(3) : 콜백에서 아무것도 리턴하지 않음
자바스크립트에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주합니다. 
따라서 A는 fulfilled 상태가 되고, undefined를 작업 성공 결과로 갖게 됩니다.

Case(4) : 콜백 실행 중 에러 발생
A는 rejected 상태가 되고, 해당 에러 객체를 작업 실패 정보로 갖게 됩니다.

Case(5) : 콜백이 실행되지 않음
A는 호출된 then 메소드의 주인에 해당하는, 이전 Promise 객체와 동일한 상태와 결과를 가집니다.
*/