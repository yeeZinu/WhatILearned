const error = new TypeError('타입 에러가 발생했습니다.');
console.log(error.name);
console.log(error.message);

// 의도적으로 에러를 발생시키는 방법
// throw 키워드 사용
throw error