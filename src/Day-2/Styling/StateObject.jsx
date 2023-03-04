import React, { useState } from "react";

function MyComponent() {
  const [isClicked, setIsClicked] = useState(false);

  const styles = {
    backgroundColor: isClicked ? "red" : "green",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
  };

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div style={styles} onClick={handleClick}>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </div>
  );
}

export default MyComponent;
