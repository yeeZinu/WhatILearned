// 1. 변수
// 한번 저장된 값을 변경할 수 있음음
let age = 27;
console.log(age);

// 변수 값 변경
age = 28;
console.log(age);

// 2. 상수
// 한번 저장된 값을 변경할 수 없음음 -> 초기화 이후 값 변경 x
const name = "John";

// 3. 변수 네이멩 규칙
// $, _를 제외한 기호는 사용할  수 없다.
let $_name;

// 숫자로 시작할 수 없다.
let _2time;

// 예약어를 사용할 수 없다.

// 변수 네이밍 가이드.
// 직관적이고 자세한 설명의 이름이 좋다.
let salesCount = 0;
let refundCount = 0;
let totalSalesCount = salesCount - refundCount;