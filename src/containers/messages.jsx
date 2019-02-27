import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Message from "../components/message.jsx";

class Messages extends Component {
  render() {
    return (
      <div className="messages">
        {this.props.chat.map((message) => <Message key={message.author} message={message} />)}
      </div>
    );
  }
}

export default Messages;
