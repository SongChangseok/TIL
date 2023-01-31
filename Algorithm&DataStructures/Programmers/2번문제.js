const solution = (expression) => {
  const splitedExpression = ` ${expression
    .replaceAll("X", "*")
    .split("")
    .join(" ")} `.split("");
  const numberCount = Math.ceil(expression.length / 2);

  let max = -1;
  for (let i = 0; i < numberCount - 1; i++) {
    for (let j = i + 1; j < numberCount; j++) {
      max = Math.max(
        max,
        solve([...splitedExpression], i * 4, (j - 1) * 4 + 6)
      );
    }
  }

  return max;
};

const solve = (array, start, end) => {
  array[start] = "(";
  array[end] = ")";
  return eval(array.join(""));
};

const expression = "2-1X5-4X3+2";
// const expression = "2X3-1";
console.log(solution(expression));
