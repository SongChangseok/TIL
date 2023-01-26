// const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [COUNT, ...enterLogs] = input;
let result = [];

enterLogs.forEach((log) => {
  const [name, state] = log.split(" ");

  switch (state) {
    case "enter":
      result.push(name);
      break;
    case "leave":
      result = result.filter((value) => value !== name);
      break;
    default:
      break;
  }
});

console.log(
  result
    .sort(function (a, b) {
      if (a < b) return 1;
      if (a > b) return -1;
      if (a === b) return 0;
    })
    .join(" ")
);
