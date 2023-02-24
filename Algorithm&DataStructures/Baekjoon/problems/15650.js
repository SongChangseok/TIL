/**
 * https://www.acmicpc.net/problem/15650
 *
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
 *
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
 * 고른 수열은 오름차순이어야 한다.
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = require("fs").readFileSync("./example.txt").toString();

const solution = (input) => {
  const [n, count] = input
    .replace("\r\n", "")
    .split(" ")
    .map((value) => Number(value));

  const buffer = [];
  const dfs = (start, m) => {
    if (m === count) {
      console.log(buffer.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      if (buffer.indexOf(i) === -1) {
        buffer.push(i);
        dfs(i, m + 1);
        buffer.pop();
      }
    }
  };

  dfs(1, 0);
};

solution(input);
