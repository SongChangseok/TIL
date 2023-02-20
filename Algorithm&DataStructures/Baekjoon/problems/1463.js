const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
/**
 * 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
 *
 * X가 3으로 나누어 떨어지면, 3으로 나눈다.
 * X가 2로 나누어 떨어지면, 2로 나눈다.
 * 1을 뺀다.
 * 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
 */

if (input === 1) {
  console.log(0);
  return;
}

const array = [];
let target = 2;

while (target <= input) {
  array[target] = (array[target - 1] ?? 0) + 1;

  if (target % 3 === 0)
    array[target] = Math.min(array[target], (array[target / 3] ?? 0) + 1);
  if (target % 2 === 0)
    array[target] = Math.min(array[target], (array[target / 2] ?? 0) + 1);

  target++;
}

console.log(array[input]);
