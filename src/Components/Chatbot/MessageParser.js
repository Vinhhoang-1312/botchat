class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }
    if (lowercase.includes("ngu") || lowercase.includes("ngu nhu bo")) {
      this.actionProvider.chuinhau();
    }
  }
}

export default MessageParser;
