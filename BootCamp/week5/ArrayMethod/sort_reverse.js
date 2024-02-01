// sort 메서드
// 배열의 요소를 정렬한다.
// 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.
// sort 메서드는 원본 배열을 직접 변경한다.

const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4]

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1]


// reverse 메서드
// 원본배열의 순서를 뒤집는다.