# react-transition-group

- React 애니메이션 라이브러리이다. 이 라이브러리를 사용하면 React 컴포넌트의 상태 변화를 애니메이션으로 처리할 수 있다.
- 두 가지 기본 컴포넌트인 `<Transition>`과 `<CSSTransition>`을 제공한다.
- `<Transition>` 컴포넌트는 직접 애니메이션을 정의할 수 있다.
  - 이 컴포넌트는 `in` prop을 사용하여 컴포넌트의 상태가 변할 때마다 자체적으로 애니메이션을 처리합니다.
- `<CSSTransition>` 컴포넌트는 CSS 애니메이션을 사용하여 컴포넌트를 애니메이션화한다.
  - 이 컴포넌트는 `in` prop을 사용하여 컴포넌트의 상태가 변할 때 CSS 클래스를 추가 및 제거하여 애니메이션을 처리한다.
- 또한 `<TransitionGroup>` 컴포넌트를 제공한다.
  - 이 컴포넌트는 다수의 `<Transition>` 또는 `<CSSTransition>` 컴포넌트를 그룹화하여 사용할 수 있다.
  - `<TransitionGroup>` 컴포넌트는 배열과 같은 자료구조를 이용하여 컴포넌트를 추가 및 제거할 수 있다.
  - 각각의 컴포넌트는 독립적인 애니메이션을 수행하며, 배열에서 추가 또는 제거되는 순간에 애니메이션을 처리한다.
- React Transition Group은 React 16.0 이후 버전부터 별도의 패키지로 분리되어 있으며, `react-transition-group` 패키지를 사용하여 설치할 수 있습니다.

- React Transition Group에서 `<Transition>` 컴포넌트와 `<CSSTransition>` 컴포넌트를 사용할 때, 다음과 같은 transition props을 사용할 수 있다.
  - `in` : boolean 타입으로, 애니메이션이 적용되어야 하는 상태이다. true이면 애니메이션이 시작되고, false이면 애니메이션이 종료된다.
  - `mountOnEnter` : boolean 타입으로, 애니메이션이 시작되는 순간에 컴포넌트가 마운트된다. 기본값은 false이다.
  - `unmountOnExit` : boolean 타입으로, 애니메이션이 종료되는 순간에 컴포넌트가 언마운트된다. 기본값은 false이다.
  - `appear` : boolean 타입으로, 컴포넌트가 최초 렌더링될 때 애니메이션이 적용된다. 기본값은 false이다.
  - `enter` : boolean 또는 number 타입으로, 컴포넌트가 추가될 때 애니메이션이 적용된다. true인 경우 기본값인 0.3초가 지정된다.
  - `exit` : boolean 또는 number 타입으로, 컴포넌트가 제거될 때 애니메이션이 적용된다. true인 경우 기본값인 0.3초가 지정된다.
  - `timeout` : number 또는 { enter: number, exit: number } 타입으로, 애니메이션 지속 시간이다. `enter`와 `exit` 프롭이 모두 있을 경우에는 객체 형태로 전달해야 한다. timeout 프롭이 전달되면 enter와 exit는 무시된다.
  - `onEnter` : function 타입으로, 컴포넌트가 **추가**될 때 애니메이션이 시작될 때 호출된다.
  - `onEntering` : function 타입으로, 컴포넌트가 **추가**될 때 애니메이션이 끝나기 직전 호출된다.
  - `onEntered` : function 타입으로, 컴포넌트가 **추가**될 때 애니메이션이 끝난 직후 호출된다.
  - `onExit` : function 타입으로, 컴포넌트가 **제거**될 때 애니메이션이 시작될 때 호출된다.
  - `onExiting` : function 타입으로, 컴포넌트가 **제거**될 때 애니메이션이 끝나기 직전 호출됩니다.
  - `onExited` : function 타입으로, 컴포넌트가 **제거**될 때 애니메이션이 끝난 직후 호출됩니다.

## CssTransition 컴포넌트

- `classNames` props는 `React`에서 제공하는 `CSS Transition` 컴포넌트에서 사용하는 속성 중 하나이다. 이 속성은 애니메이션 클래스 이름을 지정하는데 사용되며, CSS Transition이 마운트, 언마운트 또는 업데이트될 때 적용되는 클래스 이름을 정의한다.
- `classNames` props는 **객체 또는 문자열**을 값으로 가지며, 이 값은 CSS 클래스 이름으로 사용된다. 클래스 이름은 CSS 파일에서 정의할 수 있으며, Transition 컴포넌트에서 지정한 클래스 이름은 특정 상태에 따라 자동으로 적용된다.
- 객체 형태로 `classNames` props를 지정하면, Transition 컴포넌트에서 적용되는 클래스 이름을 더욱 정밀하게 제어할 수 있다. 이 객체는 다음과 같은 속성을 포함할 수 있다.
  - `enter`: 컴포넌트가 처음 마운트될 때 적용되는 클래스 이름
  - `enterActive`: 컴포넌트가 처음 마운트될 때 애니메이션을 적용할 클래스 이름
  - `enterDone`: 컴포넌트가 처음 마운트될 때 애니메이션이 끝난 후 적용할 클래스 이름
  - `exit`: 컴포넌트가 마운트 해제될 때 적용할 클래스 이름
  - `exitActive`: 컴포넌트가 마운트 해제될 때 애니메이션을 적용할 클래스 이름
  - `exitDone`: 컴포넌트가 마운트 해제될 때 애니메이션이 끝난 후 적용할 클래스 이름
- 예를 들어, `classNames` props를 다음과 같이 지정하면, 컴포넌트가 처음 마운트될 때 `example-enter` 클래스 이름이 적용되며, 애니메이션 중일 때는 `example-enter-active` 클래스 이름이 적용되며, 애니메이션이 끝난 후에는 `example-enter-done` 클래스 이름이 적용됩니다.
  ```jsx
  <CSSTransition
    classNames={{
      enter: "example-enter",
      enterActive: "example-enter-active",
      enterDone: "example-enter-done",
    }}
  >
    {/* ... */}
  </CSSTransition>
  ```
