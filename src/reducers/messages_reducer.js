const messagesReducer = (state, action) => {
  if (state == undefined) {
    return []
  }

  if (action.type === "SET_MESSAGES") {
    return action.payload;
  } else {
    return state;
  }
}

export default messagesReducer;
