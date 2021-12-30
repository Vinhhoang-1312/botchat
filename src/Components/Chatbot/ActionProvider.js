// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend");
    this.addMessageToState(message);
  };
  chuinhau = () => {
    const message = this.createChatBotMessage(
      "mày mới ngu"
      // , {
      //    widget: "javascriptQuiz",
      // }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
