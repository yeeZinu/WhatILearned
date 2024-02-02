// JS에서는 new를 사용해서 새로운 객체를 만들 수 있다.

// Promise 안의 함수는 Promise 객체가 생성될 때 자동으로 실행되는 함수
// executor 함수라고 함

// reolve파라미터에는 생성된 객체를 fulfilled상태로 만들 수 있는 함수가 연결됨
// reject파라미터에는 생성된 객체를 rejected 상태로 만들 수 있는 함수가 연결 됨
const p = new Promise((resolve, reject) => {
  // fulfilled상태로 만드는 코드
  // setTimeout(() => {resolve('success')}, 2000)

  //  rejected 상태로 만드는 코드
  setTimeout(() => { reject(new Error('fail')) }, 2000);
});
// fulfilled인 경우
p.then((result) => { console.log(result) })
// rejected인 경우
p.catch((error) => { console.log(error) });