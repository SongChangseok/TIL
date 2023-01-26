const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const firstInput = inputs[0].split(" ");
const article = inputs[1].split(" ");

const numberOfPeople = firstInput[0];
const squareMeter = firstInput[1];
const TOTAL = numberOfPeople * squareMeter;

const result = article.map((v) => v - TOTAL);

console.log(result.join(" "));
