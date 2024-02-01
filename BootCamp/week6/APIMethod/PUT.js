// PUT: 서버에 데이터를 수정

// 서버에 수정하고 싶은 데이터를 객체 형태로 만든다.
const newMember = {
    name: 'Alice',
    email: 'alice@codeitmail.kr',
    department: 'marketing',
};

// fetch 함수를 사용하여 서버에 데이터를 수정한다.
// 수정하기위해서는 해당 데이터의 id가 필요하다.
// id를 알고있다면, URL에 id를 추가하여 수정할 수 있다.
fetch('https://learn.codeit.kr/api/members/2', {
    method: 'PUT',                                  // PUT 방식으로 request를 보냄
    body: JSON.stringify(newMember),                // JS의 객체를 JSON 문자열로 변환
})
    .then((response) => response.text())            // 받은 응답을 텍스트 형태로 변환
    .then((result) => { console.log(result); });    // 결과 출력

