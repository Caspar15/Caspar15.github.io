/**
 * Interactive Terminal for Jekyll Site
 * Location: /assets/js/modules/terminal.js
 */

export function initTerminal() {
  const terminalContainer = document.getElementById('terminal-container');
  if (!terminalContainer) {
    return;
  }

  // Prevent multiple initializations
  if (terminalContainer.dataset.initialized === 'true') {
    return;
  }
  terminalContainer.dataset.initialized = 'true';

  const outputElement = document.getElementById('terminal-output');
  const inputElement = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');

  if (!outputElement || !inputElement || !terminalBody) {
    return;
  }

  // --- 2. Command Definitions ---
  const commands = {
    help: {
      description: 'Show all available commands.',
      execute: (args) => {
        let helpText = 'Available commands:\n';
        Object.keys(commands).forEach(cmd => {
          helpText += `  <span class="command-echo">${cmd.padEnd(10)}</span> - ${commands[cmd].description}\n`;
        });
        return helpText;
      }
    },
    about: {
      description: 'Display a brief bio.',
      execute: (args) => `Caspar Chen - M.S. in EE @ NTUST.\n` +
                         `Specialized in AI algorithms, LLM evaluation & multi-agent systems.\n` +
                         `Full story on the <a href="/about/">/about/</a> page.`
    },
    work: {
      description: 'Show work & internship experience.',
      execute: (args) => `Work Experience:\n` +
                         `  2026.07-08  AI Engineer Intern @ Trend Micro\n` +
                         `              LLM-as-a-judge eval harness, CI-driven on Kubernetes\n` +
                         `  2023.06-10  Cloud Engineer @ Smart Transformation Center\n` +
                         `              IoT predictive maintenance, ML price forecasting\n` +
                         `Details: <a href="/resume/">/resume/</a>`
    },
    research: {
      description: 'List publications.',
      execute: (args) => `Publications:\n` +
                         `  - JIT (Sep 2026) : Multi-Agent Demand Response Framework w/ Generative Advisory Agent (Accepted)\n` +
                         `  - IEEE ICACT 2026: Meta-Heuristic Approaches with LM-based Selectors (*** Outstanding Paper Award ***)\n` +
                         `  - ISASD 2026     : CNN-LSTM Framework for Smart Home Demand Response (Accepted)\n` +
                         `  - IEEE Access    : Provenance-Aware Multi-Route Fusion (Under Review)\n` +
                         `Details: <a href="/resume/#resume-research">/resume/</a>`
    },
    projects: {
      description: 'List key projects.',
      execute: (args) => {
        return `Key Projects:\n` +
               `  - <a href="/projects/extractive-summarization-nsga2/">NSGA-II Extractive Summarization (ICACT Award)</a>\n` +
               `  - <a href="/projects/rain-nowcast-tw/">Rain Nowcast TW (Taiwan Rain Radar)</a>\n` +
               `  - <a href="/projects/cnn-lstm-demand-response/">CNN-LSTM Demand Response</a>\n` +
               `  - <a href="/projects/greenfriend/">GreenFriend (Low Carbon Route Recommender)</a>\n` +
               `  ... browse all below in <a href="/#projects">#projects</a>.`;
      }
    },
    contact: {
      description: 'Show contact information.',
      execute: (args) => `Contact Caspar:\n` +
                       `  - Email   : <a href="mailto:caspar9202166422@gmail.com">caspar9202166422@gmail.com</a>\n` +
                       `  - GitHub  : <a href="https://github.com/Caspar15" target="_blank" rel="noopener">github.com/Caspar15</a>\n` +
                       `  - LinkedIn: <a href="https://www.linkedin.com/in/caspar0216" target="_blank" rel="noopener">linkedin.com/in/caspar0216</a>`
    },
    clear: {
      description: 'Clear the terminal screen.',
      execute: (args) => {
        outputElement.innerHTML = '';
        return '';
      }
    },
    cmd: {
      description: 'Show CLI status.',
      execute: () => `Interactive Portfolio CLI v2.1. Type <span class="command-echo">'help'</span> for a list of commands.`
    },
    ls: {
      description: 'List directory entries.',
      execute: () => `about/   work/   research/   projects/   contact/   resume/`
    }
  };

  // Convert full-width characters (e.g. from Chinese IME) to half-width
  function normalizeInput(str) {
    return str.replace(/[\uff01-\uff5e]/g, (ch) => {
      return String.fromCharCode(ch.charCodeAt(0) - 0xfee0);
    }).replace(/\u3000/g, ' ').trim();
  }

  function appendOutput(message, className) {
    const line = document.createElement('div');
    line.innerHTML = message;
    if (className) {
      line.classList.add(className);
    }
    outputElement.appendChild(line);
  }

  function executeCommand(rawCommandText) {
    const commandText = normalizeInput(rawCommandText);
    if (!commandText) return;

    appendOutput(`> ${commandText}`, 'command-echo');

    const parts = commandText.split(/\s+/);
    const commandName = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (commands[commandName]) {
      const output = commands[commandName].execute(args);
      if (output) {
        appendOutput(output, 'output-line');
      }
    } else {
      appendOutput(`Command not found: <span class="error">${commandName}</span>. Type <span class="command-echo">'help'</span> for commands.`, 'output-line');
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // --- Event Listeners ---
  terminalBody.addEventListener('click', () => {
    inputElement.focus();
  });

  inputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const commandText = inputElement.value;
      if (commandText.trim()) {
        executeCommand(commandText);
        inputElement.value = '';
      }
    }
  });

  // Handle quick command chips click
  const chipsContainer = document.getElementById('terminal-chips');
  if (chipsContainer) {
    chipsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.terminal-chip');
      if (chip && chip.dataset.cmd) {
        const cmd = chip.dataset.cmd;
        inputElement.value = cmd;
        executeCommand(cmd);
        inputElement.value = '';
      }
    });
  }

  // Initial Welcome Message
  const welcomeMessage = `Welcome to Caspar's interactive terminal!
Click any chip above or type <span class="command-echo">'help'</span> to explore.`;
  appendOutput(welcomeMessage, 'output-line');
}

// Auto-run if DOM is already ready, or on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTerminal);
} else {
  initTerminal();
}
