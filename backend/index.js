const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/dummy.js");

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const message = chats.find((c) => c._id === req.params.id);
  res.send(message);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  //console.log(PORT);
  console.log("Working on port destined port number");
});
