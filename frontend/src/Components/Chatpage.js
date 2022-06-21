import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState(null);
  const getchat = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };
  useEffect(() => {
    getchat();
  }, []);

  return (
    <div>
      {chats && chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)}
    </div>
  );
};
export default Chatpage;
