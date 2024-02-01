// POST: 서버에 데이터를 추가

// 서버에 추가하고 싶은 데이터를 객체 형태로 만든다.
const newMember = {
    name: 'Jerry',
    email: 'jerry@codeitmail.kr',
    department: 'engineering',
};

// fetch 함수를 사용하여 서버에 데이터를 추가한다.
fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',                                 // POST 방식으로 request를 보냄
    body: JSON.stringify(newMember),                // JS의 객체를 JSON 문자열로 변환
})
    .then((response) => response.text())            // 받은 응답을 텍스트 형태로 변환
    .then((result) => { console.log(result); });    // 결과 출력

