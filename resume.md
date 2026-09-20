---
layout: default
title: Interactive Resume
---

<div id="resume-container" class="resume-page">
  <header id="resume-header">
    <h1>陳柏宇 Caspar Chen</h1>
    <p class="resume-subtitle">AI 演算法 · LLM 系統與評測 · 全端開發</p>
    <div class="contact-info">
      <span>📧 <a href="mailto:caspar9202166422@gmail.com">caspar9202166422@gmail.com</a></span>
      <span>|</span>
      <span><a href="https://github.com/Caspar15" target="_blank" rel="noopener">GitHub: Caspar15</a></span>
      <span>|</span>
      <span><a href="https://www.linkedin.com/in/caspar0216" target="_blank" rel="noopener">LinkedIn: caspar0216</a></span>
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
        <p>AI 演算法與系統實作背景的工程師，目前就讀臺灣科技大學電機所。研究方向是 NLP 與多目標最佳化，以核心成員身分發表 IEEE 國際會議論文並獲得 <strong>2026 IEEE ICACT Outstanding Paper Award</strong>，主責演算法設計與實驗驗證。</p>
        <p>在趨勢科技擔任 AI Engineer Intern 期間，負責消費性 AI 助理的長期記憶評測：把原本靠人工判讀的評測，做成 LLM-as-a-judge 自動判卷、由 CI 觸發的無人值守管線。比起「會用 LLM」，我更在意的是<strong>怎麼證明它有沒有變好</strong> —— 量化、歸因、回歸測試。</p>
        <p>也在多項政府與企業命題的全國級競賽中取得金獎與亞軍，習慣把研究成果收斂成可以部署、有人真的會用的系統。</p>
      </section>

      <section id="resume-experience" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 17H4V8h16v13z"/></svg>
          工作經歷
        </h2>

        <div class="experience-item">
          <h3>AI Engineer Intern ── 趨勢科技 Trend Micro</h3>
          <p class="experience-date">2026.07 – 2026.08</p>
          <div class="experience-details">
            <ul>
              <li><strong>[LLM 評測]</strong> 為消費性 AI 助理 TrendLife Kaleida 設計並實作長期記憶功能的評測 harness，以 LLM-as-a-judge 自動判卷，量化記憶檢索與問答準確率，並將失分歸因至 retrieval 與 generation 兩端。</li>
              <li><strong>[CI/CD]</strong> 建置容器化評測管線並合併至產品 repo：GitHub Actions 搭配 OIDC 免金鑰認證觸發 Kubernetes Job，自動完成環境建置、評測、判卷與報告產出，使評測從人工轉為無人值守。</li>
              <li><strong>[上線與測試]</strong> 以 prompt engineering 將記憶寫入支援範圍由 2 類擴充至 7 類，建立程式碼、模型決策、端到端三層回歸測試，通過數由 130/168 提升至 <strong>164/168（97.6%）</strong>且零退步。</li>
              <li><strong>[資安]</strong> 定位並修正一項 prompt 設計導致的隱私洩漏。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>雲端工程師 ── 智慧轉型中心</h3>
          <p class="experience-date">2023.06 – 2023.10</p>
          <div class="experience-details">
            <ul>
              <li><strong>[ML 預測應用]</strong> 建置校內 IoT 感測與設備維護預測系統：監測圖書館空調與抽水馬達，以機器學習預測維護時機，並串接 Google Maps 提供設備位置導引。</li>
              <li><strong>[產學合作]</strong> 廢鋼價格預測：建立機器學習模型預測價格趨勢，支援產業決策分析。</li>
              <li><strong>[前端開發]</strong> 負責生物科技食品公司專案的前端介面設計與互動流程優化。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>課程助教 ── 東海大學</h3>
          <p class="experience-date">2022.08 起</p>
          <div class="experience-details">
            <ul>
              <li>電子電路實驗、邏輯設計實驗。</li>
              <li>半導體產業趨勢與實務、ESG 永續淨零碳排。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="resume-research" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/></svg>
          研究與論文
        </h2>

        <div class="experience-item">
          <h3>Meta-Heuristic Approaches with LM-based Selectors for Extractive Summarization</h3>
          <p class="experience-date">IEEE ICACT 2026 · 🏆 Outstanding Paper Award</p>
          <div class="experience-details">
            <ul>
              <li>角色：演算法設計、實驗與系統實作負責人（Second Author）。</li>
              <li>結合 NSGA-II 多目標最佳化與預訓練語言模型（BERT / RoBERTa / XLNet），將摘要選取建模為涵蓋內容覆蓋率、冗餘度與長度的多目標問題。</li>
              <li>相較純 LM 基線，推理速度提升 <strong>10 倍以上</strong>，顯著降低 GPU 依賴與部署成本。</li>
              <li>CNN/DailyMail 達 ROUGE-1 0.351，並於 SciTLDR-AIC 驗證跨領域泛化能力。</li>
              <li>延伸版本投稿 <strong>SCI 期刊 IEEE Access</strong>，現處於審稿階段。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>AI-Agent-Driven Demand Response Forecasting for Smart Homes with a CNN-LSTM Framework</h3>
          <p class="experience-date">ISASD 2026 · Accepted</p>
          <div class="experience-details">
            <ul>
              <li>角色：主責架構設計、系統開發與實驗驗證。</li>
              <li>建構以 CNN-LSTM 為核心的短期家電能源預測框架（UCI Appliances Energy Prediction）。</li>
              <li>結合 Demand Response 模擬策略與單一家庭 DR Agent，評估尖峰負載削減、電費節省與能源調度成效。</li>
            </ul>
          </div>
        </div>

        <div class="experience-item">
          <h3>基於深度強化學習的 5G 網路資源分配演算法</h3>
          <p class="experience-date">東海大學 畢業專題</p>
          <div class="experience-details">
            <ul>
              <li>設計並比較 DQN 與 DDQN 強化學習策略，應用於 5G 網路資源分配問題。</li>
              <li>針對 URLLC、eMBB、mMTC 三種應用場景進行模擬，評估延遲、吞吐量與頻譜效率。</li>
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
          <h3>🥇 IEC 2024 臺灣數創大賞 — 金獎（全國第一名）</h3>
          <p class="experience-date">低碳路徑推薦系統</p>
          <div class="experience-details">
            <ul>
              <li>以最短路徑演算法結合碳排模型，為使用者提供碳排放最少的路徑建議。</li>
              <li>使用 Flutter 開發 Android / iOS App，整合地圖與即時路徑計算。</li>
            </ul>
          </div>
        </div>

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
          <h3>🥈 2025 ATCC 全國大專院校商業個案大賽 — 遠傳電信組亞軍</h3>
          <p class="experience-date">企業命題：遠傳電信</p>
          <div class="experience-details">
            <ul>
              <li>設計 AI 語音反詐騙系統，以 ASR、對話式 LLM Agent 與 TTS 串接電信通話流程。</li>
              <li>透過 Agent 與詐騙者互動，蒐集詐騙話術特徵並延長通話時間，降低真實用戶受害風險。</li>
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
          社團與活動
        </h2>
        <div class="experience-item">
          <h3>企劃長 ── 東海大學 AI 資料應用社</h3>
          <p class="experience-date">2024 – 2025</p>
          <div class="experience-details">
            <ul>
              <li>統籌社團企劃與活動推廣，促進 AI 相關知識在校內傳播。</li>
            </ul>
          </div>
        </div>
        <div class="experience-item">
          <h3>主辦 ── ChatGPT 論壇（高雄場、彰化場）</h3>
          <p class="experience-date">2023</p>
        </div>
        <div class="experience-item">
          <h3>主辦 ── 青年程式設計競賽 ISSC（英文組）</h3>
          <p class="experience-date">2022、2024</p>
        </div>
        <div class="experience-item">
          <h3>與會 ── Google AI Academic Forum</h3>
          <p class="experience-date">2024</p>
        </div>
      </section>

    </main>

    <aside class="resume-sidebar">
      <section id="resume-skills" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
          技術技能
        </h2>

        <div class="skill-group">
          <h3 class="skill-group-title">程式語言</h3>
          <div class="skills-grid">
            <span class="skill">Python</span>
            <span class="skill">C / C++</span>
            <span class="skill">JavaScript</span>
            <span class="skill">SQL</span>
          </div>
        </div>

        <div class="skill-group">
          <h3 class="skill-group-title">AI / ML</h3>
          <div class="skills-grid">
            <span class="skill">LLM</span>
            <span class="skill">NLP</span>
            <span class="skill">Agentic AI</span>
            <span class="skill">RAG</span>
            <span class="skill">Vector Search</span>
            <span class="skill">Prompt Engineering</span>
            <span class="skill">LLM Evaluation</span>
            <span class="skill">Summarization</span>
            <span class="skill">Deep Learning</span>
            <span class="skill">Time-series Forecasting</span>
            <span class="skill">Multi-objective Optimization</span>
          </div>
        </div>

        <div class="skill-group">
          <h3 class="skill-group-title">框架與資料</h3>
          <div class="skills-grid">
            <span class="skill">PyTorch</span>
            <span class="skill">Hugging Face Transformers</span>
            <span class="skill">LangChain / LangGraph</span>
            <span class="skill">vLLM</span>
            <span class="skill">scikit-learn</span>
            <span class="skill">NumPy / pandas</span>
            <span class="skill">FastAPI</span>
            <span class="skill">Node.js</span>
            <span class="skill">React</span>
            <span class="skill">Flutter</span>
            <span class="skill">MySQL</span>
            <span class="skill">PostgreSQL</span>
          </div>
        </div>

        <div class="skill-group">
          <h3 class="skill-group-title">基礎建設與測試</h3>
          <div class="skills-grid">
            <span class="skill">Docker</span>
            <span class="skill">Kubernetes</span>
            <span class="skill">GCP</span>
            <span class="skill">CI/CD</span>
            <span class="skill">GitHub Actions</span>
            <span class="skill">Git</span>
            <span class="skill">Linux</span>
            <span class="skill">CUDA</span>
            <span class="skill">pytest</span>
            <span class="skill">Test Automation</span>
            <span class="skill">Regression &amp; E2E Testing</span>
          </div>
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
          <p>2025.09 – 2027.06（預計畢業）</p>
        </div>
        <div class="education-item" style="margin-top: var(--spacing-md);">
          <h3>學士 資訊工程學系</h3>
          <p>🏫 東海大學</p>
          <p>2021.09 – 2025.06（畢業）</p>
          <p style="color: var(--color-accent); font-weight: 600; margin-top: 4px;">GPA 3.76 / 4.0 ｜ 系排 18 / 169（前 10%）</p>
        </div>
      </section>

      <section id="resume-coursework" class="resume-card">
        <h2 class="card-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z"/></svg>
          碩班修課
        </h2>
        <div class="education-item">
          <ul class="coursework-list">
            <li>分散式機器學習系統（NTU）</li>
            <li>電腦對局理論（NTU）</li>
            <li>VLSI 測試與可測試性設計</li>
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
