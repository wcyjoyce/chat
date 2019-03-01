// import messages from "../messages.js";

// export function setMessages() {
//   return {
//     type: "SET_MESSAGES",
//     payload: messages
//   }
// }

const base_url = "https://wagon-chat.herokuapp.com";

export function setMessages(channel) {
  const url = `${base_url}/{channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: "SET_MESSAGES",
    payload: promise
  }
}
