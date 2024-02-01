// fetch는 url뒤에 옵션을 주지않으면 GET 방식으로 request를 보냄
fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => { console.log(result); });