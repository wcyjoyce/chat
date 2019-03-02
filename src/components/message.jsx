import React, { Component } from "react";

class Message extends Component {
  render() {
    const { message } = this.props;
    const date = new Date(message.created_at).toDateString()
    const time = new Date(message.created_at).toLocaleTimeString()
    return (
      <div className="message">
        <div className="message-header">
          <div className="message-author">{message.author}</div>
          <div className="message-datetime">{date} {time}</div>
        </div>
        <div className="message-content"> {message.content}</div>
      </div>
    );
  }
}

export default Message;
