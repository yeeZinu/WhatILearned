// Map
// 이름있는 데이터를 저장한다.
// 메소드를 통해서만 데이터를 추가, 삭제, 읽기가 가능하다.

// Map 생성
const codeit = new Map();

// set 메소드
// key를 이용해 value를 추가하는 메소드.
map.set(key, value);
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
// key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
map.get(key);
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
// key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
map.has(key);
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false


// delete 메소드
// key에 해당하는 값을 삭제하는 메소드.
map.delete(key);
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
// Map 안의 모든 요소를 제거하는 메소드.
map.clear();
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0

// size 프로퍼티
// 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
map.size;
console.log(codeit.size); // 3



// Set
// 여러개의 데이터를 순서대로 저장한다는 부분에서 배열과 비슷하다.
// Map처럼 메소드를 통해 값을 다룬다.
// 중복되지 않는 데이터를 저장한다.
// 개별값에 바로 접근할 수 있는 방법이 없음

// Set 생성
const members = new Set();

// add 메소드
// 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
set.add(value);
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// 반복문을 통해서만 개별값에 바로 접근이 가능하다.
for (const member of members) {
    console.log(member); // 영훈, 윤수, 동욱, 태호가 순서대로 한 줄 씩 콘솔에 출력됨.
}

// has 메소드
// Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
set.has(value);
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// delete 메소드
// 값을 제거하는 메소드. (메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
set.delete(value);
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
// Set 안의 모든 요소를 제거하는 메소드.
set.clear();
members.clear();
console.log(members.size); // 0

// size 프로퍼티
// 요소의 개수를 반환하는 프로퍼티. (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은 역할)
set.size;
console.log(members.size); // 4

// 중복된 값을 허용하지 않는 특징이 있다.
// 중복을 제거한 값을 구하는데 유용하다.
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}

