---
layout: project
title: GreenFriend
description: 綠色出行的好夥伴，是數創比賽金獎作品，減少碳排放。
---

```markdown
# 碳排放路線顯示專案

此專案是基於 Google Maps API 的碳排放路線顯示應用程式。它使用後端 API 獲取路線資料並在地圖上顯示路徑、碳排放、距離和時間等信息。

## 功能
- 根據使用者位置顯示路徑
- 自動顯示交通方式（步行、駕車、公共交通）和碳排放量
- 使用 Google Maps 繪製路徑，並提供動態箭頭顯示路線
- 提供總距離、碳排放和總時間的詳細數據
- 支持地圖自動縮放和關閉信息窗口

## 安裝與使用

### 1. 克隆專案
首先，從 GitHub 儲存庫克隆專案：

```bash
git clone https://github.com/yourusername/your-repository-name.git
```

### 2. 安裝依賴
此專案主要使用 Google Maps API 和 Axios 來進行 HTTP 請求。請確保你已經在項目中引入了以下庫：

- Google Maps API
- Axios

你可以直接在 HTML 檔案中通過 CDN 引入這些庫，範例如下：

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 3. 配置 Google Maps API Key
在 `map.html` 文件中，替換 `YOUR_API_KEY` 為你自己的 Google Maps API 金鑰。你可以在 [Google Cloud](https://cloud.google.com/maps-platform/) 獲取你的 API Key。

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry"></script>
```

### 4. 啟動本地伺服器
你可以使用任何本地伺服器來運行此專案。以下是使用 Python 啟動本地伺服器的範例：

```bash
# Python 3.x
python -m http.server
```

然後打開瀏覽器並訪問 `http://localhost:8000`。

## 文件結構

```bash
/
|-- index.html           # 主頁面
|-- scripts/
|   |-- map.js           # Google Maps 和路線邏輯
|-- style/
|   |-- css1.css         # 頁面樣式文件
|-- images/
|   |-- road.png         # 圖示
|   |-- co2.png          # 圖示
|   |-- time.png         # 圖示
```

## 貢獻
歡迎對此專案提出問題、建議或進行貢獻。請先 fork 本專案，並創建一個分支來提交您的變更，然後發送 Pull Request。

## 授權
此專案採用 [MIT License](LICENSE) 授權，詳見 LICENSE 文件。
```

### 提交 `README.md`
1. 在你的專案目錄下創建 `README.md` 文件：
   ```bash
   touch README.md
   ```
   
2. 將上述內容複製並貼到 `README.md` 文件中，然後保存。

3. 使用以下命令提交 `README.md` 到 GitHub：
   ```bash
   git add README.md
   git commit -m "Add README file"
   git push
   ```
