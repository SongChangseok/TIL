/**
 * https://www.acmicpc.net/problem/17144
 */

// const input = parseInt(require("fs").readFileSync("/dev/stdin").trim());
const [n, ...other] = require("fs")
  .readFileSync("./example.txt", "utf8")
  .trim()
  .split("\r\n");

const [r, c, t] = n.split(" ").map(Number);
const map = other.map((value) => value.split(" ").map(Number));

const cleaner = [];
const isCleaner = (x, y) => map[x][y] === -1;
const isCorrect = (x, y) => 0 <= x && x < r && 0 <= y && y < c;

const spread = (map) => {
  const temp = [...map.map((value) => [...value])];
  const toSpread = Array.from(Array(r), () => new Array(c).fill(0));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (isCleaner(i, j)) {
        cleaner.push(i);
        continue;
      }
      if (temp[i][j] === 0) continue;

      const dust = Math.floor(temp[i][j] / 5);
      let count = 0;

      const helper = (x, y) => {
        if (isCorrect(x, y) && !isCleaner(x, y)) {
          toSpread[x][y] += dust;
          count++;
        }
      };

      helper(i, j - 1); // top
      helper(i, j + 1); // bottom
      helper(i - 1, j); // left
      helper(i + 1, j); // right

      toSpread[i][j] -= dust * count;
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      temp[i][j] += toSpread[i][j];
    }
  }

  return temp;
};

const clean = (map) => {
  const result = [...map.map((value) => [...value])];
  const [top, bottom] = cleaner;

  result[top][1] = 0;
  result[bottom][1] = 0;
  // 오른쪽(top/bottom)
  for (let i = 2; i < c; i++) {
    result[top][i] = map[top][i - 1];
    result[bottom][i] = map[bottom][i - 1];
  }
  // 위(top)
  for (let i = top - 1; i >= 0; i--) {
    result[i][c - 1] = map[i + 1][c - 1];
  }
  // 아래(bottom)
  for (let i = bottom + 1; i < r; i++) {
    result[i][c - 1] = map[i - 1][c - 1];
  }
  // 왼쪽(top/bottom)
  for (let i = c - 2; i >= 0; i--) {
    result[0][i] = map[0][i + 1];
    result[r - 1][i] = map[r - 1][i + 1];
  }
  // 아래(top)
  for (let i = 1; i < top; i++) {
    result[i][0] = map[i - 1][0];
  }
  // 위(bottom)
  for (let i = r - 2; i > bottom; i--) {
    result[i][0] = map[i + 1][0];
  }

  return result;
};

const sumDust = (map) => {
  let result = 0;
  map.forEach((line) => {
    result += line.reduce((prev, cur) => cur !== -1 && prev + cur, 0);
  });
  return result;
};

let resultMap = map;
for (let i = 0; i < t; i++) {
  const spreadedMap = spread(resultMap);
  resultMap = clean(spreadedMap);
}

const result = sumDust(resultMap);
console.log(result);
