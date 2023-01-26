const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [line, ...numberList] = input;
const convertInput = numberList.map((value) => Number(value));

console.log([...convertInput].sort((a, b) => a - b).join("\n"));
