import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Message from "../components/message.jsx";
import { setMessages } from "../actions";

class Messages extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  render() {
    return (
      <div className="messages">
        {this.props.messages.map((message) => <Message key={message.author} message={message} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Messages);
