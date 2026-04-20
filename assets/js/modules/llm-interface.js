// assets/js/modules/llm-interface.js

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

  const suggestions = [
    {
      question: '這個網站是關於什麼的？',
      answer: '這是陳柏宇 Caspar Chen 的個人作品集，整理了研究成果、專案、履歷、技術文章與聯絡方式。'
    },
    {
      question: '我該如何聯絡作者？',
      answer: '可以透過頁尾或首頁側欄的 GitHub、LinkedIn，也可以在履歷頁找到 email。'
    },
    {
      question: '有哪些代表專案？',
      answer: '可以先看 GreenFriend、THU Grade Scraper、Discord Music Bot 和 ADXL335 Dashboard。首頁專案卡片可依分類篩選。'
    },
    {
      question: '履歷在哪裡？',
      answer: '請點選導覽列「關於我」下的「互動式履歷」，或直接前往 /resume/。'
    },
    {
      question: '如何搜尋內容？',
      answer: '使用頁首的搜尋欄輸入關鍵字，可以搜尋專案與部落格文章。'
    }
  ];

  const keywordAnswers = [
    { keywords: ['聯絡', 'email', 'mail', 'linkedin', 'github'], answer: suggestions[1].answer },
    { keywords: ['專案', '作品', 'project', 'portfolio'], answer: suggestions[2].answer },
    { keywords: ['履歷', 'resume', 'cv'], answer: suggestions[3].answer },
    { keywords: ['搜尋', 'search', '找'], answer: suggestions[4].answer },
    { keywords: ['網站', '關於', 'about'], answer: suggestions[0].answer }
  ];

  function clearResponse() {
    responseArea.innerHTML = '';
  }

  function appendMessage(text, className) {
    const message = document.createElement('div');
    message.className = `chat-message ${className}`;
    message.textContent = text;
    responseArea.appendChild(message);
    responseArea.scrollTop = responseArea.scrollHeight;
  }

  function renderSuggestions() {
    const list = document.createElement('div');
    list.className = 'offline-questions';

    suggestions.forEach(({ question, answer }) => {
      const button = document.createElement('button');
      button.className = 'offline-question-btn';
      button.type = 'button';
      button.textContent = question;
      button.addEventListener('click', () => {
        clearResponse();
        appendMessage(question, 'user');
        appendMessage(answer, 'ai');
        renderSuggestions();
      });
      list.appendChild(button);
    });

    responseArea.appendChild(list);
  }

  function getOfflineAnswer(input) {
    const normalized = input.trim().toLowerCase();
    const exactMatch = suggestions.find(item => item.question.toLowerCase() === normalized);
    if (exactMatch) return exactMatch.answer;

    const keywordMatch = keywordAnswers.find(item => item.keywords.some(keyword => normalized.includes(keyword.toLowerCase())));
    if (keywordMatch) return keywordMatch.answer;

    return '目前這個助手是離線導覽模式，能協助你找到履歷、專案、聯絡方式與站內搜尋。可以點下方問題快速瀏覽。';
  }

  function showIntro() {
    clearResponse();
    appendMessage('你好，我是網站導覽助手。公開網站不會連到本機 AI 服務，所以我提供固定導覽與常見問題。', 'ai');
    renderSuggestions();
  }

  function handleSubmit() {
    const userInput = inputArea.value.trim();
    if (!userInput) return;

    inputArea.value = '';
    clearResponse();
    appendMessage(userInput, 'user');
    appendMessage(getOfflineAnswer(userInput), 'ai');
    renderSuggestions();
  }

  chatBubble.addEventListener('click', () => {
    const isVisible = chatWindow.classList.toggle('visible');
    if (isVisible && responseArea.children.length === 0) {
      showIntro();
    }
  });

  closeButton.addEventListener('click', () => chatWindow.classList.remove('visible'));
  submitButton.addEventListener('click', handleSubmit);
  inputArea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  });

  showIntro();
}
