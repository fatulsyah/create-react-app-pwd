import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./containers/Home";
import Article from "./containers/Article";
import axios from "axios";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.a = "Initial";
    this.state = {
      keyword: "",
      nama: "Andi",
      usia: 21,
      title: "",
      movies: [],
      posts: [],
      karyawan: [],
      count: 0
    };

    // var a = {
    //   key: "value",
    //   "key-one": "value",
    //   key_one: "value"
    // };
    // a.key;
    // a["key-one"];
  }

  componentWillMount() {
    console.log(this.state.nama);
  }

  componentDidMount() {
    axios
      .get("https://facebook.github.io/react-native/movies.json")
      .then(getData => {
        const title = getData.data.title;
        const movies = getData.data.movies;
        this.setState({
          title: title,
          movies: movies
        });
      });

    // get data posts
    axios.get("https://jsonplaceholder.typicode.com/posts").then(posts => {
      this.setState({
        posts: posts.data
      });
    });

    // get data karyawan from json-server
    // axios.get(`url-api-server`)
    axios.get("http://localhost:3000/karyawan").then(karyawan => {
      // {
      //   config: {}
      //   data: {
      //   karyawan: []
      // }
      //   headers: {}
      //   request: {}
      // }
      this.setState({
        karyawan: karyawan.data
      });
    });
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Current State: ", this.state.nama);
    console.log("Next State: ", nextState.nama);
  }

  componentDidUpdate() {
    console.log("Component DID update");
  }

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  handleKeyUp = () => {
    // let nama = e.target.value;
    // let nama = this.search.current.value;
    let nama = this.refs.nama.value;
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

  renderPosts = () => {
    const { posts } = this.state;
    console.log(posts);
    return posts.length
      ? posts.map((post, index) => {
          return (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          );
        })
      : null;
  };

  render() {
    const { movies, nama, karyawan } = this.state;
    // this.state.nama
    // this.state.movies

    return (
      <React.Fragment>
        <Navbar />
        <div>
          <center>
            <h1>{this.props.count}</h1>
            <div>
              <button onClick={this.decrement}>Kurang </button>
              <span> </span>
              <button onClick={this.increment}>Tambah </button>
            </div>
          </center>
        </div>
        <Header name={nama} click={() => this.click("Budi")} />
        Karyawan:
        {karyawan.length
          ? karyawan.map(val => {
              return `${val.nama}, `;
            })
          : null}
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{this.renderPosts()}</tbody>
        </table>
        Movies:
        {movies.length
          ? movies.map(val => {
              return `${val.title}, `; // val.title + ", "
            })
          : "Null"}
        <Route path="/" component={Home} />
        <Route path="/article" component={Article} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(App);
