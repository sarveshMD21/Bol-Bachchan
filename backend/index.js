const express = require("express");
const { chats } = require("./data/dummy.js");

const app = express();
//console.log("helo");
app.get("/", (req, res) => {
  // console.log(chats);
  res.send("Welcome to home page");
});

app.get("/api/chat", (req, res) => {
  //console.log("hwllo ji");
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //{id} = req.params()
  const message = chats.find((c) => c._id === req.params.id);
  res.send(message);
});

app.listen(3000, () => {
  console.log("Working on port 3000");
});
