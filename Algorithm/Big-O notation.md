# Big-O notation

- 빅오 표기법(Big-O notation)은 알로리즘의 시간 복잡도를 나타내는 표기법이다.

## 알고리즘의 시작과 끝 시간의 차이를 이용한 속도 측정

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
