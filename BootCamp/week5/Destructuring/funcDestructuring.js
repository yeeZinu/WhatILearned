// 함수의 파라미터로 구조분해를 사용할 수 있다.
function printWinner([macbook, ipad, iphon, ...couphon]) {
    console.log('이벤트 결과');
    console.log(`맥북: ${macbook}`);
    console.log(`아이패드: ${ipad}`);
    console.log(`아이폰: ${iphon}`);

    console.log('당첨 쿠폰');
    for (let user of couphon) {
        console.log(user);
    }
    console.log(`이상 총 ${couphon.length}명 축하합니다!`);
}

const rank = ['철수', '영희', '바둑이', '형준', '기남'];

printWinner(rank);

// 객체역시 사용가능함.

const macbook = {
    title: '맥북 프로 16형',
    price: 3690000,
    memory: '16GB',
    storage: '1TB SSD 저장 장치',
    display: '16형 Retina 디스플레이',
};

function printSummary(object) { // 객체를 파라미터로 받음
    const { title, price } = object; // 객체의 프로퍼티를 구조분해 할당으로 받음
    console.log(`저장용량: ${object.storage}`);
    console.log(`선택한 상품: ${title}`); // 이렇게 써도됨
    console.log(`가격: ${price}원`);
}

printSummary(macbook);

// 객체의 프로퍼티를 구조분해 할당으로 받음
// 이래도 동일함.
function printSummary2({ title, price }) {
    console.log(`선택한 상품: ${title + '굉장해 엄청나!'}`);
    console.log(`가격: ${price}원`);
    // let 이면 가능함
    let { title: title2 } = macbook;
    title2 = '바꿔보자';
    console.log(title2);
}
printSummary2(macbook);

// DOM 이벤트 핸들러에도 사용가능함.
const btn = document.querySelector('h1');

btn.addEventListener('click', function ({ target }) {
    console.log(target);
    target.classList.toggle('active');// 이런식으로 쓸 수 있음

    // 이건 HTML 수정하기 귀찮아서 넣은거임
    const div = document.createElement('div');
    btn.appendChild(div);
    div.textContent = '클릭';

});