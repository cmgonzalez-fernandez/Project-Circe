import { useState } from "react";
import ChatBox from "./components/ChatBox";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <h1 className="title">💬 Project Circe</h1>
      <ChatBox />
    </div>
  );
}
