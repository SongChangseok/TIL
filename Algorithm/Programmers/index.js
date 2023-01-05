// const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
// const s = "{{20,111},{111}}";
// const s = "{{123}}";
// const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";

console.log(solution(s));

function solution(s) {
  return s
    .replace("{{", "")
    .replace("}}", "")
    .split("},{")
    .sort((a, b) => a.length - b.length)
    .reduce(
      (acc, cur) => [
        ...acc,
        ...cur.split(",").filter((value) => !acc.includes(value)),
      ],
      []
    )
    .map((value) => parseInt(value));
}
