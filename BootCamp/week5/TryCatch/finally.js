// finally 구문은 try catch구문과 함께 사용할 수 있는 코드 블록임
// 기본적인 사용 방법
try {
    // 실행할 코드
} catch (err) {
    // 에러가 발생했을 때 실행할 코드
} finally {
    // 항상 실행할 코드
}


// 사용 예시
function printMembers(...members) {
    for (const member of members) {
        console.log(member);
    }
}

try {
    printMembers('영훈', '윤수', '동욱');
} catch (err) {
    alert('에러가 발생했습니다!');
    console.error(err);
} finally {
    const end = new Date();
    const msg = `코드 실행을 완료한 시각은 ${end.toLocaleString()}입니다.`;
    // finally에서도 기본적인 흐름대로 에러가 발생하면 그 아래 코드는 실행되지 않음
    // const p = {...members}; // 혹시나 finally에서 에러가 발생하면 에러가 무시되나 했는데 그건아님
    console.log(msg);
}
