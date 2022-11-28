# 차랑대여 서비스

> B2C 차량대여 서비스
>
> ### 🌍 [배포링크](https://car-rental-view.vercel.app/)

<br/>

## 📖 목차

- [구현기능](#-구현-기능)
- [기술스택](#-기술-스택)
- [구현방법](#-구현-방법)
- [폴더구조](#-폴더-구조)
- [컨벤션](#컨벤션)
- [프로젝트 설치 및 실행](#프로젝트-설치-및-실행)

</br>

## 🚀 구현 기능

- 공통
  - Next.js 를 이용하여 SSG 구현
  - Context + reducer 를 사용한 전역상태 관리
  - 차량이 없을 때 문구 표시
  - Next Image 를 사용한 이미지 최적화
- SEO
  - next-seo 를 이용한 SEO 구현
  - 링크 공유시 아래의 내용 미리보기로 노출
    -- 제목, 내용, 사진

</br>

## ✏ 기술 스택

TypeScript / Next.js / Axios / styled-components

 </br>
 
## ✔ 구현 방법
 ### 각 페이지 SSG 구현
<img src="https://user-images.githubusercontent.com/30553624/204260154-eda5e3da-57fb-46f1-9698-b4d315e12e74.png" width="60%"/>

- TTV 를 줄이기 위해 각 페이지를 SSG 구현했습니다.사용자에게 빠르게 정적 페이지를 보여줘 기다리는 시간을 최소화했습니다.
  https://github.com/k-watch/car-rental-view/blob/d0aa5afad8e6baf39cc9a1f53512f4ff2e0dcabf/pages/detail/%5Bid%5D.tsx#L56-L72

### Context + reducer 를 사용한 전역상태 관리

- Props Drilling 으로 인한 재렌더링을 최소화하기 위해 Context와 reducer를 사용해 전역상태 관리를 했습니다.
  https://github.com/k-watch/car-rental-view/blob/d0aa5afad8e6baf39cc9a1f53512f4ff2e0dcabf/src/modules/context/CarContext.tsx#L33-L54

### Next Image 를 사용한 이미지 최적화

- 최초 이미지는 IntersectionObserver를 사용하여 Lazy Loading을 구현했으나, Next.js 에서 제공하는 Image 컴포넌트를 사용했습니다. 해당 컴포넌트는 Lazy Loading 뿐만 아니라 CLS 해소와 이미지 사이즈 최적화등의 기능들을 제공해줍니다.
  https://github.com/k-watch/car-rental-view/blob/d0aa5afad8e6baf39cc9a1f53512f4ff2e0dcabf/src/components/car/CarItem.tsx#L32-L37

### next-seo 를 이용한 SEO 구현

 <img src="https://user-images.githubusercontent.com/30553624/204261438-991c4d28-98ad-43af-b569-c090842e02c9.png" width="50%"/>

- 최초 CSR 로 해당프로젝트를 구현했을 때 SEO를 구현하기 위해 pre-rendering 을 하려면 react-snap 설치 외 방법이 마땅치 않았습니다. 따라서 Next.js 로 마이그레이션하여 SEO를 구현했습니다.
  https://github.com/k-watch/car-rental-view/blob/d0aa5afad8e6baf39cc9a1f53512f4ff2e0dcabf/src/utils/common/MetaTag.tsx#L10-L31

</br>

## 📚 폴더 구조

```jsx
📂 pages
└── 📂 detail
📂 public
📂 src
├── 📂 api
│   ├── 📂 car
├── 📂 component
│   ├── 📂 car
│   └── 📂 common
├── 📂 modules
│   ├── 📂 context
│   ├── 📂 hooks
├── 📂 styles
├── 📂 types
└── 📂 utils
    └── 📂 common

```

</br>

## 컨벤션

| 커밋명     | 내용                             |
| ---------- | -------------------------------- |
| ✨ feat    | 파일, 폴더, 새로운 기능 추가     |
| 🐛 fix     | 버그 수정                        |
| 💄 style   | 코드 스타일 변경                 |
| 🛠 refactor | 코드 리팩토링                    |
| 📝 docs    | 문서 생성, 추가, 수정(README.md) |

</br>

## 프로젝트 설치 및 실행

1. cmd 창에 아래 command 입력해주세요.

```
$ npm run dev
```
