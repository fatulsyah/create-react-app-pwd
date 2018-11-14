import React, { Component } from "react";
import Search from "../components/search";
import About from "../About";
import googleLogo from "../img/google-logo.png";

class Home extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={googleLogo} className="App-logo" alt="logo" />
          <About />
          <input ref="nama" onChange={this.handleKeyUp} />
          <p>Halo {this.state.nama}!</p>
          <Search
            a={this.a}
            keyword={this.state.keyword}
            onChange={this.handleKeyUp}
          /> */}
        <h1>Selamat Datang!</h1>
        {/* <p>{this.login(true)}</p> */}
        {/* </header> */}
      </div>
    );
  }
}

export default Home;
