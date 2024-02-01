function restParameter(pram1, param2, ...rest) {
    console.log(rest);    // 앞에 선언한 파라미터를 제외한 나머지 파라미터를 배열로 반환
}

restParameter('hi', 'hello', 'bye', 'goodbye', 'good');

// 가장앞의 한 개의 파라미터만 제외해야할 때 
function ignoreFirst(...rest) {
    rest.shift();   // shift 를 사용해서 하나만 제거한다.

    for (const el of rest) {
        console.log(el);
    }
}

/* 같은 방식이지만 내가 쓴것과 동일한 방식
function ignoreFirst(first, ...rest) {
  for (const el of rest) {
    console.log(el);
  }
}
*/

ignoreFirst('1세대', '2세대', '3세대');
ignoreFirst('곰팡이', '강아지', '고양이');
ignoreFirst(20, 9, 18, 19, 30, 34, 40);

