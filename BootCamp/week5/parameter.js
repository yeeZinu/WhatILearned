// Parameter
function test(name) {  // name은 파라미터
    console.log(`${name}`);
}
test();  // undefined
test('LeeJinWoo'); // LeeJinWoo / 'LeeJinWoo'는 argument

function test2(num1 = 2, num2) { // 값을 할당해 기본값 사용 가능
    console.log(`num1: ${num1}`);
    console.log(`num2: ${num2}`);
}
// 아규먼트는 무조건 맨 처음값부터 할당됨
test2(1);  // num1 = 1 / num2 = undefined
// undefined를 사용하면 순서를 한칸 미룰 수 있음
test(undefined, 4) // num1 = 2, num2 = 4

function test2(x, y = x + 3) {
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
}

test2();
test2(5);
test2(undefined, 10); 
