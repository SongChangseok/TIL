// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\r\n");

const inputToInt = parseInt(input[0]);
const isMod3 = (value) => value % 3 === 0;
const isMod2 = (value) => value % 2 === 0;

console.log(isMod3(inputToInt));
console.log(isMod2(inputToInt));

let result = inputToInt;
let count = 0;

if (isMod3(result)) {
  console.log(result / 3);
  return;
}

if (isMod2(result)) {
  console.log(result / 2);
  return;
}

while (result > 1) {
  if (isMod3(result)) result /= 3;
  else if (isMod2(result)) result /= 2;
  else if (result !== 1) result -= 1;

  count++;

  console.log(result, count);
}

console.log(inputToInt);
