const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
// const computers = [
//   [1, 1, 0],
//   [1, 1, 1],
//   [0, 1, 1],
// ];

const solution = (n, computers) => {
  let answer = 0;
  const checkComputer = [];

  for (let i = 0; i < n; i++) {
    if (checkComputer[i] !== 1) {
      // console.log("start");
      dfs(i, checkComputer, computers);
      answer++;
    }
  }

  return answer;
};

const dfs = (targetIndex, checkComputer, computers) => {
  // console.log(targetIndex, checkComputer, computers);

  computers[0].forEach((value, index) => {
    if (
      index !== targetIndex &&
      checkComputer[targetIndex] !== 1 &&
      value === 1
    ) {
      checkComputer[targetIndex] = 1;
      dfs(index, checkComputer, computers);
    }
  });
};

console.log(solution(n, computers));
