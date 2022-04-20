import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState(null);
  const getchat = async () => {
    const { data } = await axios.get("/api/chat");
    // console.log(data);
    setChats(data);
  };
  useEffect(() => {
    getchat();
  }, []);
  //console.log(chats);
  return (
    <div>
      {chats && chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)}
    </div>
  );
};
export default Chatpage;
