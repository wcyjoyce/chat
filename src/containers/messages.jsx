import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Message from "../components/message.jsx";
import Form from "../containers/form.jsx";

import { fetchMessages } from "../actions";

class Messages extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="channel">
        <h1>#{this.props.selectedChannel}</h1>
        <div className="messages">
          {this.props.messages.map((message) => <Message key={message.id} message={message} />)}
        </div>
        <Form />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
