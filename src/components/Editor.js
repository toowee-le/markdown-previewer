import React from "react";

export default function Editor(props) {
  return (
    <React.Fragment>
      <h2>Editor</h2>
      <div className="markdown-input">
        <textarea
          name="editor"
          id="editor"
          className="editor"
          value={props.markdown}
          onChange={(e) => {
            props.updateMarkdown(e.target.value);
          }}
        ></textarea>
      </div>
    </React.Fragment>
  );
}
