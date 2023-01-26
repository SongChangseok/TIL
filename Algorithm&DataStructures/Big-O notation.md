# Big-O notation

- 알고리즘의 **시간 복잡도**를 나타내는 표기법이다.
- 함수의 **입력 값에 따라 함수 실행 시간이 변하는 관계**를 의미한다.
- 정확도가 아니라 **전체적인 추세**를 중요하게 생각한다.

## 시간 복잡도

- 알고리즘의 속도에 해당하는 연산시간의 분석결과이다.

### performance.now

- 아래 예제처럼 performance.now를 사용하여 속도를 측정할 수 있다.

```jsx
const addUpTo = (n) => (n * (n + 1)) / 2;

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
```

### 문제점

1. 기기마다 다른 방식으로 시간을 기록하기 때문에 속도의 차이나 측정된 시간들이 달라질 수 있다.
2. 동일한 기기에서도 다른 시간을 기록할 수 있다.
3. 어떤 알고리즘은 짧은 시간 안에 모든 것이 처리되기 때문에 속도 측정의 정확도가 낮아질 수 있다.

- 이럴 때 빅오 표기법(Big-O notation)이 유용하다.

### 연산 갯수 세기

```jsx
const addUpTo = (n) => (n * (n + 1)) / 2;
```

- 연산자가 3개(\*, +, /)이므로 n의 값과 상관 없이 연산이 3번 이루어진다.

```jsx
const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
```

- for문에서 ≤, ++ 연산자와 += 연산자가 n의 값에 따라 연산이 이루어진다.

### 빅오 표기법

```jsx
// O(n)
const countUpAndDown = (n) => {
  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  // O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
};
```

- 두 개의 for문이 n의 값에 따라 실행되는데, 식을 n으로 단순화하여 O(n)으로 표시한다.

```jsx
// O(n^2)
const printAllPairs = (n) => {
  // O(n)
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
```

- n의 값에 영향 받는 for문 안에 for문이 있기 때문에 O(n\*n)으로 표시한다.

### 표현식의 단순화

1. 상수 제외
   - n의 값에 따라 실행 시간도 비례하기 때문에 n, 10n,1000n 이든 상수에 상관 없이 n으로 단순화한다.
     - O(2n) → O(n)
     - O(500) → O(1)
     - O(13n^2) → O(n^2)
2. 작은 연산 제외
   - 앞의 상수와 같이 작은 연산도 중요하지 않다.
     - O(n + 10) → O(n)
     - O(1000n + 50) → O(n)
     - O(n^2 + 5n + 8) → O(n^2) / n^2에 비하면 5n+8도 작은 연산이다.

### 단순화 규칙

1. 사칙연산은 상수이다.
2. 변수 할당은 상수이다.
3. 인덱스를 사용하여 배열의 요소에 접근하거나, 키를 사용하여 객체의 데이터에 접근하는 것은 상수이다.
4. 반복문의 길이 곱하기 반복문 안의 연산들이 된다. 만약 중첩 반복문이 있다면 n^2이 된다.

```jsx
// O(n)
const logAtLeast5 = (n) => {
  for (let i = 0; i < Math.max(5, n); i++) {
    console.log(i);
  }
};
```

- n의 값이 5 이전에는 5번만 반복하다가, 5를 넘어가면 n의 값만큼 반복하게 되므로 O(n)이다.

```jsx
// O(1)
const logAtMost5 = (n) => {
  for (let i = 0; i < Math.min(5, n); i++) {
    console.log(i);
  }
};
```

- n의 값이 5 이전에는 n의 값만큼 반복하다가, 5를 넘어가면 5번만 반복하게 되므로 O(1)이다.

![빅오 표기법 그래프](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8be0b00e-7c80-4886-b749-fd6e443194d0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230126T141953Z&X-Amz-Expires=86400&X-Amz-Signature=ac527d47327d42ccceb0a318fd21c13a8aedafc8f555fd6e449ec0495f34991f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

## 공간 복잡도

- 알고리즘의 메모리 사용량을 나타낸다.
- booleans, numbers, undefined, null은 O(1)이다.
- 문자열은 O(n)이다.
- reference 타입(배열, 객체)는 대부분 O(n)이다.
-

```jsx
// O(1)
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = arr[i];
  }
  return total;
};

// O(n)
const double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
```

## 출처

[udemy 강의: JavaScript 알고리즘 & 자료구조 마스터클래스
](https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28559451#overview)
