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

const messagesReducer = (state, action) => {
  if (state == undefined) {
    return [];
  }

  if (action.type === "SET_MESSAGES") {
    const messages = action.payload.messages;
    const channel = action.payload.channel;
    return messages;
  } else {
    return state;
  }
}

export default messagesReducer;
