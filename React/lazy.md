# lazy

## Lazy Loading

- 해당 코드가 필요할 때만 로딩하는 것이다.
- SPA를 사용하면 큰 js 코드 번들을 빌드하게 되고 해당 사이트를 방문하는 모든 방문자가 전체 번들을 다운받게 되고, 코드가 모두 다운로드 완료될 때까지 기다려야 한다. 그래서 최초에 다운로드 되는 번들의 크기를 작게 만들어야한다. 이것을 위해 Lazy Loading을 적용할 수 있다.

---

- 라우트별로 코드를 분할해서 해당 라우트를 방문할 때만 다운로드되도록 할 수 있다.
- import부분을 **동적 import**로 변경한다.
- 페이지 진입 시, 코드가 다운로드 완료되기 전까지 보여줄 대체 콘텐츠가 필요하다. 그래서 라우터를 Suspense 컴포넌트로 래핑한다. 추가하지 않으면 아래와 같은 에러가 출력된다.

![lazy loading 추가 시 fallback 없으로 인한 에러](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b0b9b0d5-0d3e-42d3-a9f1-5f41c15d8865/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230117T063840Z&X-Amz-Expires=86400&X-Amz-Signature=2ba87091eb1244b2de5e5167f52f032e648dcf7bb280814fcaef2fd20e723619&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

- Network탭을 확인하면 해당 라우트의 코드를 다운받는 것을 확인할 수 있다.

![해당 라우트의 소스 코드 다운로드 확인](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/835d944e-b1d6-4ec7-9c00-731650d553d8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230117T063934Z&X-Amz-Expires=86400&X-Amz-Signature=52e1e061abf72bb7a8ed3d958cc87913bfb451622960dda081cfbd0e47f0962a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

```jsx
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// 라우트 별로 코드를 분할 후
// React.lazy를 이용하여 해당 페이지 진입 시 코드를 다운 받도록 설정.
const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <Layout>
      // 페이지의 소스 코드가 다운로드 완료되기 전까지 보여줄 로딩 스피너 설정.
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to="comments">
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
```

## git

[GitHub - SongChangseok/udemy-study-react-router](https://github.com/SongChangseok/udemy-study-react-router.git)
