import { useState } from 'react';
import axios from 'axios';

function App() {
  const [task, setTask] = useState('');
  const [results, setResults] = useState([]);

  const submitTask = async () => {
    const res = await axios.post('http://localhost:5200/api/agents/rank', { task });
    setResults(res.data.results);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AgentRank</h1>
      <textarea
        value={task}
        onChange={e => setTask(e.target.value)}
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Describe your task..."
      />
      <button
        onClick={submitTask}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Rank Agents
      </button>

      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Recommended Agents:</h2>
          <ul className="space-y-3">
            {results.map(agent => (
              <li key={agent.id} className="border p-3 rounded shadow">
                <strong>{agent.name}</strong> — {agent.similarity}
                <p className="text-sm">{agent.description}</p>
                <a href={agent.url} className="text-blue-500 text-sm" target="_blank">Visit</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;