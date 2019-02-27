import React from "react";

import Channels from "../containers/channels.jsx";
import Channel from "../containers/channel.jsx";
import Messages from "../containers/messages.jsx";
import Message from "../components/message.jsx";
import Form from "../containers/form.jsx";

const chat = [
  {
    author: "anonymous92",
    content: "Hello world!",
    created_at: "2017-09-26T23:03:16.365Z"
  },
  {
    author: "Joyce",
    content: "My name is Joyce",
    created_at: "2017-09-26T23:03:21.194Z"
  }
]

const App = () => {
  return (
    <div className="app">
      <Channels />
      <Messages chat={chat} />
    </div>
  );
};

export default App;
