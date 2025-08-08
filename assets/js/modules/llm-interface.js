// assets/js/modules/llm-interface.js

/**
 * 模擬的 (Mock) AI 回應函數
 * @param {string} userInput - The text entered by the user.
 * @returns {Promise<string>} A promise that resolves with a fake AI response.
 */
function getMockLLMResponse(userInput) {
  console.log(`Sending to mock API: "${userInput}"`);
  return new Promise(resolve => {
    setTimeout(() => {
      const mockResponse = `這是一個來自模擬 AI 的回應。你剛剛說的是：「${userInput}」。當真正的 AI 模型準備好後，這裡就會顯示真實的答案。`;
      resolve(mockResponse);
    }, 1000); // 模擬 1 秒的網路延遲
  });
}

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
    console.log('AI Chatbot elements not found. Aborting initialization.');
    return;
  }

  // 點擊浮動按鈕，顯示/隱藏聊天視窗
  chatBubble.addEventListener('click', () => {
    chatWindow.classList.toggle('visible');
  });

  // 點擊關閉按鈕，隱藏聊天視窗
  closeButton.addEventListener('click', () => {
    chatWindow.classList.remove('visible');
  });

  // 點擊送出按鈕的邏輯
  submitButton.addEventListener('click', async () => {
    const userInput = inputArea.value;
    if (!userInput.trim()) return;

    responseArea.textContent = 'AI 正在思考中...';
    inputArea.value = '';

    try {
      const aiResponse = await getMockLLMResponse(userInput);
      responseArea.textContent = aiResponse;
    } catch (error) {
      console.error('Error getting AI response:', error);
      responseArea.textContent = '抱歉，發生錯誤，無法取得回應。';
    }
  });
  
  // 讓使用者可以按 Enter 送出
  inputArea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // 防止換行
      submitButton.click(); // 觸發點擊事件
    }
  });
}