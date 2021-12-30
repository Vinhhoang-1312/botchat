import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../Chatbot/config";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import "react-chatbot-kit/build/main.css";
function Chat() {
  return (
    <div className="Chat">
      <header className="App-header">
        {/* <div style={{ maxWidth: "300px", color: "black" }}> */}
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default Chat;
