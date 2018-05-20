import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userInput:
      "<h1>Live Text Editor!</h1><br/><p>Click 'Run' to display the results</p>",
    showHTML: false,
    updateInput: ""
  };

  userType = e => {
    this.setState({ [e.target.name]: e.target.value, showHTML: false });
  };

  createWindow = () => {
    return {
      __html: `<body>${
        this.state.showHTML ? this.state.userInput : this.state.updateInput
      }</body>`
    };
  };
  showHTML = () => {
    this.setState({
      showHTML: !this.state.showHTML,
      updateInput: this.state.userInput
    });
  };
  render() {
    console.log(window);
    return (
      <div className="App">
        <main>
          <div className="window-container">
            <div className="nav-bar">
              <div className="index-html">
                <div>index.html</div>
              </div>
            </div>
            <textarea
              name="userInput"
              value={this.state.userInput}
              onChange={e => this.userType(e)}
            />
          </div>
          <div className="window-container">
            <div className="nav-bar">
              <div className="text-editor">
                <div>Text Editor</div>
              </div>
              <div className="url-container">http://localhost:3000/</div>
            </div>
            <div className="under-title">
              <div className="url-container" />
              <div
                className="fake-window"
                dangerouslySetInnerHTML={this.createWindow()}
              />
            </div>
          </div>
        </main>
        <button onClick={this.showHTML}>Run code</button>
      </div>
    );
  }
}

export default App;
