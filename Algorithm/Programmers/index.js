// const operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"];
const operations = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];

const solution = (operations) => {
  let answer = [];
  const dOperator = (operation) => {
    if (operation === "D 1") return getMax(answer);
    if (operation === "D -1") return getMin(answer);
  };
  const getMax = (array) => array.findIndex((v) => v === Math.max(...array));
  const getMin = (array) => array.findIndex((v) => v === Math.min(...array));

  operations.forEach((operation) => {
    if (["D 1", "D -1"].includes(operation)) {
      answer = answer.filter((v, i) => i !== dOperator(operation));
      return true;
    }
    const [, value] = operation.split(" ");

    answer.push(Number(value));
  });

  return answer.length === 0
    ? [0, 0]
    : [answer[getMax(answer)], answer[getMin(answer)]];
};

console.log(solution(operations));
