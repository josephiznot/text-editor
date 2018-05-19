import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { userInput: "", showHTML: false, updateInput: "" };

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
    return (
      <div className="App">
        <main>
          <textarea
            name="userInput"
            value={this.state.userInput}
            onChange={e => this.userType(e)}
          />
          <div className="window-container">
            <div className="local-host">
              <div>Joes cool app</div>
            </div>
            <div
              className="fake-window"
              dangerouslySetInnerHTML={this.createWindow()}
            />
          </div>
        </main>

        <button onClick={this.showHTML}>Run code</button>
      </div>
    );
  }
}

export default App;
