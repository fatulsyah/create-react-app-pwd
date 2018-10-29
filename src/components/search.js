import React from "react";

const Search = props => {
  return (
    <div id="search-wrapper">
      <input
        id="q"
        aria-hidden="true"
        autoComplete="off"
        name="q"
        placeholder="Search Google or type a URL"
        onChange={props.onChange}
      />
      <p>Keyword: {props.keyword}</p>
    </div>
  );
};

export default Search;
