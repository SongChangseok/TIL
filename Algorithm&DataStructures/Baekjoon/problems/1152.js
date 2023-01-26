const inputStr = require("fs").readFileSync("/dev/stdin").toString();
const filteredInput = inputStr.replace("\n", "").replace("\r", "").split(" ");
console.log(filteredInput.filter((info) => info !== "").length);
