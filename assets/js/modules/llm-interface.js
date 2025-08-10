// assets/js/modules/llm-interface.js

/**
 * 初始化 AI 聊天介面的函數
 */
export function initLLMInterface() {
  const chatBubble = document.getElementById('ai-chat-bubble');
  const chatWindow = document.getElementById('ai-chat-window');
  const closeButton = document.getElementById('ai-chat-close-btn');
  const submitButton = document.getElementById('llm-submit-btn');
  const inputArea = document.getElementById('llm-input');
  const responseArea = document.getElementById('llm-response-area');

  if (!chatBubble || !chatWindow || !closeButton || !submitButton || !inputArea || !responseArea) {
    return;
  }

  // 定義離線問答
  const OFFLINE_QA = {
    '這個網站是關於什麼的？': '這是一個個人作品集，用來展示我的專案、分享技術文章，並介紹我的專業技能。',
    '我該如何聯絡作者？': '您可以透過首頁左側的 LinkedIn 或 GitHub 圖示找到我的聯絡方式。',
    '這個 AI 助理能做什麼？': '當連接到後端模型時，我可以回答更複雜的問題。目前處於離線狀態，只能回答一些預設問題。',
    '這個網站用了哪些主要技術？': '這個網站主要由 Jekyll 驅動，並使用了客製化的 JavaScript、HTML 和 CSS。另外，您看到的互動圖表是由 Chart.js 實現的，而一些 3D 動畫則運用了 Three.js。',
    '左邊那個黑色的方塊是什麼？': '那是一個使用 Three.js 製作的 3D 互動式魔術方塊，您可以點擊並拖曳它來旋轉。這是我在網頁 3D 圖形方面的一個小實驗。',
    '我如何尋找特定的專案或文章？': '您可以使用頁首右上角的搜尋按鈕來進行全站內容搜尋。另外，在專案頁面，您也可以透過點擊分類標籤來篩選專案。'
  };

  /**
   * 處理無法連接到 AI 服務的情況
   * @param {HTMLElement} container - 要顯示內容的 HTML 元素
   */
  function handleConnectionError(container) {
    container.innerHTML = ''; // 清空舊內容

    const offlineMessage = document.createElement('p');
    offlineMessage.textContent = '抱歉，AI 服務目前無法連線。不過，您可以點擊以下問題：';
    offlineMessage.className = 'chat-message ai'; // 模仿 AI 回應的樣式
    container.appendChild(offlineMessage);

    const questionsList = document.createElement('div');
    questionsList.className = 'offline-questions';

    for (const question in OFFLINE_QA) {
      const questionBtn = document.createElement('button');
      questionBtn.className = 'offline-question-btn'; // 方便添加樣式
      questionBtn.textContent = question;
      questionBtn.addEventListener('click', () => {
        // 點擊後，顯示問與答
        container.innerHTML = ''; 
        
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.textContent = question;

        const aiMsg = document.createElement('div');
        aiMsg.className = 'chat-message ai';
        aiMsg.textContent = OFFLINE_QA[question];

        container.appendChild(userMsg);
        container.appendChild(aiMsg);
      });
      questionsList.appendChild(questionBtn);
    }
    container.appendChild(questionsList);
  }

  async function getRealLLMResponse(userInput, responseContainer) {
    responseContainer.innerHTML = ''; 

    const thoughtContainer = document.createElement('div');
    thoughtContainer.className = 'llm-thought-process hidden';

    const answerContainer = document.createElement('div');
    answerContainer.className = 'llm-final-answer';
    answerContainer.textContent = 'AI 正在思考中...';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-thought-btn hidden';
    toggleButton.textContent = '顯示思考過程';

    responseContainer.appendChild(toggleButton);
    responseContainer.appendChild(thoughtContainer);
    responseContainer.appendChild(answerContainer);

    const apiUrl = 'http://localhost:3000/api/chat';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'qwen3:4b',
          messages: [{ role: 'user', content: userInput }],
          stream: true,
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let fullContent = '';

      answerContainer.textContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {
          if (line.trim() === '') continue;
          try {
            const responseObject = JSON.parse(line);
            if (responseObject.message && responseObject.message.content) {
              fullContent += responseObject.message.content;
              answerContainer.textContent = fullContent.trim();
            }
          } catch (error) {
            console.error('無法從流中解析 JSON:', line);
          }
        }
      }

      if (buffer.trim()) {
          try {
            const responseObject = JSON.parse(buffer);
            if (responseObject.message && responseObject.message.content) {
              fullContent += responseObject.message.content;
            }
          } catch (error) {
            console.error('無法從流中解析最終的 JSON:', buffer);
          }
      }

      const thoughtMatch = fullContent.match(/<think>([\s\S]*?)<\/think>/);
      const thoughtProcess = thoughtMatch ? thoughtMatch[1].trim() : '';
      const finalAnswer = fullContent.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

      thoughtContainer.textContent = thoughtProcess;
      answerContainer.textContent = finalAnswer;

      if (thoughtProcess.length > 0) {
        toggleButton.classList.remove('hidden');
      } else {
        toggleButton.classList.add('hidden');
      }

    } catch (error) {
      console.error('獲取真實 AI 回應時出錯:', error);
      // 當連接失敗時，呼叫新的處理函式
      handleConnectionError(responseContainer);
    }
  }

  function setupEventListeners() {
    chatBubble.addEventListener('click', () => chatWindow.classList.toggle('visible'));
    closeButton.addEventListener('click', () => chatWindow.classList.remove('visible'));

    const handleSubmit = async () => {
      const userInput = inputArea.value;
      if (!userInput.trim()) return;
      inputArea.value = '';
      await getRealLLMResponse(userInput, responseArea);
    };

    submitButton.addEventListener('click', handleSubmit);
    inputArea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    });

    responseArea.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('toggle-thought-btn')) {
        const thoughtContainer = responseArea.querySelector('.llm-thought-process');
        if (thoughtContainer) {
          thoughtContainer.classList.toggle('hidden');
          e.target.textContent = thoughtContainer.classList.contains('hidden') ? '顯示思考過程' : '隱藏思考過程';
        }
      }
    });
  }

  setupEventListeners();
}
