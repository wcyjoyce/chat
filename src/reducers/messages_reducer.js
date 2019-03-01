// import { fetchMessages, messagePosted, selectedChannel } from "../actions";

const messagesReducer = (state = null, action) => {
  switch(action.type) {
    case "FETCH_MESSAGES": {
      return action.payload.messages;
    }
    case "SELECTED_CHANNEL": {
      return []; // clears view when selected channel has changed
    }
    default:
      return state;
  }
}

export default messagesReducer;
