// this
console.log(this);  // window

// this를 그냥 사용하거나 
//선언된 함수를 그냥 사용한 경우 window를 가리킴
function printThis() {
    console.log(this);
}
printThis(); // window

// arrowFunction에서는 function이 선언되기 직전의 this값을 사용.
const printThisArrow = () => {
    console.log(this); // window
}

// 메서드로 사용되면 호출된 객체를 가리킴
const myObj = {
    content: 'myObj',
    printThis: printThis,
    printThisArrow: printThisArrow,
};

const otherObj = {
    content: 'otherObj ',
    printThis: printThis,
    printThisArrow: printThisArrow,
};

// 6번째 줄의 함수
myObj.printThis();  // this: myObj
otherObj.printThis(); // this: otherObj

// 12번째 줄의 함수
myObj.printThisArrow();  // this: window
otherObj.printThisArrow(); // this: window