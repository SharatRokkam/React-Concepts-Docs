import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    const { prop1, prop2 } = this.props;
    return (
      <div>
        <p>Prop 1: {prop1}</p>
        <p>Prop 2: {prop2}</p>
      </div>
    );
  }
}

export default MyPureComponent
