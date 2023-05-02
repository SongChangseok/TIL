# Typescript 최초 설정

## 프로젝트 초기화

`npm init`

- 명령으로 프로젝트 초기화

## 모듈 설치

`npm install typescript`

- Typescript 모듈 설치

`npm install @types/node`

- node에서 사용되는 Typescript 타입 정의

`npm install -g ts-node`

- ts 파일을 단계별로 읽어서 변환하고 바로 실행해주는 모듈

## ts 환경설정

`tsc --init --rootDir src --outDir ./bin --esModuleInterop --lib ES2015 --module commonjs --noImplicitAny true`

- `--init`: _tsconfig.json_ 파일 생성
- `--rootDir`: 소스 파일의 루트 폴더
- `--outDir`: 컴파일된 파일의 폴더
- `--esModuleInterop`: _CommonJS_ 모듈을 _import_ 하기 쉽게 해줌
- `--lib`: 추가 라이브러리를 지정
- `--module`: 프로그램의 모듈 시스템을 지정
- `--noImplicitAny`: _any_ 타입으로 추론되면 에러를 발생

## 소스 폴더와 컴파일 폴더 생성

`md rsc`

`md bin`

## 샘플 소스 만들고 빌드 후 실행

`app.ts`

```js
console.log("Hello, World");
```

`tsc`

- _bin_ 폴더에 _app.js_ 파일이 생성됨

## ts-node를 통해 ts파일 실행

`ts-node ./src/app.ts`

## run, build 스크립트 추가

```json
"scripts": {
    "build": "tsc",
    "start": "node ./bin/app.js",
    "dev": "ts-node ./src/app.ts"
  },
```

## 참고

https://offbyone.tistory.com/445
