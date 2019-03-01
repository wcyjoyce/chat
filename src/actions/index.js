// import messages from "../messages.js";

// export function fetchMessages() {
//   return {
//     type: "FETCH_MESSAGES",
//     payload: messages
//   }
// }

const base_url = "https://wagon-chat.herokuapp.com";

export function fetchMessages(channel) {
  const url = `${base_url}/{channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: "FETCH_MESSAGES",
    payload: promise
  }
}
