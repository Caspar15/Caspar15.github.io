/**
 * Interactive Terminal for Jekyll Site
 * Location: /assets/js/modules/terminal.js
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. DOM Element Selection ---
  const terminalContainer = document.getElementById('terminal-container');
  if (!terminalContainer) {
    // If the terminal HTML doesn't exist on the page, do nothing.
    return;
  }

  const outputElement = document.getElementById('terminal-output');
  const inputElement = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');

  // --- 2. Command Definitions ---
  const commands = {
    help: {
      description: 'Show all available commands.',
      execute: (args) => {
        let helpText = 'Available commands:\n';
        Object.keys(commands).forEach(cmd => {
          // Use template literals and proper spacing for readability
          helpText += `  <span class="command-echo">${cmd.padEnd(10)}</span> - ${commands[cmd].description}\n`;
        });
        return helpText;
      }
    },
    about: {
      description: 'Display a brief bio.',
      execute: (args) => `Caspar Chen - M.S. in EE @ NTUST.\n` +
                         `AI algorithms, LLM systems & evaluation, full-stack.\n` +
                         `More on my <a href="/about/">About</a> page.`
    },
    work: {
      description: 'Show work experience.',
      execute: (args) => `Work Experience:\n` +
                         `  2026.07-08  AI Engineer Intern @ Trend Micro\n` +
                         `              LLM-as-a-judge eval harness, CI-driven on Kubernetes\n` +
                         `  2023.06-10  Cloud Engineer @ Smart Transformation Center\n` +
                         `              IoT predictive maintenance, ML price forecasting\n` +
                         `Full details: <a href="/resume/">/resume/</a>`
    },
    research: {
      description: 'List publications.',
      execute: (args) => `Publications:\n` +
                         `  IEEE ICACT 2026  Meta-Heuristic Approaches with LM-based Selectors\n` +
                         `                   for Extractive Summarization\n` +
                         `                   *** Outstanding Paper Award ***\n` +
                         `  ISASD 2026       AI-Agent-Driven Demand Response Forecasting\n` +
                         `                   for Smart Homes with a CNN-LSTM Framework (accepted)\n` +
                         `  IEEE Access      extended version, under review`
    },
    projects: {
      description: 'List key projects.',
      execute: (args) => {
        return `Key Projects:\n` +
               `  - <a href="/projects/extractive-summarization-nsga2/">NSGA-II Extractive Summarization</a>\n` +
               `  - <a href="/projects/rain-nowcast-tw/">Rain Nowcast TW</a>\n` +
               `  - <a href="/projects/cnn-lstm-demand-response/">CNN-LSTM Demand Response</a>\n` +
               `  - <a href="/projects/greenfriend/">GreenFriend</a>\n` +
               `  ... and more on the <a href="/#projects">Projects</a> section.`;
      }
    },
    contact: {
      description: 'Show contact information.',
      execute: (args) => `You can reach me via:\n` +
                       `  - <a href="mailto:caspar9202166422@gmail.com">caspar9202166422@gmail.com</a>\n` +
                       `  - <a href="https://github.com/Caspar15" target="_blank" rel="noopener">GitHub</a>\n` +
                       `  - <a href="https://www.linkedin.com/in/caspar0216" target="_blank" rel="noopener">LinkedIn</a>`
    },
    clear: {
      description: 'Clear the terminal screen.',
      execute: (args) => {
        outputElement.innerHTML = '';
        return '';
      }
    }
  };

  // --- 3. Core Functions ---

  /**
   * Appends a message to the terminal output.
   * @param {string} message - The HTML or text to append.
   * @param {string} [className] - An optional CSS class to add to the line.
   */
  function appendOutput(message, className) {
    const line = document.createElement('div');
    line.innerHTML = message; // Use innerHTML to render HTML tags like <span> and <a>
    if (className) {
      line.classList.add(className);
    }
    outputElement.appendChild(line);
  }

  /**
   * Processes and executes a user-entered command.
   * @param {string} commandText - The full command string from the input.
   */
  function executeCommand(commandText) {
    // Echo the command that was just entered
    appendOutput(`> ${commandText}`, 'command-echo');

    const [commandName, ...args] = commandText.trim().split(' ');

    if (commands[commandName]) {
      const output = commands[commandName].execute(args);
      if (output) {
        appendOutput(output, 'output-line');
      }
    } else {
      appendOutput(`Command not found: <span class="error">${commandName}</span>. Type 'help' for a list of commands.`, 'output-line');
    }

    // Scroll to the bottom of the terminal to keep the prompt visible
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // --- 4. Event Listeners ---

  // Focus on the input when any part of the terminal body is clicked
  terminalBody.addEventListener('click', () => {
    inputElement.focus();
  });

  // Handle the 'Enter' key press in the input field
  inputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const commandText = inputElement.value.trim();
      if (commandText) {
        executeCommand(commandText);
        inputElement.value = ''; // Clear the input field
      }
    }
  });

  // --- 5. Initial Welcome Message ---
  const welcomeMessage = `Welcome to my interactive terminal!
Type <span class="command-echo">'help'</span> to see a list of available commands.`;
  appendOutput(welcomeMessage, 'output-line');
  
  // Auto-focus on the input field has been removed to prevent auto-scrolling.
  // inputElement.focus();
});
