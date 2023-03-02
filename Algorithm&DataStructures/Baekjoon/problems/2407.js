/**
 * https://www.acmicpc.net/problem/2407
 *
 * 문제
 * nCm을 출력한다.
 *
 * 입력
 * n과 m이 주어진다. (5 ≤ n ≤ 100, 5 ≤ m ≤ 100, m ≤ n)
 *
 * 출력
 * nCm을 출력한다.
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").trim());
const [n, m] = require("fs")
  .readFileSync("./example.txt", "utf8")
  .trim()
  .split(" ")
  .map(Number);

// case1
const factorial = (num) => {
  if (num < 0) return -1;
  if (num === 0) return 1;

  return BigInt(num) * BigInt(factorial(num - 1));
};

// n! / ((n - m)! * m!)
console.log((factorial(n) / (factorial(n - m) * factorial(m))).toString());

// case2

// n-1 C m + n-1 C m-1
const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(1));
dp[0][0] = dp[1][0] = dp[1][1] = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= m; j++) {
    if (i === j || j === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = BigInt(dp[i - 1][j]) + BigInt(dp[i - 1][j - 1]);
    }
  }
}

console.log(dp[n][m].toString());
