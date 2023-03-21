# useReducer

복잡한 state를 관리할 때 useState 대신 useReducer를 사용할 수 있다.

```jsx
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
// reducerFn = (prevState, action) => newState
```

state와 리듀서를 실행하는 함수(dispatchFn)를 반환한다.

첫번째 인자로 함수를 전달하고, 전달한 함수는 파라미터로 최신 state와 dispatchFn를 통해 전달한 action을 받는다.

두번째와 세번재 인자로 초기 state와 초기 state를 설정하기 위해 실행해야하는 함수를 받는다.

![udemy 강의 캡쳐](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ace14f1f-9334-4499-8314-2fa36eb9db8d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230321T115637Z&X-Amz-Expires=86400&X-Amz-Signature=5297fab5209bd0f267b8b7f76429e32c95bc14cabe5c5eab01ac37154ef27999&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

udemy 강의 캡쳐

useReducer에 첫번째 인자로 전달한 함수는 최신 state와 dispatch를 통해 전달받은 action을 인수로 받는다.

action의 값에 따라 다른 동작이나 값을 반환하도록 할 수 있다.

```jsx
const validateEmail = (email) => email.includes("@");
const reducer = (**state, action**) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: validateEmail(action.val) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: validateEmail(state.value) };
  }

  return { value: "", isValid: null };
};
```

위에서 선언한 reducer 함수를 useReducer의 첫번째 인자로 전달하고, 두번째는 초기화 객체를 전달한다.

useReducer가 반환하는 배열의 첫번째는 현재 state이고 두번째는 dispatch 함수인데, action을 인수로 받아서 reducer를 실행시키는 함수이다.
