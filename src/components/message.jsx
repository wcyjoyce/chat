import React, { Component } from "react";
import { emojify } from "react-emojione";

class Message extends Component {
  render() {
    const { author, content, created_at } = this.props.message;
    const date = new Date(created_at).toDateString()
    const time = new Date(created_at).toLocaleTimeString()

    return (
      <div className="message">
        <div className="message-header">
          <div className="message-author">{author}</div>
          <div className="message-datetime">{date} {time}</div>
        </div>
        <div className="message-content"> {emojify(content)}</div>
      </div>
    );
  }
}

export default Message;
