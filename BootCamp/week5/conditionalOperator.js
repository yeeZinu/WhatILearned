// 조건(삼항)연산자
// 조건 ? truthy 한 값 : falsy 한 값
const CUT_OFF = 80;

function passChecker(score) {
    return score > CUT_OFF ? '합격' : '불합격';
    // return score > CUT_OFF ? '합격' : score > 40 ? '재시험' : '불합격'; 이렇게 2중으로도 가능
}

console.log(passChecker(0));

// 이렇게도 가능
const speed = 50;
const msg = speed > 50 ? '[주의!]과속주행 중입니다.' : '정속주행 중입니다.';
console.log(msg);