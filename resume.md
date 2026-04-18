---
layout: default
title: Interactive Resume
---

<div id="resume-container" class="resume-page">
  <header id="resume-header">
    <h1>陳柏宇 Caspar Chen</h1>
    <p class="resume-subtitle">AI 演算法 · 全端開發 · NLP 研究</p>
    <div class="contact-info">
      <span>📧 <a href="mailto:caspar9202166422@gmail.com">caspar9202166422@gmail.com</a></span>
      <span>|</span>
      <span>📞 (+886) 965-033-088</span>
      <span>|</span>
      <span><a href="https://github.com/Caspar15" target="_blank" rel="noopener">GitHub: Caspar15</a></span>
      <span>|</span>
      <span><a href="https://pse.is/8jwnkm" target="_blank" rel="noopener">LinkedIn</a></span>
      <span>|</span>
      <span>兵役：免役</span>
    </div>
  </header>

  <div class="resume-grid">
    <main class="resume-main-content">

      <section id="resume-summary" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          個人簡介
        </h2>
        <p>具備 AI 演算法與系統實作背景的工程師，專注於 NLP、資料分析與效能優化。曾以核心成員身分發表 IEEE 國際會議論文，並榮獲 <strong>2026 IEEE ICACT Outstanding Paper Award</strong>，主責演算法設計與實驗驗證。熟悉 Python、機器學習與多目標最佳化演算法，具備前後端系統整合與資料庫應用經驗。曾參與多項政府與企業命題之全國級競賽，取得冠軍及亞軍，具備將研究成果轉化為可部署系統的實作能力。</p>
      </section>

      <section id="resume-research" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/></svg>
          研究經歷
        </h2>

        <div class="experience-item">
          <h3>Meta-Heuristic Approaches with LM-based Selectors for Extractive Summarization</h3>
          <p class="experience-date">IEEE ICACT 2026 國際會議論文 · 🏆 Outstanding Paper Award</p>
          <div class="experience-details">
            <ul>
              <li>角色：演算法開發與實驗負責人（Second Author）。</li>
              <li>設計結合 NSGA-II 多目標最佳化與預訓練語言模型（BERT / RoBERTa / XLNet）的抽取式摘要系統。</li>
              <li>將摘要選取建模為多目標最佳化問題（覆蓋率、冗餘度、長度），不依賴大量 GPU 算力達到與深度模型相近準確度。</li>
              <li>相較純 LM 基線模型，推理速度提升 <strong>10 倍以上</strong>，顯著降低部署成本。</li>
              <li>CNN/DailyMail ROUGE-1 最高達 0.351；SciTLDR-AIC 驗證跨領域泛化能力。</li>
              <li>延伸版本已投稿 <strong>SCI 期刊 ICT Express</strong>，現處於審稿階段。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>基於深度強化學習的 5G 網路資源分配演算法</h3>
          <p class="experience-date">東海大學 畢業專題</p>
          <div class="experience-details">
            <ul>
              <li>設計並比較 DQN 與 DDQN 強化學習策略，應用於 5G 網路資源分配問題。</li>
              <li>針對 URLLC、eMBB、mMTC 三種 5G 應用場景進行模擬與效能分析。</li>
              <li>評估延遲、吞吐量與頻譜效率等關鍵指標。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="resume-experience" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 17H4V8h16v13z"/></svg>
          實務經歷
        </h2>

        <div class="experience-item">
          <h3>雲端工程師 ── 智慧轉型中心</h3>
          <p class="experience-date">2023.06 – 2023.10</p>
          <div class="experience-details">
            <ul>
              <li>校內 IoT 感測與設備維護預測系統：監測圖書館空調與抽水馬達，結合 ML/DL 預測維護時機，串接 Google Maps 提供設備位置導引。</li>
              <li>廢鋼價格預測產學合作：建立機器學習模型預測廢鋼價格趨勢，支援產業決策分析。</li>
              <li>生物科技食品公司（專案）：負責前端介面設計與使用者互動流程優化。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>課程助教 ── 東海大學</h3>
          <p class="experience-date">東海大學</p>
          <div class="experience-details">
            <ul>
              <li>電子電路實驗、邏輯設計實驗。</li>
              <li>ESG 永續淨零碳排與半導體產業趨勢。</li>
              <li>半導體產業發展管理與實務。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>企劃長 ── 東海大學 AI 資料應用社</h3>
          <p class="experience-date">東海大學</p>
          <div class="experience-details">
            <ul>
              <li>統籌社團企劃與活動推廣，促進 AI 相關知識在校內傳播。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="resume-competitions" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V18H9v2h6v-2h-2v-2.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
          競賽獎項
        </h2>

        <div class="experience-item">
          <h3>🥈 2025 雙北程式設計節 黑客松 — 亞軍（全國第二名）</h3>
          <p class="experience-date">主辦：臺北市政府 / 新北市政府</p>
          <div class="experience-details">
            <ul>
              <li>開發可直接整合至臺北城市儀表板的擴充功能模組。</li>
              <li>建立四大地圖資料組件（捐血地點、穆斯林友善空間、銀髮俱樂部、公共廁所），並新增熱門儀表板與搜尋功能。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>🥇 IEC 2024 臺灣數創大賞 — 金獎（全國第一名）</h3>
          <p class="experience-date">低碳路徑推薦系統</p>
          <div class="experience-details">
            <ul>
              <li>基於最短路徑演算法與碳排模型，為使用者提供碳排放最少的路徑建議。</li>
              <li>使用 Flutter 開發 Android / iOS App，整合地圖與即時路徑計算。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>🥈 ATCC 全國大專院校商業個案大賽 遠傳電信組 — 亞軍</h3>
          <p class="experience-date">企業命題：遠傳電信</p>
          <div class="experience-details">
            <ul>
              <li>設計 AI Agent 反詐騙系統，模擬使用者接聽詐騙電話，主動蒐集詐騙話術與行為特徵。</li>
              <li>透過 AI Agent 與詐騙者互動，有效延長通話時間並降低真實用戶受害風險。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>🥈 2025 海科盃 — 銀質獎 ＋ 個人 MVP</h3>
          <p class="experience-date">全國賽</p>
          <div class="experience-details">
            <ul>
              <li>提出 MR 系統應用構想，因報告出色獲選個人 MVP。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="resume-activities" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          學術活動
        </h2>
        <div class="experience-item">
          <h3>ChatGPT 論壇（高雄場、彰化場）— 主辦</h3>
        </div>
        <div class="experience-item">
          <h3>Google AI Academic Forum 2024</h3>
        </div>
        <div class="experience-item">
          <h3>青年程式設計競賽 ISSC 2022 / 2024 — 主辦方</h3>
        </div>
      </section>

    </main>

    <aside class="resume-sidebar">
      <section id="resume-skills" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
          技術技能
        </h2>
        <div class="skills-grid">
          <div class="skill" data-level="95%">Python</div>
          <div class="skill" data-level="80%">C / C++</div>
          <div class="skill" data-level="88%">Machine Learning</div>
          <div class="skill" data-level="85%">Deep Learning</div>
          <div class="skill" data-level="82%">NLP</div>
          <div class="skill" data-level="75%">Reinforcement Learning</div>
          <div class="skill" data-level="78%">Multi-objective Optimization</div>
          <div class="skill" data-level="80%">PyTorch / CUDA</div>
          <div class="skill" data-level="85%">JavaScript / React</div>
          <div class="skill" data-level="85%">HTML / CSS</div>
          <div class="skill" data-level="80%">Git / Docker</div>
        </div>
      </section>

      <section id="resume-education" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>
          學歷
        </h2>
        <div class="education-item">
          <h3>碩士 電機工程學系</h3>
          <p>🎓 國立臺灣科技大學</p>
          <p>2025 – 2027（預計畢業）</p>
        </div>
        <div class="education-item" style="margin-top: var(--spacing-md);">
          <h3>學士 資訊工程學系</h3>
          <p>🏫 東海大學</p>
          <p>2021 – 2025（畢業）</p>
          <p style="color: var(--color-accent); font-weight: 600; margin-top: 4px;">GPA 3.76 / 4.0 ｜ 系排前 10.65%</p>
        </div>
      </section>

      <section id="resume-coursework" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z"/></svg>
          碩班修課
        </h2>
        <div class="education-item">
          <ul style="list-style:none; padding:0; margin:0;">
            <li style="padding: 4px 0; font-size: 13px; color: var(--color-text-muted); border-bottom: 1px solid var(--color-border-subtle);">分散式機器學習系統（NTU）</li>
            <li style="padding: 4px 0; font-size: 13px; color: var(--color-text-muted); border-bottom: 1px solid var(--color-border-subtle);">台大電腦對局理論（NTU）</li>
            <li style="padding: 4px 0; font-size: 13px; color: var(--color-text-muted);">VLSI 測試與可測試性設計</li>
          </ul>
        </div>
      </section>

      <section id="resume-languages" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          語言能力
        </h2>
        <div class="education-item">
          <h3>中文</h3>
          <p>母語</p>
        </div>
        <div class="education-item" style="margin-top: var(--spacing-sm);">
          <h3>英文</h3>
          <p>工作應用能力（學術論文撰寫）</p>
        </div>
      </section>
    </aside>
  </div>
</div>
