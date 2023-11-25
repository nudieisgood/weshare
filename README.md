<img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888436/weshare-logo_v8kt3i.png"  />

# Description - 概述

此為 RWD 網頁可以在不同裝置上瀏覽操作，你可以在網站上瀏覽房間資訊，並預訂房間，也可成為一個房東將自己閒置的房間出租。

本作品前端主要利用 React.js 建立的租房平台，使用者分為三類：非會員使用者（僅有瀏覽房源功能）、會員使用者（可租房及出租），另外後端功能搭配 Node.js / Express.js。

# Live web - 作品連結

您可以瀏覽此作品 : <a target="blank" href="https://weshare-sqkt.onrender.com">Live web</a>

可以由此登入 Demo user （點擊 “Demo 用帳號登入” 即登入）
<img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700893526/weshare-demouser_eqz67y.png"  />

# Features - 功能

- 會員頁面

  - 登入登出 (jwt token)
  - 使用者可以註冊成為會員，並作為會員登入
  - 會員可修改會員資訊
  - 會員可查看訂單及行程
  - 會員可進行出租房源管理 - 新增及修改 CRUD
  - 會員可以將喜歡的房源加入我的最愛或移除

- 房源頁面

  - 可以瀏覽所有房源及單一房源詳細資訊
  - 可瀏覽出租房間列表 - 使用 lazy loading，達成資料延遲載入
  - 可以透過分類瀏覽不同房源
  - 可以透過單一房源頁面預約房源
  - 非會員者僅可瀏覽出租房源頁面及單一出租房資訊

- 我的最愛

  - 會員可以將喜歡的房源加入我的最愛或移除
  - 會員可瀏覽已加入最愛的房源，並會依照地區分類

- 如何使用
  - 選擇要住宿的房源預約，住宿前三日可取消
  - 成功預定後會房源主的會員頁面會顯示房間被預定
  - 被預定時房源主需確認訂單
  - 待租客完成住宿後點擊住宿完成
  - 租客評價房源並完成訂單

# Content - 作品內容

- 使用者頁面
  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888202/weshare-cover_j3ifqk.png"  />
  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888202/weshare-%E7%80%8F%E8%A6%BD%E6%88%BF%E6%BA%90%E9%A0%81%E9%9D%A2_zfkfqp.png"  />
- 會員控制頁面
  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888203/weshare-%E6%9F%A5%E7%9C%8B%E9%A0%90%E7%B4%84%E8%A1%8C%E7%A8%8B_xtcmxe.png"  />
  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888201/weshare-%E6%88%BF%E6%BA%90%E7%AE%A1%E7%90%86%E4%B8%BB%E9%A0%81_rm6m3h.png"  />

  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888201/weshare-%E6%88%BF%E6%BA%90%E4%BF%AE%E6%94%B9_qt7xg8.png"  />

  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888201/wehare-profile%E9%A0%81%E9%9D%A2_uw1siz.png"  />

  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700888203/weshare-checkout_wfdynk.png"  />
  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700895508/weshare-check1_e4dqf2.png"  />
  <img src="https://res.cloudinary.com/dfvtounam/image/upload/v1700895508/weshare-check2_qq772g.png"  />

# Folders - 資料夾說明

- 前端

  - assets - 靜態資源
  - components - 頁面零組件
  - pages - 主要畫面組件
  - context - 上層 state 管理
  - utilits - 其他 helper function 及 靜態資料

- 伺服器端
  - controllers - 邏輯控制器
  - models - 資料庫檔案結構
  - routes - 路由控制
  - server - 初始啟動伺服器邏輯

# Tech - 技術

- 前端

  - React.js
  - react-query
  - react-router-dom
  - axios
  - tailwindcss
  - framer-motion

- 伺服器端
  - Node.js
  - express
  - mongoose
  - jsonwebtoken
  - validator

# Third Party - 第三方服務

- google API

- cloudinary

- mongoDB

# Declaration - 聲明

本作品之商品圖片、內容等，純粹為演示用圖，不做任何商業用途。
