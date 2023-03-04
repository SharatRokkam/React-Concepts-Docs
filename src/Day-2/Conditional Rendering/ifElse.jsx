import React from "react";

export default class App extends React.Component {

    render() {
      let {isLoggedIn} = this.state;
      
      //if-else statement
      const renderAuthButton = () => {
        if (isLoggedIn) {
          return <button>Logout</button>;
        } else {
          return <button>Login</button>;
        }
      }
  
      return (
        <div className="App">
          <h1>
            This is a Demo showing several ways to implement Conditional Rendering in React.
          </h1>
          {renderAuthButton()}
        </div>
      );
    }
  }