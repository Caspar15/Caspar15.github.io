// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  console.log('[BE] Received request on /api/chat');
  const ollamaUrl = 'http://localhost:11434/api/chat';
  console.log(`[BE] Proxying request to Ollama at: ${ollamaUrl}`);

  try {
    const ollamaResponse = await fetch(ollamaUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    console.log('[BE] Received response from Ollama. Status:', ollamaResponse.status);

    if (!ollamaResponse.ok) {
      const errorText = await ollamaResponse.text();
      console.error('[BE] Error from Ollama:', errorText);
      res.status(ollamaResponse.status).send(errorText);
      return;
    }

    console.log('[BE] Piping response to client.');
    ollamaResponse.body.pipe(res);

  } catch (error) {
    console.error('[BE] Error proxying to Ollama:', error);
    res.status(500).json({ error: 'Failed to connect to Ollama service.' });
  }
});

app.listen(port, () => {
  console.log(`Backend server with logging is running at http://localhost:${port}`);
});