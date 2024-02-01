// some 과 every
// find 메소드 처럼 조건에 만족하거나 만족하지 않는 요소를 만나게되면 바로 true 또는 false를 반환한다.
// 만약 빈배열을 대상으로 하는 경우
// some은 false를 반환하고
// every는 true를 반환한다.
const numbers = [1, 2, 3, 4, 5];

// some은 배의 요소중 하나라도 조건을 만족하면 true를 반환한다.
const someReturn = numbers.some((number) => number < 3);
const soomeReturn2 = numbers.some((number) => number > 2);
console.log(someReturn);
console.log(soomeReturn2);

// every는 모든 요소가 조건을 만족해야 true를 반환한다.
const everyReturn = numbers.every((number) => number < 3);
const everyReturn2 = numbers.every((number) => number > 0)
console.log(everyReturn);
console.log(everyReturn2);

// 예제
const spait = [
    { codeName: 'ApplePie', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
    { codeName: 'BigBoss', members: ['스파이', '스파이', '스과이', '스파이', '스파이'] },
    { codeName: 'CEO', members: ['스파이', '스파이', '스파이', '습하이', '스파이'] },
    { codeName: 'DeathNote', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
    { codeName: 'EarlyBird', members: ['스파이', '스마이', '스파이', '스파이', '스파이'] },
    { codeName: 'Faker', members: ['스파이', '스파이', '스파이', '스파이', '스파이'] },
];

function checkSpy(team) {
    // 여기에 코드를 작성하세요
    const { codeName, members } = team;
    const result = members.every((member) => member === '스파이');
    const message = result
        ? `팀 ${codeName} 에는 이중 스파이가 없습니다.`
        : `[주의!] 팀 ${codeName} 에 이중 스파이가 있습니다!`;

    console.log(message);
}


// 테스트 코드
spait.forEach((team) => checkSpy(team));