/**
 * https://www.acmicpc.net/problem/15651
 *
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
 *
 * 1부터 N까지 자연수 중에서 M개를 고른 수열
 * 같은 수를 여러 번 골라도 된다.
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = require("fs").readFileSync("./example.txt").toString();

const solution = (input) => {
  const [n, count] = input
    .replace("\r\n", "")
    .split(" ")
    .map((value) => Number(value));

  const result = [];
  const buffer = [];
  const dfs = (m) => {
    if (m === count) {
      result.push(buffer.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      buffer.push(i);
      dfs(m + 1);
      buffer.pop();
    }
  };

  dfs(0);
  return result.join("\n");
};

console.log(solution(input));
