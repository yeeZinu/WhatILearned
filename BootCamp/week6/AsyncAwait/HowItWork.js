/* fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); }); */

async function fetchAndPrint() {
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7);
  const result = await response.text();
  console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

/*
실행 순서
1
fetchAndPrint() 호출
2
fetch() 호출
fetchAndPrint() 다음 코드 실행
3
4
5
6
fetch()의 결과가 fulfilled 상태가 되면 respose에 response 객체 정보 할당
7
response.text() 호출
response.text()의 결과가 fulfilled 상태가 되면 result에 결과 할당
result 출력
*/