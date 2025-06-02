import { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the custom CSS file

function App() {
  const [task, setTask] = useState('');
  const [results, setResults] = useState([]);

  const submitTask = async () => {
    try {
      const res = await axios.post('http://localhost:5200/api/agents/rank', { task });
      setResults(res.data.results);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h1 className="app-title">AgentRank</h1>

        <textarea
          value={task}
          onChange={e => setTask(e.target.value)}
          className="task-input"
          rows={4}
          placeholder="Describe your task..."
        />

        <button onClick={submitTask} className="submit-button">
          Rank Agents
        </button>

        {results.length > 0 && (
          <div className="results-section">
            <h2 className="results-title">Recommended Agents:</h2>
            <ul className="results-list">
              {results.map(agent => (
                <li key={agent.id} className="agent-card">
                  <div className="agent-header">
                    <span className="agent-name">{agent.name}</span>
                    <span className="agent-score">Score: {agent.similarity}</span>
                  </div>
                  <p className="agent-desc">{agent.description}</p>
                  <a href={agent.url} target="_blank" rel="noopener noreferrer" className="agent-link">
                    Visit
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
