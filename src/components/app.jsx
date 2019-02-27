import React from "react";

import Channels from "../containers/channels.jsx";
import Channel from "../containers/channel.jsx";
import Messages from "../containers/messages.jsx";
import Message from "../components/message.jsx";
import Form from "../containers/form.jsx";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={`https://raw.githubusercontent.com/lewagon/www-images/master/logo-square.png`} />
    </div>
  );
}

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Channels />
      <Messages />
    </div>
  );
};

export default App;
