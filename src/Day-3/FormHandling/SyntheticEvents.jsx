import React from 'react';

function handleClick(event) {
  event.preventDefault();
  console.log('Button clicked!');
}

function Button() {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default Button;