console.log('start!');

// 이전 콜백의 리턴값을 다음 콜백에 사용
// Promise Chaining : Promise 객체에 then메서드를 연속적으로 호출하는 것
// then 메서드는 각각의 Promise 객체를 리턴함.
fetch('https://jsonplaceholder.typicode.com/users') // Promise 객체
  .then((response) => response.text())              // Promise 객체, text() 메서드는 Promise 객체를 리턴
  .then((result) => {                               // Promise 객체
    const users = JSON.parse(result);
    return users[0];
  })
  .then((user) => {                                 // Promise 객체                    
    console.log(user);
    const { address } = user;
    return address;
  })
  .then((address) => {                              // Promise 객체                   
    console.log(address);
    const { geo } = address;
    return qeo;
  })
  .then((geo) => {                                  // Promise 객체                    
    console.log(geo);
    const { lat } = geo;
    return lat;
  })
  .then((lat) => {                                  // Promise 객체               
    console.log(lat);
  });
console.log('end!');

/*
1. Promise 객체의 then 메서드는 또 다른 Promise 객체를 리턴한다.
2. 이 새로운 Promise 객체는 처음에는 pending 상태이지만
3. then 메서드 안의 콜백이 실행되고 어떤 값을 리턴하는 지에 따라 fulfilled 또는 rejected 상태가 된다.
  - 콜백에서 Promise 객체를 리턴하면 앞으로 그 Promise 객체가 가질 생태와 결과를 그대로 가진다.
  - 콜백에서 promise 객체가 아닌 다른 값을 리턴하면 fulfilled 상태가 되고 작업 성공 결과도 가지게 된다.
*/

// ----------------------------------------------

// text() , json() 메서드도 Promise 객체를 리턴한다.

// response객체의 text메서드로 리스폰스의 내용을 추출하고 deserialized하거나
// text 메소드는, fulfilled 상태이면서 
// 리스폰스의 바디에 있는 내용을 string 타입으로  
// 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    // ...
  });

console.log('End'); 

// response객체의 json 메서드로 내용추출과 deserialized를 한번에 할 수 있다.
// json 메서드는 fulfilled 상태이면서
// 리스폰스의 바디에 있는 JSON 데이터를 자바스크립트 객체로 Deserialize해서 생겨난 객체를 
// '작업 성공 결과'로 가진 Promise 객체를 리턴
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    // ...
  });

console.log('End');
