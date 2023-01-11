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
    if (checkComputer[i] === 0) {
      dfs(i, computers, checkComputer);
      answer++;
    }
  }

  console.log(checkComputer);

  return dfs(computers);
};

const dfs = (targetIndex, checkComputer, computers) => {
  const [target, ...other] = computers;


  
  return dfs(other);
};

console.log(solution(n, computers));
