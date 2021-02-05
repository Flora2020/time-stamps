# 時間戳記（time stamps）

## 環境建置與需求 (prerequisites)
#### 環境
- Node.js 10.15.0

#### 套件
- express 4.17.1

## 安裝與執行 (installation and execution)
1. 選定一個資料夾，用來存放本專案。開啟終端機，移動至該資料夾，下載本專案
```
git clone https://github.com/Flora2020/time-stamps.git
```
2. 移動至本專案資料夾
```
cd time-stamps
```
3. 安裝套件
```
npm install
```
4. 啟動伺服器
```
node app.js
```
5. 若終端機出現下列字樣，代表伺服器成功啟動，並且與資料庫連線
```
App running on port 3000
```
6. 執行本專案：打開瀏覽器，於網址列輸入
```
http://localhost:3000
```

## 功能 (features)
伺服器端收到請求時，於終端機印出
1. 收到請求的時間
2. 請求的方法
3. 請求的 url
```
2021-02-05 18:31:26 | GET from /
```

伺服器端送出回應時，於終端機印出
1. 送出回應的時間
2. 請求的方法
3. 請求的 url
4. 從收到請求，到送出回應，時間經過多久
```
2021-02-05 18:31:26 | GET from / | total time: 1ms
```
