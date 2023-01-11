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
  **const loaderData = useLoaderData();**

  return (
    <>
      <BlogPost title={loaderData.title} text={loaderData.body} />
    </>
  );
};

export default PostDetailPage;

// route 컴포넌트의 loader props에 전달할 함수
**export const loader = ({ context, params, request }) => getPost(params.id);**
```

```jsx
const router = **createBrowserRouter**(
  **createRoutesFromElements**(
    <Route path="/" element={<RootLayout />} **errorElement={<ErrorPage />}**>
			**// 중첩 라우팅 시 하위 Route에 index props를 추가하면 해당 라우트가 기본이 된다.**
      <Route **index** element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route **index** element={<BlogPostsPage />} loader={blogPostsLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
					**// export한 loader를 props로 넘겨주면 컴포넌트 render 시 loader를 실행하여
					// 데이터를 전달한다.**
          **loader={postDetailLoader}**
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} />
    </Route>
  )
);

function App() {
  return **<RouterProvider router={router} />;**
}

export default App;
```

```jsx
const ErrorPage = () => {
  // useRouteError 훅을 통해 loader 실행 시 발생한 에러에 대한 객체를 조회
  **const error = useRouteError();**

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>{**error.message**}</h1>
      </main>
    </>
  );
};

export default ErrorPage;
```
