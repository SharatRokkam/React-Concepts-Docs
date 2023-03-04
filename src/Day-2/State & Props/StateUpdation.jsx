import React, { Component } from 'react';

class StateUpdation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({ count: this.props.count });
    }
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default StateUpdation;
