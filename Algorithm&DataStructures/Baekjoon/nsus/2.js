// 영어로 된 숫자를 한글 숫자로 변환해주십시요.

// 영어로 된 숫자의 범위는 0 부터 999 까지 입니다. 대문자 소문자 모두 입력될 수 있습니다.

// 백 단위가 있는 경우 숫자를 나타내는 단어와 hundred(s) 사이는 공백이 있습니다.

// 20 이상이면서 일의 자리가 0 이 아닌 경우, 십의 자리 단어와 일의 자리 단어 사이에 공백이 있습니다.

// 입력 예시 1.

// one hundred twenty two

// 입력 예시 2.

// NINETY nine

// 주의 1: '일백' 또는 '일십' 대신 '백' 또는 '십' 으로 표현해주십시요.

// 주의 2: 한글 숫자 출력은 공백없이 이어서 표현해주십시요.

const input = require("fs").readFileSync("./example.txt", "utf8");
const splitedInput = input
  .split(" ")
  .map((value) => value.toLowerCase().replace("hundreds", "hundred"));
const numbersMap = {
  one: "일",
  two: "이",
  three: "삼",
  four: "사",
  five: "오",
  six: "육",
  seven: "칠",
  eight: "팔",
  nine: "구",
  ten: "십",
  eleven: "십일",
  twelve: "십이",
  thirteen: "십삼",
  fourteen: "십사",
  fifteen: "십오",
  sixteen: "십육",
  seventeen: "십칠",
  eighteen: "십팔",
  nineteen: "십구",
  twenty: "이십",
  thirty: "삼십",
  forty: "사십",
  fifty: "오십",
  sixty: "육십",
  seventy: "칠십",
  eighty: "팔십",
  ninety: "구십",
  hundred: "백",
};

console.log(
  splitedInput
    .map((value) => numbersMap[value])
    .join("")
    .replace("일백", "백")
);
