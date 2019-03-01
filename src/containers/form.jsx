import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleSubmit = (event) => {
    this.setState = {
      value: event.target.value
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" className="form-control" message="message" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
