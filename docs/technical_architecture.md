# Technical Architecture

## ⚙️ Core Components
- **Frontend:** React + TailwindCSS  
- **Backend:** Express.js + Node.js  
- **AI Engine:** OpenAI API (GPT)  
- **Database:** MongoDB (for user memory and chat history)

---

## 🧩 System Flow
1. User sends a message via the frontend.
2. Message is sent to the backend API.
3. Backend stores it in the database.
4. Backend requests AI response from GPT model.
5. Response is saved and displayed in real time.
6. Notification system checks for idle time and sends reminders.

---

## 🗄️ API Endpoints
| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/chat` | POST | Sends message and retrieves AI response |
| `/api/memory` | GET/POST | Manages stored memories |
| `/api/notifications` | GET | Triggers idle-time notifications |
