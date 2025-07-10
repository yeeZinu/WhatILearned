for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}

let idx = 0;
while (idx < 10) {
  console.log(idx);
  idx++;
}
