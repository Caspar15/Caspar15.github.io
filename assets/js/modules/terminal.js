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
      execute: (args) => `Caspar - Software Engineer | Full-Stack Developer | Data Science Enthusiast.\nFind more on my <a href="/about.html" target="_blank">About Me</a> page.`
    },
    projects: {
      description: 'List key projects.',
      execute: (args) => {
        return `Key Projects:\n` +
               `  - <a href="/projects/greenfriend.html" target="_blank">GreenFriend</a>\n` +
               `  - <a href="/projects/discord-music.html" target="_blank">Discord Music Bot</a>\n` +
               `  - <a href="/projects/tiny-fb.html" target="_blank">Tiny Facebook</a>\n` +
               `  ... and more on the Projects page.`;
      }
    },
    contact: {
      description: 'Show contact information.',
      execute: (args) => `You can reach me via:\n` +
                       `  - <a href="https://github.com/Caspar15" target="_blank">GitHub</a>\n` +
                       `  - <a href="https://www.linkedin.com/in/%E6%9F%8F%E5%AE%87-%E9%99%B3-3a84132a2/" target="_blank">LinkedIn</a>`
    },
    clear: {
      description: 'Clear the terminal screen.',
      execute: (args) => {
        outputElement.innerHTML = '';
        return ''; // No success message needed, just clear the screen
      }
    },
    sudo: {
      description: 'Request admin privileges.',
      execute: (args) => `<span class="error">Error: User is not in the sudoers file. This incident will be reported.</span>`
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

    // Scroll to the bottom of the terminal
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
  const welcomeMessage = `Welcome to my interactive terminal!\nType <span class="command-echo">'help'</span> to see a list of available commands.`;
  appendOutput(welcomeMessage, 'output-line');
  
  // Auto-focus the input field on page load
  inputElement.focus();
});
