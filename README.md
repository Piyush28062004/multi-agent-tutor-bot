# 🤖 Multi-Agent Tutor Bot

An interactive AI-powered tutoring assistant built using a modular, multi-agent architecture. Each agent specializes in a subject, and the Tutor Agent routes questions intelligently. Powered by Google's Gemini API.

## 🚀 Live Demo

👉 [Click here to use the bot](https://your-vercel-or-railway-url.com)

---

## 🧠 Architecture Overview

- **Tutor Agent:** Main interface, determines the subject and delegates queries.
- **Math Agent:** Solves math problems. Uses a built-in calculator tool.
- **Physics Agent:** Answers physics queries. Uses a constants lookup tool.
- **Gemini API:** Provides natural language understanding and generation.

---

## 📁 Project Structure

multi-agent-tutor/
├── agents/
│ ├── tutorAgent.js
│ ├── mathAgent.js
│ └── physicsAgent.js
├── tools/
│ ├── calculator.js
│ └── physicsConstants.js
├── services/
│ └── geminiService.js
├── routes/
│ └── index.js
├── public/
│ └── index.html
├── app.js
└── package.json
