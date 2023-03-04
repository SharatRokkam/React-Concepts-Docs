import React, { useRef } from "react";

function ResizableTextarea() {
  const textareaRef = useRef(null);

  // Define a function to resize the textarea based on its content
  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  // Call resizeTextarea whenever the textarea content changes
  const handleTextareaChange = (event) => {
    resizeTextarea();
  };

  return (
    <div>
      <textarea ref={textareaRef} onChange={handleTextareaChange} />
    </div>
  );
}


export default ResizableTextarea;
