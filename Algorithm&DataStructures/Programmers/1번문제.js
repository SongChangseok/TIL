const solution = (phone_number) => {
  if (!phone_number) return -1;

  let answer = -1;
  const splitedPhoneNumber = phone_number.split("-");

  switch (splitedPhoneNumber.length) {
    case 3:
      answer = case1(splitedPhoneNumber);
      break;
    case 1:
      answer = case2(splitedPhoneNumber);
      break;
    case 4:
      answer = case3(splitedPhoneNumber);
      break;
  }

  return answer;
};

const case1 = (phArray) => {
  const firstNumber = phArray[0] === "010";
  const secondNumber = phArray[1].length === 4 && !phArray[1].includes("+");
  const thirdNumber = phArray[2].length === 4 && !phArray[2].includes("+");

  return firstNumber && secondNumber && thirdNumber ? 1 : -1;
};

const case2 = (phArray) =>
  phArray[0].length === 11 && !phArray[0].includes("+") ? 2 : -1;

const case3 = (phArray) => {
  const firstNumber = phArray[0] === "+82";
  const secondNumber = phArray[1] === "10";
  const thirdNumber = phArray[2].length === 4 && !phArray[2].includes("+");
  const fourthNumber = phArray[3].length === 4 && !phArray[3].includes("+");

  return firstNumber && secondNumber && thirdNumber && fourthNumber ? 3 : -1;
};

// let phone_number = "01012345678";
// let phone_number = "010-1212-333";
// let phone_number = "+82-10-3434-2323";
// let phone_number = "+82-010-3434-2323";

console.log(solution(phone_number));
