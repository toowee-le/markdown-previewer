import React, { Component } from "react";
import Editor from "./components/Editor";
import Highlight from "react-highlight.js";
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
        <h1>Markdown Previewer</h1>

        <div className="markdown-container">
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
      </div>
    );
  }
}

const placeholder = `
  # Hello Dev!
  ---
  ## Welcome to my markdown previewer. Give it a try by editing the editor.

  > Markdown is a lightweight markup language that you can use to add formatting elements to plaintext documents. It was created in 2004 by John Gruber and is now one of the world's most popular markup languages.

  * Type some markdown on the left
  * See HTML in the right
  * **Cool right?**
  
  ![Gif](https://media.giphy.com/media/MFYewrNPPkUzUUKVXa/giphy.gif)

  You can also include a code block by wrapping the code snippet between three backticks on both sides.

  \`\`\` 
  // Basic syntax of writing a React class component
  class MyComponent extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>
          <h1>Hello World!</h1>
        </div>
      )
    }
  }
  ReactDOM.render(<MyComponent />, document.getElementbyId('root'))
  \`\`\`

  This markdown previewer was built with React and uses the \`Marked.js\` library. Find the \`Marked.js\` documentation [here](https://marked.js.org/).
`;

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
};

export default App;
