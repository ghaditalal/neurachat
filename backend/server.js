const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

// Test route
app.get("/", (req, res) => {
  res.json({ message: "NeuraChat backend is running 🚀" });
});

// Chat route
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // Call Ollama API
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2",
        prompt: `
        You are NeuraChat, a friendly and helpful AI assistant.
        Keep responses short, clear, and conversational.

        User: ${message}
        `,
        stream: false,
      }),
    });

    const data = await response.json();

    res.json({
      reply: data.response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});