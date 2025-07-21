// cjs (common js)
// const { add, sub } = require("./math");

// ES모듈
import mul, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
