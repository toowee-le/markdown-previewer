import React from "react";

export default function Editor(props) {
  return (
    <React.Fragment>
      <h2 className="subheading">Editor</h2>
      <div className="markdown-input">
        <textarea
        style={textareaStyle}
          name="markdown"
          id="editor"
          className="editor"
          value={props.value}
          onChange={props.updateMarkdown}
          rows={50}
        />
      </div>
    </React.Fragment>
  );
}

const textareaStyle = {
    width: "95%",
    marginTop: "1em",
    border: "none",
    background: "transparent",
    color: "#20a0ee",
    fontSize: "1.1rem",
    textAlign: "left",
    whiteSpace: "normal"
}