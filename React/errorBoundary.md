# ErrorBoundary

- 하위 컴포넌트 트리의 어디에서든 자바스크립트 에러를 기록하며 깨진 컴포넌트 트리 대신 폴백 UI를 보여주는 React 컴포넌트

- ErrorBoundary의 하위 트리에 존재하는 **렌더링 과정, 생명주기 메서드, 모든 생성자에 대하여 오류를 감지**

- _static getDerivedStateFromError()_ 와 _componentDidCatch()_ 중 하나라도 정의하면 클래스 컴포넌트 자체가 에러 경계(ErrorBoundary)가 된다.

- 에러가 발생한 뒤에 폴백 UI를 렌더링하려면 _static getDerivedStateFromError()_

- 에러 정보를 기록하려면 _componentDidCatch()_

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  *static getDerivedStateFromError*(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  *componentDidCatch*(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

<aside>
🚫 ErrorBounadry 는 자기 자신에 대한 오류를 감지할 수 없다.

</aside>

<aside>
🚫 다음과 같은 에러는 포착하지 않는다.

- 이벤트 핸들러(렌더링 중에 발생하는 오류가 아님)
- 비동기적 코드
- 서버 사이드 렌더링
- 자식에서가 아닌 에러 경계 자체에서 발생하는 에러
</aside>

## 참조

[에러 경계(Error Boundaries) - React](https://ko.reactjs.org/docs/error-boundaries.html)
