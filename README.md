# レトロリロン　 Web サイト

## Home

<img width="172" alt="スクリーンショット 2021-11-25 22 16 17" src="https://user-images.githubusercontent.com/66903388/143448386-1e0204fe-1fec-44f9-b62b-51870c4cdee0.png">

<video><source src="https://user-images.githubusercontent.com/66903388/153749994-43d60bde-369a-4962-b007-fdcaec33b3c8.mov"></source></video>

## 概要

音楽バンド、レトロリロンの Web サイト

- レトロリロンのメンバーであった旧友から Web サイト作成を頼まれたため作成。
- リッチな画面遷移を実現するため SPA アプリを作成。

URL<br>
https://retroriron.com

## 使用技術

- 使用言語：Ruby、JavaScript
- 使用フレームワーク：Ruby on Rails、React
- その他使用技術：画像アップロード →AWS 　 S3
- デプロイ：Rails→Heroku、React→Netlify

Heroku は無料プランだと 30 分でスリープモードに入り、30 分アクセスがない場合、次にアクセスする際に時間がかかってしまうため、「UptimeRobot」という 5 分おきにサイトをパトロールしてくれるツールを使用して解決しました。

### npm package

---

- @emotion/react
- @emotion/styled

  - スタイル

- axios
- axios-case-converter

  - API 通信

- react-router-dom

  - ルーティング

- react-hook-form

  - フォーム作成

- moment

  - 日付調整

- react-helmet

  - HEAD タグ追加

- eslint
- prettier
  - コードリファクタリング
