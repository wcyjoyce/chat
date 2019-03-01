const base_url = "https://wagon-chat.herokuapp.com";

export function fetchMessages(channel) {
  const url = `${base_url}/{channel}/messages`;
  const promise = fetch(url).then(response => response.json());
  return {
    type: "FETCH_MESSAGES",
    payload: promise
  }
}

export function selectChannel(channel) {
  return {
    type: "SELECTED_CHANNEL",
    payload: channel
  }
}
