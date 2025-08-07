---
layout: post
title: "Jekyll 網站優化：我是如何實現專案篩選功能的"
date: 2025-08-03 10:00:00 +0800
categories: jekyll frontend web-development
tags: ["Jekyll", "JavaScript", "Liquid", "Web Development"]
author: "Caspar"
excerpt: "當你的個人作品集網站專案越來越多時，訪客很難快速找到他們感興趣的內容。為了解決這個問題，我決定在我的 Jekyll 網站上增加一個專案篩選功能。這不僅優化了使用者體驗，也讓我的作品集看起來更專業。在這篇文章中，我將分享如何只用 Jekyll 的 Liquid 語法和一點點 JavaScript，就能實現一個高效的專案分類篩選功能。"
---

## 前言

當你的個人作品集網站專案越來越多時，訪客很難快速找到他們感興趣的內容。為了解決這個問題，我決定在我的 Jekyll 網站上增加一個專案篩選功能。這不僅優化了使用者體驗，也讓我的作品集看起來更專業。

在這篇文章中，我將分享如何只用 Jekyll 的 Liquid 語法和一點點 JavaScript，就能實現一個高效的專案分類篩選功能。

## 最終成果

在開始之前，先來看看我們完成後的效果：

*   一個動態的分類側邊欄，會自動列出所有專案的標籤。
*   點擊標籤後，專案列表會即時更新，只顯示符合該標籤的專案。

這個功能不需要任何複雜的後端或資料庫，非常適合靜態網站。

## 實作步驟

整個過程可以分為四個主要步驟：

### 第一步：在專案中加入 `tags`

首先，我們需要為每個專案定義分類標籤。Jekyll 使用 YAML Front Matter 來儲存文章或頁面的元數據。我們只需要在每個專案檔案（例如 `_projects/my-awesome-project.md`）的頭部加入 `tags` 屬性即可。

```yaml
---
layout: project
title: "我的超棒專案"
description: "這是一個很棒的專案簡介。"
tags: ["Frontend Development", "Data Visualization"]
---

... 專案內容 ...
```

你可以為一個專案定義多個標籤，用逗號分隔即可。

### 第二步：建立分類側邊欄

接下來，我們要動態生成篩選按鈕。在我的網站中，我有一個側邊欄檔案 `_includes/project_categories_sidebar.html`。我們將使用 Liquid 語法來遍歷所有專案，收集所有不重複的 `tags`，然後生成對應的按鈕。

```html
{% raw %}
<section class="categories">
  <h3>專案分類</h3>
  <div class="project-filters">
    <!-- "全部專案" 按鈕 -->
    <button class="filter-btn active" data-filter="all">全部專案</button>

    <!-- 動態生成所有標籤 -->
    {% assign all_tags = "" | split: "" %}
    {% for project in site.projects %}
      {% assign all_tags = all_tags | concat: project.tags %}
    {% endfor %}
    {% assign all_tags = all_tags | uniq %}

    <!-- 為每個標籤生成按鈕 -->
    {% for tag in all_tags %}
      <button class="filter-btn" data-filter="{{ tag | slugify }}">{{ tag }}</button>
    {% endfor %}
  </div>
</section>
{% endraw %}
```

**程式碼解釋：**
*   `{% raw %}{% assign all_tags = "" | split: "" %}{% endraw %}`：初始化一個空陣列來存放所有標籤。
*   `{% raw %}{% for project in site.projects %}{% endraw %}`：遍歷 `_projects` 資料夾下的所有專案。
*   `concat: project.tags`：將每個專案的 `tags` 陣列合併到 `all_tags` 中。
*   `uniq`：移除重複的標籤，確保每個標籤只出現一次。
*   `{% raw %}{{ tag | slugify }}{% endraw %}`：這個過濾器會將標籤轉換為 URL 友善的格式（例如 "Frontend Development" 會變成 "frontend-development"），這將用於我們後續的 JavaScript 篩選。

### 第三步：讓專案卡片帶有標籤資訊

為了讓 JavaScript 知道每個專案卡片對應哪些標籤，我們需要在生成專案列表的 HTML 中加入 `data-tags` 屬性。

打開 `_includes/projects.html`，找到你的專案卡片 `div` 或 `article` 元素，並添加 `data-tags` 屬性：

```html
{% raw %}
<div class="card-container grid-view">
  {% for project in site.projects %}
  <article class="card" data-tags="{{ project.tags | join: ' ' | slugify }}">
    <!-- ... 卡片內容 ... -->
  </article>
  {% endfor %}
</div>
{% endraw %}
```

**程式碼解釋：**
*   `{% raw %}{{ project.tags | join: ' ' | slugify }}{% endraw %}`：這段程式碼會將專案的 `tags` 陣列（例如 `["Frontend Development", "Data Visualization"]`）轉換成一個用空格分隔的、slug 化的小寫字串（`"frontend-development data-visualization"`）。這樣，我們就可以輕易地用 JavaScript 來檢查一個專案是否包含某個標籤。

### 第四步：用 JavaScript 實現篩選邏輯

最後一步就是讓一切動起來。我們將在 `assets/js/main.js` 中加入事件監聽器。

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // ... 其他程式碼 ...

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.card-container .card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止按鈕的預設行為

        // 更新按鈕的 active 狀態
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // 遍歷所有專案卡片並根據篩選條件顯示或隱藏
        projectCards.forEach(card => {
          const tags = card.getAttribute('data-tags') || '';
          if (filter === 'all' || tags.includes(filter)) {
            card.style.display = 'block'; // 顯示
          } else {
            card.style.display = 'none';  // 隱藏
          }
        });
      });
    });
  }
});
```

**程式碼解釋：**
*   我們首先選取所有的篩選按鈕和專案卡片。
*   為每個按鈕添加 `click` 事件監聽器。
*   當按鈕被點擊時，我們取得它的 `data-filter` 值。
*   然後，我們遍歷所有的專案卡片，檢查卡片的 `data-tags` 屬性是否包含被點擊的 `filter` 字串。
*   如果 `filter` 是 "all" 或者卡片包含了該標籤，我們就顯示它，否則就隱藏它。

## 結論

就是這麼簡單！透過 Jekyll 強大的 Liquid 模板語言和幾行 JavaScript，我們就成功地為作品集網站添加了一個實用又美觀的篩選功能。

這個功能不僅提升了使用者體驗，也讓你的網站內容更有組織性。希望這篇教學對你有幫助，快去動手試試看吧！
