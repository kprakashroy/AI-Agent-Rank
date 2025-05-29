const fs = require('fs');
const path = require('path');
const cosineSimilarity = require('../utils/cosineSimilarity');

const agentDataPath = path.join(__dirname, '../data/agentMetadata.json');
const agents = JSON.parse(fs.readFileSync(agentDataPath, 'utf-8'));

async function rankAgents(taskEmbedding) {
  const scores = agents.map(agent => {
    const similarity = cosineSimilarity(agent.embedding, taskEmbedding);
    return { ...agent, similarity };
  });
  
  return scores.sort((a, b) => b.similarity - a.similarity);
}

module.exports = { rankAgents };