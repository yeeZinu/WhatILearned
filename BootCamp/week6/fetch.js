//fetch: 가져오다라는 영어단어
// fetch 라는 이름의 함수 : 서버로 request를 보내고 response를 받음
fetch('https://www.google.com')  // 파라미터로 넘어온 url로 request를 보내고 받음
// 받은 response는 then안의 함수에 객체형태의 파라미터로 전달이 됨
// callBack 함수: 나중에 어떤 조건이 만족되었을 때 실행되는 함수
  .then((response) => response.text()) 
// then 메서드: 콜백을 등록시켜주는 메서드
// then 메서드: fetch가 return 하는 어떤 객체(Promis)의 메서드
// 이전 콜백의 리턴값을 다음 콜백이 받을 수 있음
  .then((result) => {console.log(result);});