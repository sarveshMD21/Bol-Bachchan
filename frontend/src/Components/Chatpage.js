import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Chatpage = () => {
  const getchat = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
  };
  useEffect(() => {
    getchat();
  }, []);
  return <div>Chatpage hai mera</div>;
};
export default Chatpage;
