import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    // this.setState is asynchronous call
    // so dont expect state to be updated after setting the state
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
