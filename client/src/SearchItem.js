import React from "react";

function SearchItem({ setQuery }) {
 
  return (
    <div className="searchbar">
      <h4> Search </h4>
      <div class="search-box">
      <input
        className="fas"
        type="text"
        id="search"
        placeholder=" Type an item to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
    </div>
  );
}

export default SearchItem;
