# レトロリロン　 Web サイト

## Home

<img width="172" alt="スクリーンショット 2021-11-25 22 16 17" src="https://user-images.githubusercontent.com/66903388/143448386-1e0204fe-1fec-44f9-b62b-51870c4cdee0.png">

## 概要

音楽バンド、レトロリロンの Web サイト

- レトロリロンのメンバーであった旧友から Web サイト作成を頼まれたため作成。
- リッチな画面遷移を実現するため SPA アプリを作成。
- なるべく１年間無料にこだわってリリース。

## 使用技術

### Backend

---

- Ruby 2.7.2
- Rails 6.1.4

### Frontend

---

- JavaScript
- React 17.0.2

### DB

---

- PostgreSQL 1.1

### Rails Gem

---

- rails_admin 2.0.0

  - 管理画面

- carrierwave

  - 画像アップロード

- fog-aws

  - AWS 　 S3 への画像アップロード

- dotenv-rails

  - .env ファイル

- rack-cors
  - HTTP 通信設定

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
