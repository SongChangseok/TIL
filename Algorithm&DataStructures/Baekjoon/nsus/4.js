// 주어진 정사각 행렬을 반 시계방향으로 90도 회전시켜 주세요.

// 입력값의 첫 line 은 행렬의 크기를 나타내는 숫자이고 1 이상입니다.

// 다음 line 부터는, 행렬의 크기를 n 이라고 했을 때, 공백으로 구분된 길이 1 이상의 문자열 n 개로 구성된 line 이 n line 주어집니다.

// 예시 1.

// 입력
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// 출력
// 3 6 9
// 2 5 8
// 1 4 7

// 예시 2.

// 입력
// 3
// I like dogs
// I like cats
// I like birds

// 출력
// dogs cats birds
// like like like
// I I I
// 주의사항

// 입력값을 저장하는데 사용한 메모리상의 행렬 공간 외 추가적인 행렬 공간은 사용할 수 없습니다.
// 입력값을 저장한 메모리상의 행렬 공간에서 숫자들을 실제로 이동시켜야 합니다. 출력시에만 이동된 것처럼 위치를 바꾸어 출력하면 안됩니다.
// index 저장이나 숫자 이동에 필요한 임시 변수는 사용할 수 있습니다.

// 00 01 02 03
// 10 11 12 13
// 20 21 22 23
// 30 31 32 33

// 00 > 30
// 01 > 20
// 02 > 10
// 03 > 00

// 10 > 31
// 11 > 21
// 12 > 11
// 13 > 01

// 20 > 32
// 21 > 22
// 22 > 12
// 23 > 02

// 30 > 33
// 31 > 23
// 32 > 13
// 33 > 03

// 00 > 30 > 33 > 03 > 00
// 01 > 20 > 32 > 13 > 01
// 02 > 10 > 31 > 23 > 02
// 11 > 21 > 22 > 12

// p = length-y-x
// q = x-y
// (+p, +q) > (-q, +p) > (-p, -q) > (+q, -p)

// 바깥부터 회전하여 내부로 들어가는 깊이
// depth: 2의 배수마다 1증가
// 1 0
// 2 1
// 3 1
// 4 2
// 5 2
// 6 3
// ...

const input = require("fs").readFileSync("./example.txt", "utf8");
const [n, ...list] = input.split("\r\n");
const arr = list.map((value) => value.split(" "));

const DEPTH = Math.floor(n / 2);
const MAX_ROTATION = 4;
const LAST_INDEX = n - 1;

const rotate = (firstX, firstY) => {
  const p = LAST_INDEX - firstX - firstY;
  const q = firstX - firstY;

  const helper = (x, y, value, rotation) => {
    const newValue = arr[x][y];

    if (rotation !== 0) arr[x][y] = value;

    if (rotation === MAX_ROTATION) return;

    let newX, newY;

    switch (rotation) {
      case 0:
        [newX, newY] = [x + p, y + q];
        break;
      case 1:
        [newX, newY] = [x - q, y + p];
        break;
      case 2:
        [newX, newY] = [x - p, y - q];
        break;
      case 3:
        [newX, newY] = [x + q, y - p];
        break;
    }

    helper(newX, newY, newValue, rotation + 1);
  };

  helper(firstX, firstY, null, 0);
};

for (let i = 0; i < DEPTH; i++) {
  for (let j = i; j < LAST_INDEX - i; j++) {
    rotate(i, j);
  }
}

console.log(arr.map((v) => v.join(" ")).join("\n"));
