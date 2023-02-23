/**
 * https://www.acmicpc.net/problem/15649
 *
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
 *
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = require("fs").readFileSync("./example.txt").toString();

const solution = (input) => {
  const [n, count] = input
    .replace("\r\n", "")
    .split(" ")
    .map((value) => Number(value));

  const buffer = [];
  const dfs = (m) => {
    if (m === count) {
      console.log(buffer.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (buffer.indexOf(i) === -1) {
        buffer.push(i);
        dfs(m + 1);
        buffer.pop();
      }
    }
  };

  dfs(0);
};

solution(input);

// 1 2 3 4 n n+1 n+2 n+3
// 1 2 4 3 n n+1 n+3 n+2
// 1 3 2 4 n n+2 n+1 n+3
// 1 3 4 2 n n+2 n+3 n+1
// 1 4 2 3 n n+3 n+1 n+2
// 1 4 3 2 n n+3 n+2 n+1
// 2 1 3 4
// 2 1 4 3
// 2 3 1 4
// 2 3 4 1
// 2 4 1 3
// 2 4 3 1
// 3 1 2 4
// 3 1 4 2
// 3 2 1 4
// 3 2 4 1
// 3 4 1 2
// 3 4 2 1
// 4 1 2 3
// 4 1 3 2
// 4 2 1 3
// 4 2 3 1
// 4 3 1 2
// 4 3 2 1
