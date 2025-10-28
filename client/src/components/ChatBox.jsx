import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { user: "You", message: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "You", message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { user: "Circe", message: data.response }]);
    } catch (err) {
      console.error("Error:", err);
    }

    setInput("");
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.user === "You" ? "user" : "bot"}`}>
            <strong>{msg.user}: </strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Talk to Circe..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
