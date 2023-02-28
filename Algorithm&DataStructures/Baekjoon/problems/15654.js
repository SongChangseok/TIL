/**
 * https://www.acmicpc.net/problem/15654
 *
 * N개의 자연수와 자연수 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오. N개의 자연수는 모두 다른 수이다.
 *
 * N개의 자연수 중에서 M개를 고른 수열
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").trim());
const input = require("fs")
  .readFileSync("./example.txt", "utf8")
  .trim()
  .split("\n");

const [n, count] = input[0].split(" ").map((value) => Number(value));
const numbers = input[1]
  .split(" ")
  .map((value) => Number(value))
  .sort((a, b) => a - b);

const result = [];
const buffer = [];
const dfs = (m) => {
  if (m === count) {
    result.push(buffer.join(" "));
    return;
  }

  for (const number of numbers) {
    if (buffer.indexOf(number) === -1) {
      buffer.push(number);
      dfs(m + 1);
      buffer.pop();
    }
  }
};

dfs(0);
console.log(result.join("\n"));
