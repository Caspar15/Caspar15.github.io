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

    async function getRealLLMResponse(userInput, responseContainer) {
    // 1. 建立新的 HTML 結構
    responseContainer.innerHTML = ''; // 清空舊內容

    const thoughtContainer = document.createElement('div');
    thoughtContainer.className = 'llm-thought-process hidden'; // 預設隱藏

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
      let fullContent = ''; // Accumulates all message.content

      answerContainer.textContent = ''; // Clear "thinking" message

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop(); // Keep the last (potentially incomplete) line

        for (const line of lines) {
          if (line.trim() === '') continue;
          try {
            const responseObject = JSON.parse(line);
            if (responseObject.message && responseObject.message.content) {
              fullContent += responseObject.message.content;

              // Update answerContainer with current fullContent (before final parsing)
              // This provides a real-time feel, even if thought process is still mixed in
              answerContainer.textContent = fullContent.trim();
            }
          } catch (error) {
            console.error('無法從流中解析 JSON:', line);
          }
        }
      }

      // After the loop, handle any remaining buffer
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

      // Final extraction and update after all data is received
      const thoughtMatch = fullContent.match(/<think>([\s\S]*?)<\/think>/);
      const thoughtProcess = thoughtMatch ? thoughtMatch[1].trim() : '';
      const finalAnswer = fullContent.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

      thoughtContainer.textContent = thoughtProcess;
      answerContainer.textContent = finalAnswer;

      // Final decision on toggle button visibility
      if (thoughtProcess.length > 0) {
        toggleButton.classList.remove('hidden');
      } else {
        toggleButton.classList.add('hidden');
      }

    } catch (error) {
      console.error('獲取真實 AI 回應時出錯:', error);
      answerContainer.textContent = '抱歉，無法連接到 AI 服務。';
    }
  }

  // 5. 為按鈕加上事件監聽器
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

    // 使用事件委派來處理動態新增的按鈕
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
