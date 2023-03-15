/**
 * https://www.acmicpc.net/problem/11054
 * 참고 https://st-lab.tistory.com/136
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").trim());
const input = require("fs")
  .readFileSync("./example.txt", "utf8")
  .trim()
  .split("\r\n");

const n = Number(input[0]);
const array = input[1].split(" ").map(Number);
const upperDp = new Array(n);
const lowerDp = new Array(n);
upperDp[0] = 1;
lowerDp[n - 1] = 1;

for (let i = 1; i < n; i++) {
  upperDp[i] = 1;

  for (let j = 0; j < i; j++) {
    if (array[i] > array[j] && upperDp[j] + 1 > upperDp[i])
      upperDp[i] = upperDp[j] + 1;
  }
}

for (let i = n - 2; i >= 0; i--) {
  lowerDp[i] = 1;

  for (let j = n - 1; j > i; j--) {
    if (array[i] > array[j] && lowerDp[j] + 1 > lowerDp[i])
      lowerDp[i] = lowerDp[j] + 1;
  }
}

const sum = [];
for (let i = 0; i < n; i++) {
  sum[i] = upperDp[i] + lowerDp[i] - 1;
}

console.log(Math.max(...sum));
