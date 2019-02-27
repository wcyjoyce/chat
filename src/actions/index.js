import messages from "../messages.js";

export function setMessages() {
  return {
    type: "SET_MESSAGES",
    payload: messages
  }
}
