import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  state = {
    name: "Mathew",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Chennai",
      state: "Tamil Nadu"
    }
  }

  render() {
    return <Child person={this.state} />;
  }
}

export default Parent;