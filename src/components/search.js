import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div id="search-wrapper">
        <input
          id="q"
          aria-hidden="true"
          autoComplete="off"
          name="q"
          placeholder="Search Google or type a URL"
          onChange={this.props.onChange}
        />
        <p>Keyword: {this.props.keyword}</p>
        <p>A: {this.props.a}</p>
      </div>
    );
  }
}

export default Search;
