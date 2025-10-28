# Data Flow Diagram

## 🔄 Overview
```text
User → Frontend (React) → Backend (Express) → Database (MongoDB)
                               ↓
                           OpenAI API
```
---
1. The user sends a message.
2. The backend logs and forwards the input.
3. The AI model generates a response.
4. Response and message are saved.
5. Notification system monitors idle periods.
