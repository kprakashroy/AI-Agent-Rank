const express = require('express');
const bodyParser = require('body-parser');
const agentRoutes = require('./routes/agentRoutes');
const app = express();
const cors = require('cors');
const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
// openai.apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // make sure this is defined
});


const agentDataPath = path.join(__dirname, './data/agentMetadata.json');
const agents = JSON.parse(fs.readFileSync(agentDataPath, 'utf-8'));


app.use(cors());
app.use(bodyParser.json());

app.use('/api/agents', agentRoutes);

app.get('/', async(req, res) => {
    // let output = []
    // for (let i = 0; i < agents.length; i++) {
    //     const embeddingRes = await openai.embeddings.create({
    //         model: 'text-embedding-3-small',
    //         input: `${agents[i].name} ${agents[i].description} ${agents[i].capabilities.join(' ')}`,
    //       });
    //       const taskEmbedding = embeddingRes.data[0].embedding;
    //       output.push({
    //         ...agents[i],
    //         embedding: taskEmbedding
    //       })
    // }
    // // const embeddingRes = await openai.embeddings.create({
    // fs.writeFileSync(agentDataPath, JSON.stringify(output, null, 2));
    res.send("done");
});




module.exports = app;