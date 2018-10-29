import React, { Component } from "react";
import googleLogo from "./img/google-logo.png";
import "./App.css";
import Search from "./components/search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      keyword: ""
    };
  }

  handleKeyUp = e => {
    let keyword = e.target.value;
    this.setState({
      keyword
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={googleLogo} className="App-logo" alt="logo" />
          <Search keyword={this.state.keyword} onChange={this.handleKeyUp} />
        </header>
      </div>
    );
  }
}

export default App;
