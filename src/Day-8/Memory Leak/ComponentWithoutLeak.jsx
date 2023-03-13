import React, { useState, useEffect } from 'react';

function ComponentWithoutLeak() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // Add an event listener when the component mounts
    window.addEventListener('click', handleClick);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, );

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

function App() {
  const [showComponent, setShowComponent] = useState(true);

  const handleToggle = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Component</button>
      {showComponent && <ComponentWithoutLeak />}
    </div>
  );
}

export default App;