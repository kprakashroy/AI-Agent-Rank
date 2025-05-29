require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => {
  console.log(`AgentRank backend running on port ${PORT}`);
});