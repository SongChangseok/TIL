# router

- 리액트 라우터와 같은 라우팅 시스템은 SPA에서 사용자가 여러 페이지가 존재하는 것처럼 느낄 수 있도록 주소창의 경로에 따라 알맞는 페이지를 보여준다.
- 링크를 통해 다른 페이지로 이동하게 될 때 서버에 다른 페이지의 html를 새로 요청하는 것이 아니라, 브라우저의 History API를 사용하여 브라우저의 주소창의 값만 변경하고 기존 페이지에 띄웠던 웹 애플리케이션을 그대로 유지하면서 라우팅 설정에 따라 또 다른 페이지를 보여주게 된다.
- Router는 앱 내에 **하나**만 있어야 한다.
- 각각의 Route는 Routes의 하위 컴포넌트들이다.
- 중첩 Route 구현 시에는 부모 Route의 경로에 와일드카드(\*)를 추가해야 한다.

## Link와 NavLink

- Link 컴포넌트는 내부적으 라우터에 반응한다. 링크의 클릭을 수신하면 브라우저의 기본값을 유지하고 URL 업데이트한다.
- NavLink 컴포넌트는 기본적으로 Link 컴포넌트와 동일하게 작동하고, activeClassName prop을 통해 활성화된 항목에 대한 css 클래스를 설정할 수 있다.

## url parameter를 사용한 동적 경로 추가

- Route 컴포넌트의 path prop에서 : 식별자를 사용해 동적으로 세그먼트를 추가할 수 있다.
- react-router에서 제공하는 useParams 훅을 통해 url 파라미터를 객체 형태로 얻을 수 있다.

```js
const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};
```

## 중첩 라우팅(Nested Routing)

- 중첩 라우팅이란 최상위 컴포넌트가 아닌 하위 컴포넌트 내부에도 라우팅 매핑을 하는 방법이다.(v5)
- v6에서는 Route 컴포넌트의 하위 컴포넌트 Route를 추가하면 중복 라우팅이 가능하고, 해당 컴포넌트에서 Outlet 컴포넌트로 원하는 위치에 중첩 라우트를 위치 시킬 수 있다.
- 기본 페이지가 아닌 페이지 내부에 라우트 필요한 경우가 있을 때 사용한다.
- 예제는 아래 변경점에서 확인 가능

## v6.4 업데이트

- **RouteProvider** 컴포넌트, **createBrowserRouter** 함수, **createRoutesFromElements** 함수를 통해 라우터를 구성해야 6.4 버전의 기능들
- Route 컴포넌트의 **loader** props
  - 컴포넌트가 render되기 전에 props의 loader 함수를 통해 데이터를 전달한다.
  - 컴포넌트에서는 **useLoaderData** 훅을 통해 전달 받은 데이터를 얻을 수 있다.
  - 리액트 라우터는 loader에게 자동으로 객체를 생성하여 제공한다.
  - loader 함수의 파라미터로는 params나 request 같은 데이터가 포함된다.
- Route 컴퍼넌트의 **errorElement** props
  - loader 실행 시 에러가 발생하면 errorElement props로 전달한 컴포넌트를 render한다.
  - 에러 컴포넌트에서 **useRouteError** 훅을 통해 에러 객체를 조회할 수 있다.
  - 최상위 Route에 errorElement props를 추가하여 앱 내에서 발생하는 에러를 공통으로 처리할 수 있다.

```jsx
const PostDetailPage = () => {
  // loader를 통해 조회된 데이터를 가져올 수 있다.
  const loaderData = useLoaderData();

  return (
    <>
      <BlogPost title={loaderData.title} text={loaderData.body} />
    </>
  );
};

export default PostDetailPage;

// route 컴포넌트의 loader props에 전달할 함수
export const loader = ({ context, params, request }) => getPost(params.id);
```

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      // 중첩 라우팅 시 하위 Route에 index props를 추가하면 해당 라우트가 기본이
      된다.
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          // export한 loader를 props로 넘겨주면 컴포넌트 render 시 loader를 실행하여
          // 데이터를 전달한다.
          loader={postDetailLoader}
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

```jsx
const ErrorPage = () => {
  // useRouteError 훅을 통해 loader 실행 시 발생한 에러에 대한 객체를 조회
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>{error.message}</h1>
      </main>
    </>
  );
};

export default ErrorPage;
```

- Route 컴포넌트의 **action** props와 **Form** 컴포넌트
  - Form 컴포넌트는 html form 태그와 유사한 형태로 동작한다.
  - 요청 전송 시, 실제로 전송되는 요청은 없다. **클라이언트 사이드** 코드이기 때문에 백엔드로 요청을 전송하는 대신 양식 데이터를 포함하는 요청 객체를 생성하여 정의한 action 함수로 요청을 전송한다.
  - 앱이 라우터에 submit(get을 제외한 post, put, patch, delete)을 보낼 때마다
- **useNavigation** 훅
  - action 함수나 loader 함수가 현재 수행 중인 작업에 대한 정보를 제공합니다.

```jsx
const actionData = useActionData();

return (
  <>
    {actionData && actionData.status && <p>{actionData.message}</p>}
    <NewPostForm
      onCancel={cancelHandler}
      submitting={navigation.state === "submitting"}
    />
  </>
);
```

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6a651667-f086-408e-92c4-4de4e01647b6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230117T005911Z&X-Amz-Expires=86400&X-Amz-Signature=46eca7c0b06d551df9ae09138145b7cf5663ee70c442c3dfe040d990b738b7f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject">

- defer 함수
  - 해당 loader의 데이터 로드를 연기할 수 있다.
  - 다중 데이터를 로드하는 경우 일부의 데이터만 로드를 연기할 수 있다.
  - Await 컴포넌트를 이용해 resolve props에 연기할 로딩 함수 포인터를 전달한다.
  - 그리고 Await 컴포넌트가 작동하기 위해서는 Suspense 컴포넌트로 감싸야한다.

```jsx
const DeferredBlogPosts = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts.</p>}
        >
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export default DeferredBlogPosts;

export const loader = async () => defer({ posts: getPosts() });

// 로딩 함수에 await을 추가하면 연기되지 않고 로드될 때까지 기다린다.
export const loader = async () => defer({ posts: await getPosts() });
```

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b59497a3-1e09-4031-b023-e719c7319658/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230117T010131Z&X-Amz-Expires=86400&X-Amz-Signature=9e0621c56463f1ee4144926d470e99f54f01a2f7cd81c50ec4fc8a338f547707&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject">

[Deferred Data v6.6.2](https://reactrouter.com/en/main/guides/deferred)

- useFetcher 훅
  - 수동으로 form이나 loader를 수동으로 submit할 때 사용한다.
  - 페이지 전환이 일어나지 않는다.

## v5 > v6 변경점

- Switch → Routes
- exact prop → 기본 적용, exact 없는 url은 “some-url/*”와 같이 *를 사용
- Redirect → Navigate
- children component → element prop

```jsx
// v5
<Switch>
  <Route path="/" exact>
    <Redirect to="/quotes" />
  </Route>
  <Route path="/quotes">
    <AllQuotes />
  </Route>
  <Route path="/quotes/:quoteId">
    <QuoteDetail />
  </Route>
</Switch>
```

```jsx
// v6
<Routes>
  <Route path="/" element={<Navigate to="/quotes" />} />
  <Route path="/quotes" element={<AllQuotes />} />
  <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
</Routes>
```

- useRouteMatch → 상대 경로 지원
- 중첩 라우팅 : 하위 컴포넌트에 Route 위치 → Route의 하위 Route 위치, Outlet으로 표시 위치 설정 가능

```jsx
// v5
const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
```

```jsx
// v6
<Routes>
  ...
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
  ...
</Routes>
```

```jsx
// v6 QuoteDetail.js
const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </>
  );
};
```

- useHistory → useNavigate

```jsx
// v5
const history = useHistory();
const addQuoteHandler = (quoteData) => {
  console.log(quoteData);

  history.push("/quotes");
};
```

```jsx
// v6
const navigate = useNavigate();
const addQuoteHandler = (quoteData) => {
  console.log(quoteData);

  navigate("/quotes");
};
```

- Prompt → 커스텀훅
- activeClassName → className={(navData) ⇒ {navData.isActive ? “class-name” : “”}}

```jsx
// v5
<NavLink to="/quotes" activeClassName={classes.active}>
  All Quotes
</NavLink>
```

```jsx
// v6
<NavLink
  to="/quotes"
  className={({ isActive }) => (isActive ? classes.active : "")}
>
  All Quotes
</NavLink>
```

[Upgrading from v5 v6.6.1](https://reactrouter.com/en/main/upgrading/v5)

[React Router v6 업데이트 정리](https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC#route%EC%97%90-exact-prop-%EC%82%AC%EB%9D%BC%EC%A7%90exact%EA%B0%80-%EA%B8%B0%EB%B3%B8%EC%9C%BC%EB%A1%9C-%EB%90%98%EC%96%B4%EC%9E%88%EC%9D%8C)

## 참고

[react-router 사용하여 react로 Single Page Application 만들기](https://cocoder16.tistory.com/9)

## git

[GitHub - SongChangseok/udemy-study-react-router](https://github.com/SongChangseok/udemy-study-react-router.git)
