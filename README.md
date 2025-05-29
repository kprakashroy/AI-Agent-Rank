# AI Agent Rank – Fullstack Application

This project contains a fullstack AI agent ranking system using OpenAI's API. It includes a React frontend and a Node.js backend.

---

## 🛠️ Setup Instructions

1. **Clone the Repository**

   Clone the repository and navigate to the project directory:

   git clone https://github.com/kprakashroy/AI-Agent-Rank.git  
   cd AI-Agent-Rank

2. **Install Dependencies**

   Install dependencies in both the backend and frontend directories:

   cd backend  
   npm install  

   cd ../frontend  
   npm install

3. **Configure Environment Variables**

   Create a `.env` file inside the `backend` directory with the following content:

   OPENAI_API_KEY=your_openai_api_key  
   PORT=5000

   Replace `your_openai_api_key` with your actual OpenAI API key.  
   You can change the `PORT` value if needed.

4. **Update Frontend API URL**

   Open `frontend/src/App.js` (or `App.tsx`) and update the backend API URL to match the port set in your `.env` file.  
   For example, if your backend is running on `http://localhost:5000`,

5. **Run the Application**

   Open two terminal windows or tabs and run the backend and frontend servers separately:

   **Terminal 1 – Backend**  
   cd backend  
   npm start

   **Terminal 2 – Frontend**  
   cd frontend  
   npm start

   The frontend will run at `http://localhost:3000` and the backend at `http://localhost:5000` (or your configured port).

---

## ✅ License

MIT
