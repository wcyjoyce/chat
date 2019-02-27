import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Message extends Component {
  render() {
    return (
      <div className="message">
        {this.props.message.author}
      </div>
    );
  }
}

export default Message;
