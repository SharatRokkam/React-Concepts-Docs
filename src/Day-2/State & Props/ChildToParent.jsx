import React, { Component } from "react";
import Child from "./ChildParent";

class Parent extends Component {
  state = {
    message: "",
  };

  handleMessage = (message) => {
    this.setState({ message });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child handleMessage={this.handleMessage} />
        <p>Message from child: {this.state.message}</p>
      </div>
    );
  }
}

export default Parent;
