import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    //dummy api has been passed for reference
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      console.log("Data has changed");
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      data: [...prevState.data, "New item"]
    }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Add item</button>
      </div>
    );
  }
}