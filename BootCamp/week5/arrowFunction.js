const ArwFunc = () => {
    console.log('화살표 함수');
}
// 파라미터가 하나만있을 때는 소괄호 생략 가능
const paramFunc = number => {
    return number + 2;
}
// 내부동작이 리턴문 한줄만 있으면 리턴도 생략가능
const paramFunc2 = number => number + 2;

// 함수 내부의 동작이 리턴값한줄밖에 없지만 리턴값이 객체인 경우
// 리턴 생략가능, 단 {}<-이걸 함수 동작에 해당하는 중괄호로 해석하기에 
// ()로 감싸줘야함
const objFunc = () => ({ name: '홍길동' });