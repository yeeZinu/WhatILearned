// reduce

const numbers = [1, 2, 3, 4, 5];

// acc: 누적값(누산기, accumulator)
// el: 현재 요소의 값 (element)
// i: 현재 인덱스 값 (index)
// arr: reduce 메소드를 호출한 배열 자체 (array)

// 기본 문법
// acc의 역할: 직전의 동작한 콜백함수가 리턴한 값을 전달받는다.
// 리턴값은 다음 acc에 전달할 값.
// 처음 실행될때는 전달받은 값이 없으니 2번째 파라미터에 초기값을 전달한다.
/*
numbers.reduce((acc, el, i, arr) => {
    return nextAccVAlue;
}, initValue);
*/

// 예제
const sumAll = numbers.reduce((acc, el, i) => {
    console.log(`${i}번의 인덱스 요소로 동작중`);
    console.log('acc', acc);
    console.log('el', el);
    console.log('------------------');
    return acc + el;

}, 0);

console.log(sumAll);

// 연습문제
const data = [
    { company: 'Naber', month: 3 },
    { company: 'Amajohn', month: 12 },
    { company: 'Coogle', month: 10 },
    { company: 'Ittel', month: 6 },
    { company: 'Sasung', month: 4 },
    { company: 'CaCao', month: 3 },
    { company: 'Microhard', month: 17 },
];

// 여기에 코드를 작성하세요
const totalCareer = data.reduce((acc, el) => {
    return acc + el.month;

}, 0);

console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);
