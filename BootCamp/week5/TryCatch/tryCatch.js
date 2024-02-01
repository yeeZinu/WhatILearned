// 사용방법
try {
    // 동작코드
    console.log('에러 전');

    const codeit = '코드잇';
    console.log(codeit);

    codeit = 'codeit'; // 에러 발생

    const language = 'JavaScript';
    console.log(language);

} catch (error) {
    // 에러 발생시 동작할 코드
    // 콘솔에 에러가 출력 안되고 error객체에 전달됨
    console.log('에러 후');
    console.error(error); // 흔히보는 콘솔 에러 창
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

// try catch 문 예제

function printMembers(members) {
    try {
        for (const member of members) {
            console.log(member);
        }
    } catch (error) {
        console.error(error);
        alert(`${error.name}가 발생했습니다.`);
    }
}

const teamA = ['상혁', '현승', '지호'];
printMembers(teamA);

const teamB = { name: 'codeit' };
printMembers(teamB);

const teamc = ['하준', '유나', '동욱'];
printMembers(teamc);