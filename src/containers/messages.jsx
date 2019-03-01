import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Message from "../components/message.jsx";
import Form from "../containers/form.jsx";

import { fetchMessages } from "../actions";

class Messages extends Component {
  componentWillMount() {
    this.props.fetchMessages("test");
  }

  render() {
    return (
      <div className="channel">
        <h1>Channel Name</h1>
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
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
