import React, { Component } from "react";
import Editor from "./components/Editor";
import "./App.scss";
let marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: placeholder,
    };
  }

  updateMarkdown = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <div style={containerStyle} className="container">
          <div className="col">
            <Editor
              value={this.state.value}
              updateMarkdown={this.updateMarkdown}
            />
          </div>
          <div className="col">
            <h2>Preview</h2>
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Hello Dev!`;

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};

export default App;
