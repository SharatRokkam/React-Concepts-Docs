import React, { Component } from "react";
import "./App.css";

export default class Ternary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let { isLoggedIn } = this.state;

    return (
      <div className="App">
        <h1>
          This is a Demo showing several ways to implement Conditional Rendering
          in React.
        </h1>
        {/* use of ternary operators */}
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    );
  }
}


