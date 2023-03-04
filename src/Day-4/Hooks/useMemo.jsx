import React, { useMemo, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // This function will get called every time the component re-renders
  function expensiveFunction() {
    console.log('expensiveFunction called');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }

  // Use useMemo to memoize the result of the expensiveFunction
  const memoizedResult = useMemo(() => expensiveFunction(), []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}
