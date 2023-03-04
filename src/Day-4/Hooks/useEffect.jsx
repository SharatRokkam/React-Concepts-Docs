import React, { useState, useEffect } from 'react';

export default function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}