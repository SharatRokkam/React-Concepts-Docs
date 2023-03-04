import React, { Component } from 'react';

class UncontrolledForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      message: this.messageInput.value
    };
    console.log('Form submitted:', formData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.nameInput = input} />
        </label>
        <label>
          Email:
          <input type="email" ref={(input) => this.emailInput = input} />
        </label>
        <label>
          Message:
          <textarea ref={(input) => this.messageInput = input}></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UncontrolledForm;
