// Static messages list:
// const messagesReducer = (state, action) => {
//   if (state == undefined) {
//     return []
//   }

//   if (action.type === "SET_MESSAGES") {
//     return action.payload;
//   } else {
//     return state;
//   }
// }

// API:
import { setMessages } from "../actions";

const messagesReducer = (state = null, action) => {
  switch(action.type) {
    case setMessages: {
      const messages = action.payload.messages;
      const channels = action.payload.channels;
      return messages;
    }
    default:
      return state;
  }
}

export default messagesReducer;
