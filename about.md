---
layout: default
title: 關於我
---

<div class="about-container">

  <!-- 1. Personal Hero Banner -->
  <header class="about-hero-card">
    <div class="about-avatar-wrap">
      <img src="/assets/images/avatar.png?v=2" alt="Caspar Chen" class="about-avatar-img">
    </div>
    <div class="about-hero-content">
      <div class="about-status-badge">
        <span class="pulse-indicator"></span>
        <span>AI 演算法與系統工程師 · 台科大電機所</span>
      </div>
      <h1 class="about-hero-name">陳柏宇 Caspar Chen</h1>
      <p class="about-hero-role">LLM 系統與評測 · 多目標最佳化 · 生產級架構研發</p>
      <p class="about-hero-bio">
        專注於 NLP、LLM 系統、多代理人架構（Multi-Agent）與效能優化。以核心作者身分發表多篇頂尖期刊與會議成果，榮獲 <strong>IEEE ICACT 2026 Outstanding Paper Award</strong> 與 <strong>JIT 期刊錄用</strong>；曾任趨勢科技 AI Engineer Intern，負責長期記憶自動化評測 harness 與 Kubernetes CI 管線。致力於將尖端研究成果收斂為高可用、穩健上線的生產級系統。
      </p>
      <div class="about-hero-actions">
        <a href="/resume/" class="about-action-btn about-action-primary">
          <span>📄 互動式完整履歷 →</span>
        </a>
        <a href="mailto:caspar9202166422@gmail.com" class="about-action-btn about-action-ghost">
          <span>✉ 寄信交流</span>
        </a>
        <a href="https://github.com/Caspar15" target="_blank" rel="noopener" class="about-action-btn about-action-ghost">
          <span>GitHub ↗</span>
        </a>
        <a href="https://www.linkedin.com/in/caspar0216" target="_blank" rel="noopener" class="about-action-btn about-action-ghost">
          <span>LinkedIn ↗</span>
        </a>
      </div>
    </div>
  </header>

  <!-- 2. Bento Grid Section -->
  <div class="about-bento-grid">

    <!-- Card 1: 學術研究成果 (Bento Full Width) -->
    <section class="bento-card bento-full-width">
      <div class="bento-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
        <h3>研究成果與學術論文 (Research & Publications)</h3>
      </div>
      <ul class="bento-list">
        <li class="bento-item">
          <strong>🏆 IEEE ICACT 2026 — Outstanding Paper Award</strong>
          <div class="bento-item-sub">
            結合 NSGA-II 多目標最佳化與預訓練語言模型（BERT / RoBERTa / XLNet）之抽取式摘要系統，相較純 LM 推理加速 <strong>10 倍以上</strong>，大幅壓低 GPU 依賴。
          </div>
        </li>
        <li class="bento-item">
          <strong>🌟 Journal of Internet Technology (JIT) 2026 — 期刊論文已接受發表 (Sep 2026)</strong>
          <div class="bento-item-sub">
            提出結合家戶與 EV 調度 Multi-Agent 架構，串接在地部署之 LLM Advisory Agent，在 15 戶虛擬電動車負載實驗中達成 P95 負載降低 <strong>30.4%</strong> 且維持電費平穩。
          </div>
        </li>
        <li class="bento-item">
          <strong>📄 IEEE Access — SCI 期刊論文審稿中（ICACT 延伸成果）</strong>
          <div class="bento-item-sub">
            <em>Provenance-Aware Multi-Route Fusion for Long-Document Extractive Summarization</em>：在 GovReport（973 篇政府長文本長篇基準）評測中取得 9 套對比系統中最高 Mean ROUGE 分數。
          </div>
        </li>
        <li class="bento-item">
          <strong>📄 ISASD 2026 — Poster 論文已接受</strong>
          <div class="bento-item-sub">
            <em>AI-Agent-Driven Demand Response Forecasting for Smart Homes with a CNN-LSTM Framework</em>：評估需量反應模擬下單一家庭 DR Agent 降低 P95 負載 10.3%、電費 2.6%。
          </div>
        </li>
      </ul>
    </section>

    <!-- Card 2: 學歷與專業進修 -->
    <section class="bento-card">
      <div class="bento-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>
        <h3>學歷背景 (Education)</h3>
      </div>
      <ul class="bento-list">
        <li class="bento-item">
          <strong>國立臺灣科技大學 · 電機工程系碩士</strong>
          <div class="bento-item-sub">2025.09 – 2027.06（預計畢業）</div>
          <div class="bento-item-sub">碩班修課：分散式機器學習系統（NTU）、電腦對局理論（NTU）、VLSI 測試與可測試性設計</div>
        </li>
        <li class="bento-item">
          <strong>東海大學 · 資訊工程學系學士</strong>
          <div class="bento-item-sub">2021.09 – 2025.06（畢業）</div>
          <div class="bento-item-sub">GPA 3.76 / 4.0 ｜ 系排 18 / 169（前 10% 畢業）</div>
        </li>
      </ul>
    </section>

    <!-- Card 3: 工作與實習經歷 -->
    <section class="bento-card">
      <div class="bento-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 17H4V8h16v13z"/></svg>
        <h3>工作經歷 (Work Experience)</h3>
      </div>
      <ul class="bento-list">
        <li class="bento-item">
          <strong>趨勢科技 Trend Micro · AI Engineer Intern</strong>
          <div class="bento-item-sub">2026.07 – 2026.08</div>
          <div class="bento-item-sub">消費性 AI 助理長期記憶評測 Harness、LLM-as-a-judge 自動判卷、Kubernetes 無人值守 CI/CD，三層回歸測試通過數達 <strong>97.6% (164/168)</strong>。</div>
        </li>
        <li class="bento-item">
          <strong>智慧轉型中心 · 雲端工程師</strong>
          <div class="bento-item-sub">2023.06 – 2023.10</div>
          <div class="bento-item-sub">建置校內 IoT 感測與設備維護預測系統、結合 Google Maps 定位導航；參與廢鋼價格機器學習預測產學案。</div>
        </li>
      </ul>
    </section>

    <!-- Card 4: 競賽榮譽 -->
    <section class="bento-card">
      <div class="bento-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V18H9v2h6v-2h-2v-2.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
        <h3>競賽榮譽 (Awards & Honors)</h3>
      </div>
      <ul class="bento-list">
        <li class="bento-item">
          <strong>🥇 IEC 2024 臺灣數創大賞 — 金獎（全國第 1 名）</strong>
          <div class="bento-item-sub">以最短路徑演算法與碳排模型開發低碳路徑推薦 Flutter App</div>
        </li>
        <li class="bento-item">
          <strong>🥈 2025 雙北程式設計節 黑客松 — 亞軍（全國第 2 名）</strong>
          <div class="bento-item-sub">主責臺北城市儀表板擴充模組，打造 4 大地圖圖層組件</div>
        </li>
        <li class="bento-item">
          <strong>🥈 2025 ATCC 商業個案大賽 遠傳電信組 — 亞軍</strong>
          <div class="bento-item-sub">串接 ASR、對話式 LLM Agent 與 TTS 構建電信防詐語音系統</div>
        </li>
        <li class="bento-item">
          <strong>🥈 2025 海科盃 — 銀質獎 ＋ 個人 MVP</strong>
        </li>
      </ul>
    </section>

    <!-- Card 5: 技能技術棧 -->
    <section class="bento-card">
      <div class="bento-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
        <h3>核心技術棧 (Tech Stack)</h3>
      </div>
      <div style="margin-bottom: 12px;">
        <strong style="font-size: 13px; color: var(--color-text);">AI · LLM · 深度學習</strong>
        <div class="bento-pills-wrap">
          <span class="bento-pill">LLM Evaluation</span>
          <span class="bento-pill">Agentic AI</span>
          <span class="bento-pill">LangChain / LangGraph</span>
          <span class="bento-pill">PyTorch</span>
          <span class="bento-pill">vLLM</span>
          <span class="bento-pill">RAG & Vector Search</span>
          <span class="bento-pill">Prompt Engineering</span>
        </div>
      </div>
      <div>
        <strong style="font-size: 13px; color: var(--color-text);">全端 · 雲端架構 · 測試</strong>
        <div class="bento-pills-wrap">
          <span class="bento-pill">Python</span>
          <span class="bento-pill">FastAPI</span>
          <span class="bento-pill">Docker & Kubernetes</span>
          <span class="bento-pill">CI/CD (GitHub Actions)</span>
          <span class="bento-pill">React</span>
          <span class="bento-pill">pytest</span>
          <span class="bento-pill">PostgreSQL / MySQL</span>
        </div>
      </div>
    </section>

  </div>

  <!-- 3. Bottom Contact Card -->
  <section class="about-contact-card">
    <p>💡 歡迎學術交流、技術討論或任何全職／研究合作機會！</p>
    <div class="about-contact-links">
      <a href="mailto:caspar9202166422@gmail.com">✉ caspar9202166422@gmail.com</a>
      <span>·</span>
      <a href="https://github.com/Caspar15" target="_blank" rel="noopener">GitHub: Caspar15</a>
      <span>·</span>
      <a href="https://www.linkedin.com/in/caspar0216" target="_blank" rel="noopener">LinkedIn: caspar0216</a>
      <span>·</span>
      <a href="/resume/">互動式履歷</a>
    </div>
  </section>

</div>
