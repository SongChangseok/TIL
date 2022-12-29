// const s = "banana";
const s = "foobar";

console.log(solution(s));

function solution(s) {
  let targetArr = s.split("");

  return targetArr.map((target, index) => {
    if (index === 0) return -1;

    let cutOff = targetArr.slice(0, index);
    let nearByIndex = [...cutOff].lastIndexOf(target);

    return nearByIndex === -1 ? nearByIndex : index - nearByIndex;
  });
}
