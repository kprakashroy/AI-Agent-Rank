const OpenAI = require('openai');
const { rankAgents } = require('../services/agentService');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // make sure this is defined
});



async function handleTask(req, res) {
  try {
    const { task } = req.body;
    const embeddingRes = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: task,
    });
    const taskEmbedding = embeddingRes.data[0].embedding;
    const ranked = await rankAgents(taskEmbedding);
    res.json({ task, results: ranked });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Embedding or Ranking failed' });
  }
}

module.exports = { handleTask };