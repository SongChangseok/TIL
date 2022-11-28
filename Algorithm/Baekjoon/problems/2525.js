const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const time = inputs[0].split(" ");
const requiredMinute = Number.parseInt(inputs[1]);

const date = new Date(1970, 0, 1, time[0], time[1]);
date.setMinutes(date.getMinutes() + requiredMinute);

console.log(date.getHours(), date.getMinutes());
