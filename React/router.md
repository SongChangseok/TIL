# router

- 리액트 라우터와 같은 라우팅 시스템은 SPA에서 사용자가 여러 페이지가 존재하는 것처럼 느낄 수 있도록 주소창의 경로에 따라 알맞는 페이지를 보여준다.
- 링크를 통해 다른 페이지로 이동하게 될 때 서버에 다른 페이지의 html를 새로 요청하는 것이 아니라, 브라우저의 History API를 사용하여 브라우저의 주소창의 값만 변경하고 기존 페이지에 띄웠던 웹 애플리케이션을 그대로 유지하면서 라우팅 설정에 따라 또 다른 페이지를 보여주게 된다.

## Link와 NavLink

- Link 컴포넌트는 내부적으 라우터에 반응한다. 링크의 클릭을 수신하면 브라우저의 기본값을 유지하고 URL 업데이트한다.
- NavLink 컴포넌트는 기본적으로 Link 컴포넌트와 동일하게 작동하고, activeClassName prop을 통해 활성화된 항목에 대한 css 클래스를 설정할 수 있다.