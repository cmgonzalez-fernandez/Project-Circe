import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Simple chat simulation endpoint
router.post("/", async (req, res) => {
  try {
    const { user, message } = req.body;

    // Mock AI response
    const response = `Hi ${user}, you said: "${message}"`;

    // Save message in memory (for demonstration)
    const newMsg = await Message.create({ user, message, response });

    res.status(200).json(newMsg);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
