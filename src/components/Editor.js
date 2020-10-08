import React from "react";

export default function Editor(props) {
  return (
    <React.Fragment>
      <h2>Editor</h2>
      <div className="markdown-input">
        <textarea
          name="markdown"
          type="text"
          id="editor"
          className="editor"
          value={props.markdown}
          onChange={props.updateMarkdown}
        />
      </div>
    </React.Fragment>
  );
}
