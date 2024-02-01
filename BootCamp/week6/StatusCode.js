// 응답 코드 확인하기
// path를 추가하며 응답 코드를 확인해보자.

fetch('https://www.google.com')
  .then((response) => {
    console.log(response.status);
  });
