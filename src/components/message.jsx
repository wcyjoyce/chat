import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Message extends Component {
  render() {
    const { message } = this.props;
    const time = new Date(message.created_at).toLocaleTimeString()
    return (
      <div className="message">
        <div className="message-header">
          <div className="message-author">{message.author}</div>
          <div className="message-datetime">{time}</div>
        </div>
        <div className="message-content"> {message.content}</div>
      </div>
    );
  }
}

export default Message;
