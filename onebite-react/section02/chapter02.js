// 단락 평가 활용 사례
// 리턴값이  falsy, truthy 값 확인해서 출력력
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
  }
  
  printName();
  printName({ name: "이홀드" });