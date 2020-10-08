import React, { Component } from "react";
import "./App.scss";
let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown = (markdown) => {
    this.setState({ markdown });
  };

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <div style={containerStyle} className="container">
          <div className="col">
            <h2>Editor</h2>
            <div className="markdown-input">
              <textarea
                name="editor"
                id="editor"
                className="editor"
                value={this.state.markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="col">
            <h2>Preview</h2>
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};

export default App;
