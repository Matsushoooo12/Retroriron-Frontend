# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## React プロジェクトに Sass 導入 → 一応今後使うためのまとめ

```
$ yarn add node-sass@4.14.1
```

バージョン指定をせずに node-sass をインストールすると

```
Error: Node Sass version 6.0.1 is incompatible with ^4.0.0 || ^5.0.0.
```

というエラーが出る。

## Sass 反映

スタイル名.module.scss というファイルを作って、普通にスタイルを書く

```
.text{
    background-color: black;
    width: 100px;
    height: 100px;
}
```

そして、コンポーネントにインポートして使う

```
import React from 'react'
import sass from './'

const Text = () => {
    return(
        <div class={sass.container}>
        </div>
    )
}
```

## React プロジェクトに css in JS を導入

```
$ npm i @emotion/styled @emotion/react
```

コンポーネントに css in JS を記述

```
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`

const コンポーネント名 = () => {
    return(
        <Container>
        </Container>
    )
}
```

これで表示ができる。

## PC 版ヘッダー作成

<img width="1680" alt="スクリーンショット 2021-10-09 4 50 17" src="https://user-images.githubusercontent.com/66903388/136617313-9efe6da6-e568-4ec3-8b8c-e9459944d7aa.png">

## Home ページ

### PC

---

<img width="1680" alt="スクリーンショット 2021-10-10 3 10 39" src="https://user-images.githubusercontent.com/66903388/136669665-11408745-9987-486c-bc28-fd4b790879f6.png">

<img width="1680" alt="スクリーンショット 2021-10-10 3 10 46" src="https://user-images.githubusercontent.com/66903388/136669690-90a6ab57-f9b3-4e99-a9dd-c9437cea3841.png">

<img width="1680" alt="スクリーンショット 2021-10-10 3 10 52" src="https://user-images.githubusercontent.com/66903388/136669707-c0ffd0d3-047e-4869-bb52-02a242366c92.png">

### Tab

---

<img width="764" alt="スクリーンショット 2021-10-15 18 04 11" src="https://user-images.githubusercontent.com/66903388/137462315-c6be77c4-f22e-49d1-a397-42374828c62e.png">

<img width="764" alt="スクリーンショット 2021-10-15 18 04 19" src="https://user-images.githubusercontent.com/66903388/137462375-919e307b-0edc-49f1-a766-1a57474c8655.png">

## News ページ

### PC

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 23 47" src="https://user-images.githubusercontent.com/66903388/137448836-fd3c9290-daa5-4901-b4e7-b9c9e4ef03c3.png">

### Tab

---

<img width="764" alt="スクリーンショット 2021-10-15 18 04 24" src="https://user-images.githubusercontent.com/66903388/137462448-6a9b8675-f830-48a0-8889-8c2848725800.png">

<img width="764" alt="スクリーンショット 2021-10-15 18 04 28" src="https://user-images.githubusercontent.com/66903388/137462485-679e3011-da0a-42ae-8df7-a22d64f1f532.png">

## Live ページ

### PC

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 23 57" src="https://user-images.githubusercontent.com/66903388/137448909-43faee77-4829-470f-a595-205fcb1c3d2c.png">

## Ticket モーダル

### TicketForm

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 24 03" src="https://user-images.githubusercontent.com/66903388/137449056-4bff8ab1-3e84-4268-921c-b81fc8024b88.png">

### TicketConfirm

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 24 17" src="https://user-images.githubusercontent.com/66903388/137449112-3811f377-ddfa-458a-ac58-4b7d8a15ae57.png">

### TicketComplete

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 24 24" src="https://user-images.githubusercontent.com/66903388/137449190-c76577f7-847b-40fb-b88e-95836b38ca2e.png">

### Tab

---

<img width="764" alt="スクリーンショット 2021-10-15 18 04 32" src="https://user-images.githubusercontent.com/66903388/137462613-7b0ca3fa-013f-4651-a6c5-7a7c1c4cc4b3.png">

## TicketForm

---

<img width="764" alt="スクリーンショット 2021-10-15 18 04 37" src="https://user-images.githubusercontent.com/66903388/137462700-a2702ef2-d6b5-44fd-8f43-8c4669e3543b.png">

## Discography ページ

### PC

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 24 34" src="https://user-images.githubusercontent.com/66903388/137449279-3151bcd1-58b8-4995-a6d0-f541cdf3c969.png">

### Tab

<img width="764" alt="スクリーンショット 2021-10-15 18 04 42" src="https://user-images.githubusercontent.com/66903388/137462761-32d93381-89aa-49c2-8cff-3bd521600b27.png">

## Contact ページ

### PC

---

#### ContactForm

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 24 41" src="https://user-images.githubusercontent.com/66903388/137449378-abc1f337-8eda-4732-ac63-b7b371b8eba4.png">

#### ContactConfirm

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 24 58" src="https://user-images.githubusercontent.com/66903388/137449435-58257062-b61f-4143-88b6-9fe4f170c6fb.png">

#### ContactComplete

---

<img width="1680" alt="スクリーンショット 2021-10-15 16 26 18" src="https://user-images.githubusercontent.com/66903388/137449492-d16f12e1-ec6a-40a2-a2ae-8aa319f99101.png">

### Tab

---

#### ContactForm

---

<img width="764" alt="スクリーンショット 2021-10-15 18 04 46" src="https://user-images.githubusercontent.com/66903388/137462832-30b23c92-0fc7-4a0f-8a8a-2a6b29c5b656.png">
