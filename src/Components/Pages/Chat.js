import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../Chatbot/config";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";

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
// const style = StyleSheet.create({
//   //   Chat: {
//   //       text-align
//   //     text-align : center,
//   //     background-color:#282c34,
//   //     min-height: 100vh,
//   //     display: flex,
//   //     justify-content: center,
//   //     align-items: center,
//   //   },
// });
export default Chat;
