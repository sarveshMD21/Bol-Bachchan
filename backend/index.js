const express = require("express");
const dotenv = require("dotenv");
//const { chats } = require("./data/dummy.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./Routes/userRoutes.js");
const chatRoutes = require("./Routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use("/api/user", userRoutes);
app.use("/api/chats", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Working on port destined port number");
});
