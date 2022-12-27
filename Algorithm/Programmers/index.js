// const t = "3141592";
// const p = "271";
// const t = "500220839878";
// const p = "7";
const t = "10203";
const p = "15";

console.log(solution(t, p));

function solution(t, p) {
  var answer = 0;
  let pLength = p.length;

  for (let i = 0; i < t.length - pLength + 1; i++) {
    let target = t.substr(i, pLength);

    if (target <= p) answer++;
  }

  return answer;
}
