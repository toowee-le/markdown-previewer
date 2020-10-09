import React from "react";

export default function Editor(props) {
  return (
    <React.Fragment>
      <h2>Markdown</h2>
      <div className="markdown-input">
        <textarea
          name="markdown"
          id="editor"
          className="editor"
          value={props.value}
          onChange={props.updateMarkdown}
          rows={10}
        />
      </div>
    </React.Fragment>
  );
}
