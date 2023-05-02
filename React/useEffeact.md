# useEffect

## Side Effects

- 애플리케이션에서 일어나는 모든 것을 뜻한다.

- http 리퀘스트를 보내거나 브라우저 저장소에 무언가를 저장하는 것이다.

## 설명

- useEffect는 모든 컴포넌트 렌더링 후에 실행된다.

```jsx
useEffect(() => { ... }, [ dependencies ]);
```

- 두 개의 인수와 같이 호출한다. 첫번째 인자는 함수이다. 모든 컴포넌트 평가 후에 지정된 의존성이 변경된 경우라면 실행되는 함수이다. 두번째 인자로 의존성을 지정해준다.

- 언제 실행될지 제어하기 위해 useEffect를 사용할 수 있다.

- 의존성이 변경된 경우에만 실행되는데, 의존성이 없을 경우 실행될 때 한 번 실행된다.

- 첫번째 인자로 받는 함수에서 익명의 화살표 함수를 반환할 수 있는데, 이것을 클린업 함수라고 한다.

- 처음 실행되는 경우를 제외하고 인자의 함수가 실행되기 전에 클린업 함수가 실행된다. 그리고 이 이펙트를 특정한 컴포넌트가 DOM에서 언마운트될 때마다 실행된다.

> 클린업 함수는 모든 새로운 사이드 이펙트 함수가 실행되기 전과 컴포넌트가 제거되기 전에 실행된다. 그리고 첫번째 사이드이펙트 함수가 실행되기 전에는 실행되지 않는다.

- 의존하는 값이 변경됨에 따라 사이드이펙트가 불필요하게 실행되는 것을 방지할 때 클린업 함수를 사용할 수 있다.

- 예를 들어, input에서 change 이벤트를 통해 입력한 값을 state에 저장하려고 하는데 입력할 때마다 불필요하게 validation을 확인하는 사이드이펙트가 실행되는 것을 클린업 함수를 통해 막을 수 있다.

```jsx
useEffect(() => {
  console.log("CHECK VALIDATION");
  setFormIsValid(
    enteredEmail.includes("@") && enteredPassword.trim().length > 6
  );
}, [enteredEmail, enteredPassword]);
```

```jsx
useEffect(() => {
  const identifier = setTimeout(() => {
    console.log("CHECK VALIDATION");
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, 500);
  return () => {
    console.log("CLEAN UP");
    clearTimeout(identifier);
  };
}, [enteredEmail, enteredPassword]);
```

![Untitled](https://file.notion.so/f/s/fc42643d-3000-4543-89ed-a6a6d886d208/Untitled.png?id=f7d4a3e3-504d-43a6-bb24-d0683b01bbcc&table=block&spaceId=20c36604-35c2-450e-9c93-ed7003b1ec4d&expirationTimestamp=1683117442390&signature=5c8bSdkiIeAoHCgQwQDPrFM702gFNveDXBOW0Ddu1gk&downloadName=Untitled.png)

- 위 소스와 같이 setTimeout을 통해 0.5초 지연시켜서 키를 입력할 때마다 불필요한 이벤트가 발생하지 않도록 방지한다. 그리고 클린업 함수에 clearTimeout을 추가하여 사용자가 키를 입력하면 지워지도록 한다. 즉, 새로운 타이머를 설정하기 전에 마지막 타이머를 지우게 된다. 이것을 디바운싱(그룹화)이라는 기술이라고 한다.

- 이 방식을 통해 사이드이펙트에서의 불필요한 이벤트 발생을 줄일 수 있다. http 통신하는 이벤트인 경우에 큰 영향을 미칠 수 있기 때문에 신경 쓸 필요가 있다.

## 객체 속성을 useEffect에 의존성으로 추가하기

- 객체 분할을 사용하여 객체 전체 대신 특정 속성을 의존성으로 전달하면, 특정 속성 값이 변경될 때만 effect가 실행되도록 할 수 있다.

```jsx
const { somProperty } = someObject;
useEffect(() => {
  // code
}, [somProperty]);
```

```jsx
useEffect(() => {
  // code
}, [someObject.somProperty]);
```

- 하지만, 아래와 같이 의존성을 전달하면 특정 속성이 변경될 때가 아닌 someObject가 변경될 때마다 재실행되기 때문에 이 코드는 사용을 피해야 한다.

```jsx
useEffect(() => {
  // code
}, [someObject]);
```

## 의존성

### 종속성 목록을 추가해야 하는 경우

- **`useEffect`** 내에서 상태(state) 값 또는 props 값에 의존하는 작업을 수행할 때
- **`useEffect`**가 의존하는 값이 변경될 때만 작업을 수행하도록 보장하려는 경우
- **`useEffect`**에서 구독(subscription) 중인 값이 변경될 때만 작업을 수행하도록 보장하려는 경우

### 종속성 목록을 추가하지 않아도 되는 경우

- **`useEffect`**에서 사용하는 값이 변경될 가능성이 없는 경우
- **`useEffect`**가 단 한 번만 실행되고, 이후에는 더 이상 업데이트할 필요가 없는 경우
- **`useEffect`**가 컴포넌트가 렌더링될 때마다 실행되어야 하는 경우
