# State & User Interaction

리액트는 응용프로그램이 렌더링 되었을 때 모든 과정을 실행하고, 일부 변수가 변경되어도 전반적인 컴포넌트 함수는 다시 실행되지 않는다.

컴포넌트 함수에 변경된 값을 반영하기 위해 state를 사용한다.

state를 사용할 수 있도록 제공하는 훅이 useSate()이다.

```jsx
const [sate, setState] = useSate();
```

setState를 통해 state 값이 변경되면 state가 등록된 컴포넌트는 재렌더링된다.

> setState를 호출했을 때 바로 state 값이 변경되지 않고 state의 업데이트를 예약한다.
>
> 즉, **_setState는 비동기로 작동한다._** state가 변경될 때마다 컴포넌트는 다시 렌더링 되기 때문에 setState가 비동기가 아닌 동기로 작동하면 아주 많은 state가 변경될 때마다 그만큼 컴포넌트가 다시 렌더링되는 문제가 발생한다.
> 그래서 변경된 state들에 대하여 여러 번이 아닌 한번에 렌더링 되기 위해 비동기로 작동한다고 볼 수 있다.

[setState & useState, 왜 비동기일까?(탐구일기, 리액트React) - WORLD IS WIDE](https://choonse.com/2022/01/21/677/)

컴포넌트별 인스턴스를 기반으로 해서 독립적인 state를 갖는다. 즉, 동일한 컴포넌트를 여러 개 생성해도 각 컴포넌트는 자신만의 state를 갖는다.

> state는 컴포넌트의 인스턴스별로 나뉘어져있다.

state가 변경되면서 재렌더링될 때 state는 초깃값이 아닌 업데이트된 값을 갖는다.

초깃값은 처음으로 컴포넌트형 함수가 실행될 때만 고려되는 값이다.

> 응용프로그램에게 반응성을 추가하는 것이 state이다.

## state가 객체인 경우

---

state가 객체인 경우에는 아래 코드처럼 이전 state를 가져와 새로운 값을 오버라이드한다.

```jsx
const [userInput, setUserInput] = useState({
  title: "",
  amount: "",
  date: "",
});

const titleChangeHandler = ({ target: { value } }) => {
  setUserInput({ ...userInput, title: value });
};
```

> 하지만 이전 state에 의존하는 경우 이 방법은 오래되거나 잘못된 상태의 스냅샷에 의존할 수도 있다.

그래서 위 방법이 아닌 아래 코드처럼 인자에 새로운 state를 반환하는 함수를 전달하는 방법을 사용한다. 전달한 함수는 리액트에서 자동으로 실행하고 해당 함수의 인자로 이전 state 를 전달해준다.

```jsx
const [userInput, setUserInput] = useState({
  title: "",
  amount: "",
  date: "",
});

const titleChangeHandler = ({ target: { value } }) => {
  setUserInput((prevState) => ({ ...prevState, title: value }));
};
```

> 이 방법은 인자로 받은 가장 최신 상태의 스냅샷을 이용해 새로운 state로 업데이트할 수 있다.

<aside>
💡 state를 각각의 변수로 사용할지, 하나의 객체로 사용할지에 대한 기준 [useState, 여러 변수 사용 또는 Object 사용](https://www.notion.so/useState-Object-e15ba1e56ce74cdea74b31d6f9e21de5) 를 참고

</aside>
