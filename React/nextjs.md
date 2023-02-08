# NextJS

- ReactJS를 기반으로 하 풀스택 프레임워크라고 볼 수 있다.

## 주요기능

1. 내장 서버 사이드 렌더링
2. 파일기반 라우팅으로 라우팅 간소화
3. 풀스택 앱 빌드

## 설치

`npx create-next-app`

## 동적 URL

- js 파일 명을 **대괄호([])** 를 사용하여 동적 페이지로 만들 수 있다.
  ![동적 URL 1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bf8de7ee-6d27-4435-957a-5e86831e80a2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230208T130629Z&X-Amz-Expires=86400&X-Amz-Signature=2a1288f01c7b24a863c8602761b39261c6c6794214da5ededdec6e6624921a5c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)
  ![동적 URL 2](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e88a57de-7d05-4179-b5db-ffaeffb904b3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230208T130722Z&X-Amz-Expires=86400&X-Amz-Signature=44c3f2bb886c3fa8707514971db28cabbce02a93fa1bb25168f7f3258b6498c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)
- `useRouter` 훅을 통해 라우터 객체에 접근이 가능하고, 이 객체의 query 속성에서 js 파일명 대괄호([]) 안에 입력한 값을 확인할 수 있다.

  ```jsx
  import { useRouter } from "next/router";

  const DetailPage = (params) => {
    const router = useRouter();
    const newsId = router.query.newsId;

    console.log(newsId);

    return <h1>The Detail Page</h1>;
  };
  ```

- 라우터는 페이지를 처음 렌더링할 때 즉시 실행되는데, 이 시점에서는 URL 정보가 없어서 undefined로 출력된다. URL 정보가 입력되면 컴포넌트는 리렌더링하고 값을 확인할 수 있다.

![라우터 렌더링](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1b9aba11-1fb9-4a41-89b4-8cea4d96f6aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230208T130838Z&X-Amz-Expires=86400&X-Amz-Signature=103b7d8be8270f3e2e1d7563c54c05f9700764193829b3ef8a060842334017d6&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

## 페이지 간 연결

- `Link` 컴포넌트를 사용해 다른 페이지 링크를 만들 수 있다.
- Link 컴포넌트는 a 태그를 렌더링하고 클릭 이벤트를 감지해서 브라우저의 기본 동작으로 새 HTML 페이지를 불러오는 대신에 불러올 컴포넌트를 읽어 들이고 URL을 변경하여 페이지가 변경된 것처럼 보이게 한다.

```jsx
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">News 1</Link>
        </li>
        <li>
          <Link href="/news/2">News 2</Link>
        </li>
      </ul>
    </>
  );
};
```

## 레이아웃으로 감싸기

- \_app.js는 NextJS가 렌더링하는 최상위 컴포넌트처럼 작동한다.
- Component 프로퍼티는 렌더링될 실제 페이지를 저장하고 있다. 이 컴포넌트를 레이아웃 컴포넌트로 래핑하면 모든 페이지에 레이아웃이 적용된다.

```jsx
// _app.js
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

## 사전 렌더링 방식

NextJS는 다음 두 가지 방식으로 사전 렌더링을 지원한다.

1. **Static Generation** : 빌드 시에 빌드한 페이지를 기반으로 정적 페이지를 생성한다. 정적 페이지는 백엔드에서 데이터를 불러와 렌더링할 필요가 없기 때문에 매우 빠르게 응답한다.
2. **Server-side Rendering** : 빌드 시간에 빌드하지 않고, 렌더링할 때마다 백엔드로 부터 데이터를 불러와 렌더링하는 방식이다. 이 방식은 데이터가 실시간으로 갱신되는 상황에서 유용하게 사용된다.

### 정적 사이트 생성(SSG: Static Site Generation)

- **getStaticProps** 함수를 사용해 정적 페이지를 구현할 수 있다.
  - **빌드 시에 실행**되며, 특정 URL에 대해 정적 페이지를 생성하는데 사용된다.
  - 함수가 반환하는 값은 다음과 같이 props로 특정 페이지를 렌더링하는데 사용된다.
  - 빌드 시에 함수가 반환하는 값을 기반으로 렌더링된 페이지는 정적 페이지로 저장된다.
  - 사용자가 렌더링된 페이지를 보면 정적인 내용이 보여지는 것처럼 보이지만, 백엔드에서 데이터를 불러와서 렌더링한 것이다.
- pages의 컴포넌트에서만 사용 가능하다.
- 비동기적으로 설정되어 promise를 반환하고, NextJS는 이 promise가 완료될 때까지 기다린다.
- 적용한 페이지의 소스를 보면 getStaticProps 함수를 통해 조회한 데이터를 이용해 작성한 항목들이 있는 것을 확인할 수 있다. 전체 HTML 코드를 포함하고 있고, 당연히 검색 엔진에도 좋다.

```jsx
// HomePage.js
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
```

- 하지만 데이터가 실시간으로 자주 변하는 경우에는 매번 빌드할 수 없기 때문에 위와 같이 작성할 경우 문제가 발생할 수 있다.
- getStaticProps 반환값에 `revalidate` 프로퍼티를 추가함으로써 데이터가 실시간으로 자주 변하는 경우에도 배포 후에도 페이지를 다시 생성할 수 있게 할 수 있다. 그래서 정해진 값의 시간에 따라 배포 후에도 페이지를 다시 생성하도록 하는 것이다.

```jsx
// HomePage.js
export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // 1시간마다 페이지 재생
    revalidate: 3600,
  };
}
```

### 서버 사이드 렌더링(SSR: Server-side Rendering)

- getServerSideProps 함수를 사용해 SSR 구현이 가능하다.
  - NextJS가 **서버에서 렌더링**하는 컴포넌트를 위해 제공하는 기능이다.
  - 함수 안의 코드는 **요청이 들어올 때마다 실행**되며, 빌드 프로세스 단계에서 실행되지 않는다.
  - 함수는 반환값으로 페이지에 적용할 props를 반환하고, 파라미터로 전달받은 객체를 통해 **요청 객체(req)와 응답 객체(res)**를 확인할 수 있다.
- 데이터가 실시간으로 변경되는 경우 서버에서 바로 렌더링할 수 있어 좋은 방법이다.

### getStaticProps vs getServerSideProps

- getStaticProps은 빌드 단계에서 실행되며 요청 객체에 접근할 필요가 없고 항상 바뀌는 데이터가 없다면 유용하게 사용할 수 있다.
- getServerSideProps은 서버 배포 후에 실행되며, 요청이 들어올 때마다 실행된다. 이 함수를 사용할 경우 revalidate를 추가할 필요가 없다.
- 두 함수의 속도 차이는 getStaticProps가 캐시하고 다시 사용하기 때문에 더 빠르다.

### 동적 페이지 구현 방법

- NextJS에서 동적 페이지를 구현하기 위해서는 `getStaticPaths` 함수를 사용해야 한다.

  ```jsx
  // HomePage.js
  export async function getStaticPaths() {
    // 이 함수는 배포된 페이지를 생성하기 위해 pages 폴더 내의 파일들을 돌아다녀 웹 사이트의 각 페이지의 정적 라우트를 반환한다.
    // 기본적으로 이 함수는 다양한 파라미터들을 사용하여 라우트를 반환한다.
    const paths = [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ];

    return {
      paths,
      fallback: false,
    };
  }
  ```

- `getStaticPaths` 함수를 사용하면 정적인 라우트를 반환하고, fallback 옵션을 true로 설정하면 미리 알려지지 않은 동적 라우트를 렌더링할 수 있다.
- 동적 라우트를 생성하기 위해 `getStaticPaths` 함수에 다양한 파라미터를 사용할 수 있다.
- `getStaticProps` 함수를 사용하면 페이지가 렌더링될 때마다 데이터를 가져올 수 있다.
- `getServerSideProps` 함수는 서버사이드 렌더링을 구현하기 위해 사용되며, API 호출 등 동적인 데이터를 가져오는 작업을 수행할 수 있다.
- `getInitialProps` 함수는 컴포넌트가 렌더링될 때 데이터를 가져오는데 사용할 수 있는 유용한 함수이다.

### 백엔드 코드 예제

- NextJS는 강력한 백엔드 코드를 작성하기 위한 다양한 기능들을 제공한다.
- 백엔드 코드를 구현하는 한 가지 방법은 **API Routes**를 사용하는 것이다.
- 예를 들어 `/api/example` 라우트를 생성하고 싶다면, pages 디렉토리 하위의 api 폴더에 `example.js` 파일을 생성하고 다음과 같이 코드를 작성하면 된다.

```javascript
export default (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
};
```

- 또 다른 방법으로는 **GraphQL**을 사용하는 것이다.
- GraphQL은 데이터를 간편하고 쉽게 가져올 수 있고, 데이터의 구조와 연관관계를 정의할 수 있어 개발 속도를 향상시킬 수 있다.
- 예를 들어 `/api/example` 라우트를 GraphQL로 생성하고 싶다면, pages 디렉토리 하위의 api 폴더에 `example.js` 파일을 생성하고 다음과 같이 코드를 작성하면 된다.

```javascript
export default {
  Query: {
    example: () => {
      return {
        message: "Hello World!",
      };
    },
  },
};
```

- 또 다른 방법으로는 NextJS가 제공하는 **개발 서버 기능**을 사용하는 것이다. 개발 서버 기능은 백엔드 API 구현을 도와준다. 개발 서버는 코드를 수정하는 데 필요한 모든 기능들을 제공하며, 내부적으로 \*\*Hot Module Replacement

## 출처

[udemy](https://www.udemy.com/course/best-react/learn/lecture/28518365#overview)
