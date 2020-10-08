import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>

        <div style={containerStyle} className="container">
          <div className="col">
            <h2>Editor</h2>
            <div className="mark-input">
              <textarea name="" id="editor" rows="10"></textarea>
            </div>
          </div>
          <div className="col">
            <h2>Previewer</h2>
            <div id="preview"></div>
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
