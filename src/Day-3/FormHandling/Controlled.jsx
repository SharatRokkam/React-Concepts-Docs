import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ControlledForm;
