// forEach
// 배열에서 사용하는 메서드이다.
let members = ['철수', '영희', '바둑이'];

// 첫번째 파라미터로 재귀함수를 이용하며 배열의 모든 요소를 순회한다.
members.forEach(function (member) {
    console.log(`${member}님 안녕하세요!`);
});

// 두번째 파라미터는 인덱스이다.
// 세번째 파라미터는 현재 순회하는 배열 자체이다.
// 잘 사용되지는 않지만 배열 자체에서 forEach를 도는경우 사용할 수 도 있다.
members.forEach((member, i, arr) => {
    console.log(`${i, member}님 안녕하세요!`);
    console.log(arr);
});

// map
// forEach와 동일하게 사용이 가능하다.
members.map((member, i, arr) => {
    console.log(`${i, member}님 안녕하세요!`);
    console.log(arr);
});

// map은 메서드의 호출 결과로 새 배열을 리턴하는 차이가 있다.
// map은 콜백함수 내에서 리턴문을 주는 경우 각 요소별 리턴값으로 새로운 배열을 만들어 리턴한다.
// forEach는 리턴값이 없다. => 변수에 할당시 undefined가 된다.

// 단순한 반복작업을 할때는 forEach를 사용하고
// 새로운 배열을 만들어야 할 때는 map을 사용한다.

// forEach나 map의 최대 반복 횟수는 호출 시 요소의 갯수만큼이다.
// 단 반복중 배열의 길이가 줄어들면 반복 횟수도 줄어든다.


// map 예제
const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성하세요
const answer = quiz.map((item, i) => {
    return `${item[i]}`;
});


// 테스트 코드
console.log(answer);