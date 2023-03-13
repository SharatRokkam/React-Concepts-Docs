import React from "react";
import ErrorBoundary from "./ErrorBoundary";

function MyComponent() {
  // intentionally passed the variable that is not defined
  return <h1>{undefinedVariable}</h1>;
}

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
