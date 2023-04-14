// 입력의 첫 줄은 입력될 문자열의 수 입니다. (1 이상)

// 두번째 줄부터 입력되는 문자열들에 대해 첫번째 문자부터 시작하는(하위 문자열은 입력 문자열의 중간부터 시작하지 않음) 모든 하위 문자열을 구한 뒤 각 하위 문자열의 출현 빈도를 구해 출력해주십시요.

// 입력 문자열들은 공백을 가지지 않고 길이는 1 이상입니다.

// 출력할 문자열들의 순서는 알파벳 순입니다.

// 예시.

// 입력

// 6
// ada
// bean
// adam​
// ace
// be
// ac
// 출력

// a 4
// ac 2
// ace 1
// ad 2
// ada 2
// adam 1
// b 2
// be 2
// bea 1
// bean 1
// 출력 설명 (참고용)

// a 4 // ada adam ace ac
// ac 2 // ace ac
// ace 1 // ace
// ad 2 // ada adam
// ada 2 // ada
// adam 1 // adam
// b 2 // bean be
// be 2 // bean be
// bea 1 // bean
// bean 1 // bean

const input = require("fs").readFileSync("./example.txt", "utf8");

const [n, ...strArray] = input.split("\n");
const sortedStrArray = strArray.sort();
const sortedStrArrayWithoutR = sortedStrArray.map((value) =>
  value.replace("\r", "")
);
const strCountMap = {};

// 하위 문자열을 strCountMap의 key로 설정
sortedStrArrayWithoutR.forEach((value) => {
  for (let i = 1; i <= value.length; i++) {
    const target = value.substring(0, i);
    if (strCountMap[target]) continue;

    // 초기에 출현빈도 계산을 여기에 뒀지만
    // 복잡도 상승으로 인한 중첩반복문 외부로 위치 변경
    // strCountMap[target] = sortedStrArrayWithoutR.filter((str) =>
    //   str.startsWith(target)
    // ).length;

    strCountMap[target] = 0;
  }
});

// 하위 문자열의 집합인 strCountMap를 순회하여 문자열 리스트에서 출현빈도 계산하여 출력
for (const target in strCountMap) {
  console.log(
    target,
    sortedStrArrayWithoutR.filter((str) => str.startsWith(target)).length
  );
}
