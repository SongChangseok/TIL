// const s = "1 2 3 4";
const s = "-1 -2 -3 -4";
// const s = "-1 -1";

console.log(solution(s));

function solution(s) {
  let array = s.split(" ");

  return `${Math.min(...array)} ${Math.max(...array)}`;
}
