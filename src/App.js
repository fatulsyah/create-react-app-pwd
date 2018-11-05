import React, { Component } from "react";
import googleLogo from "./img/google-logo.png";
import "./App.css";
import Search from "./components/search";
import About from "./About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.a = "Initial";
    this.state = {
      keyword: "",
      nama: "Andi",
      usia: 21
    };

    this.search = React.createRef();

    // var a = {
    //   key: "value",
    //   "key-one": "value",
    //   key_one: "value"
    // };
    // a.key;
    // a["key-one"];
  }

  handleKeyUp = e => {
    // let keyword = e.target.value;
    let nama = this.search.current.value;
    this.setState({
      // keyword: keyword,
      nama: nama
    });
  };

  login = udahLogIn => {
    if (udahLogIn) {
      return "Anda sudah Login";
    }
    return "Anda belum Login";
  };

  click = siapa => {
    this.setState({
      nama: siapa
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header name={this.state.nama} click={() => this.click("Budi")} />

        <div className="App">
          <header className="App-header">
            <img src={googleLogo} className="App-logo" alt="logo" />
            <About />
            <input ref={this.search} onChange={this.handleKeyUp} />
            <p>Halo {this.state.nama}!</p>
            {/* <Search
              a={this.a}
              keyword={this.state.keyword}
              onChange={this.handleKeyUp}
            /> */}
            <h1>Selamat Datang!</h1>
            <p>{this.login(true)}</p>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
