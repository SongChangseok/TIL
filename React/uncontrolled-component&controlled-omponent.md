# Uncontrolled component와 Controlled component

- React에서 `controlled component`와 `uncontrolled component`는 폼 입력 요소(예: input, select, textarea 등)의 처리 방법을 설명하는 용어이다.

## Controlled component

- `Controlled component`는 React state를 사용하여 해당 요소의 상태를 제어한다. 이 상태는 일반적으로 컴포넌트의 props로 전달된다.
- 예를 들어, **`<input>`** 요소의 값을 제어하기 위해 React state를 사용하여 해당 값을 저장하고, **`onChange`** 핸들러를 사용하여 상태를 업데이트한다.
- 이 방법을 사용하면 React가 해당 요소를 완전히 제어하고, 다른 컴포넌트와 상호작용하기 쉽다.

```jsx
import React, { useState } from "react";

function ControlledComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <p>You typed: {value}</p>
    </div>
  );
}
```

## Uncontrolled component

- `Uncontrolled component`는 React state를 사용하지 않고, 대신 ref를 사용하여 요소의 값을 직접 가져온다. 이 방법은 일반적으로 간단하고 빠르게 사용할 수 있지만, 상태의 변경 및 유효성 검사를 직접 관리해야한다.

```jsx
import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button onClick={handleClick}>Log input value</button>
    </div>
  );
}
```

## 사용 용도

- `Controlled component`는 대부분의 경우에서 권장된다.
  - 다른 컴포넌트와 함께 사용할 때
  - 상태에 따른 동작을 변경해야 할 때
  - 유효성 검사와 같은 고급 기능이 필요할 때
- `Uncontrolled component`는 간단한 상황에서 사용된다.
  - 입력 요소에 대한 초기값이 필요한 경우
  - 간단한 작업을 수행할 때: React state를 사용하지 않으므로, 코드가 간단하고 빠르다. 그러나 이 방법으로는 상태 변경 및 유효성 검사와 같은 기능을 수동으로 구현해야 한다.

<aside>
💡 일반적으로 `controlled component`를 사용하는 것이 React의 권장사항이다. 이 방법은 React의 선언적 프로그래밍 방식을 활용하여 코드를 더 쉽게 이해하고 유지보수할 수 있다. 하지만 간단한 상황에서는 `uncontrolled component`를 사용하는 것이 더 적절할 수 있습니다.

</aside>
