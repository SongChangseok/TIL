const input = Number(require("fs").readFileSync("/dev/stdin").toString());

if ([1, 2, 4, 7].includes(input)) {
  console.log(-1);
  return;
}

let mod5 = input % 5;
switch (mod5 % 3) {
  case 1:
    mod5 += 5;
    break;
  case 2:
    mod5 += 10;
    break;
  default:
    break;
}

console.log((input - mod5) / 5 + mod5 / 3);
