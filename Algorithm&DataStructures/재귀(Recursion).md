- 자기자신을 호출하는 절차이다.
- 재귀 함수 작성 시, 확실한 **종료 조건(Base Case)**과 매 호출마다 **다른 입력값**이 필요하다.

```jsx
function countDown(num) {
  if (num <= 0) {
    // 종료 조건(Base Case)
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num); // 다른 입력값
}
```

```jsx
function factorial(num) {
  if (num === 1) return 1; // 종료 조건(Base Case)
  return num * factorial(num - 1); // 다른 입력값
}
```

## 재귀 함수 작성 시 흔히 발생하는 문제

1. 종료 조건이 없는 경우(No Base Case)
2. 잘못된 반환값 또는 반환값이 없는 경우
3. 스택 오버플로우(stack overflow)

   ![스택 오버플로우](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed4a7616-930d-47d1-a266-fe9d1afc98e0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230202T091020Z&X-Amz-Expires=86400&X-Amz-Signature=c62c24128c94755fa72a1ead765456f4d513e0a2ad7e3ae0bcef83912a7ef69a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

## Helper 메소드 재귀 VS 순수 재귀

```jsx
// hepler 메소드 재귀
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

```jsx
// 순수 재귀
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
```

<aside>
💡 **순수 재귀 팁**

- 배열의 경우, 배열을 복사하는 **slice, spread 연산자, concat** 같은 메소드를 사용하면 배열을 변경할 필요가 없다.
- 문자열의 경우, **slice**나 **substring**을 사용해서 사본을 만들 수 있다.
- 객체의 경우, **Object.assign**이나 **spread 연산자**를 사용하는 게 유용하다.
</aside>

## 출처

[](https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28559865#overview)
