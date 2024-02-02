// Promise 객체가 rejected 상태일 떄 에러 처리 방법
async function fetchAndPrint() {
  // try catch 문으로 감싸기
  try {
    const response = await fetch('https://jsonplaceholder.typicode.commm/users');
    const result = await response.text();
    console.log(result);
  }
  catch (error) {
    console.log(error);
  }
  // catch를 쓸 수 있듯이 finally도 사용할 수 있다.
  finally {
    console.log('exit');
  }
}

fetchAndPrint();  