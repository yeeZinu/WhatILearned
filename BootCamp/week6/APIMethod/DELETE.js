// DELETE: 서버에 데이터를 삭제

// 삭제할 데이터의 id를 URL에 포함시켜 보냄
fetch('https://learn.codeit.kr/api/members/2', {
    method: 'PUT',                                  // DELETE 방식으로 request를 보냄
})
    .then((response) => response.text())            // 받은 응답을 텍스트 형태로 변환
    .then((result) => { console.log(result); });    // 결과 출력

