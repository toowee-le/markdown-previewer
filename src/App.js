import React, { Component } from "react";
import Editor from "./components/Editor";
import "./App.scss";
let marked = require("marked");

marked.setOptions({
  breaks: true,
});

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
        <h1 className="title">Markdown Previewer</h1>

        <div className="app-container">
          <header>
            App.js - markdown-previewer
            <div className="buttons">
              <div className="button exit"></div>
              <div className="button minimise"></div>
              <div className="button maximise"></div>
            </div>
          </header>
          <div style={containerStyle}>
            <div className="col markdown">
              <Editor
                value={this.state.value}
                updateMarkdown={this.updateMarkdown}
              />
            </div>
            <div className="col preview">
              <h2 className="subheading">Preview</h2>
              <div
              style={previewStyle}
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(this.state.value) }}
              ></div>
            </div>
          </div>
          <footer>Designed by <a href="https://github.com/toowee-le/markdown-previewer" target="_blank" rel="noopener noreferrer" alt="Link to Github">Toowee</a></footer>
        </div>
      </div>
    );
  }
}

const placeholder = `# Hello Dev!\n---\n\n## Welcome to my markdown previewer. Give it a try by editing the editor.\n\n> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext documents. It was created in 2004 by John Gruber and is now one of the world's most popular markup languages.\n\nHere's what to do:

  * Type some markdown on the left
  * See HTML in the right
  * **Cool right?**\n\n![gif](https://media.giphy.com/media/MFYewrNPPkUzUUKVXa/giphy.gif)\n\nYou can also include a code block by wrapping the code snippet between three backticks on both sides like so:\n\n\`\`\`\nconsole.log("Hello World, this is a code block.")\n\`\`\`\n\nThis markdown previewer was built with React and uses the \`Marked.js\` library. Find the \`Marked.js\` documentation [here](https://marked.js.org/).
`;

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  maxWidth: "100%",
  width: "100%"
};

const previewStyle = {
  height: "100%",
  textAlign: "left",
  padding: ".2em 1em",
}

export default App;
