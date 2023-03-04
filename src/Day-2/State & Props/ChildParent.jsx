import React, { useState } from 'react';

const Child = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleMessage(message);
    setMessage("");
  }

  return (
    <div>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Child;