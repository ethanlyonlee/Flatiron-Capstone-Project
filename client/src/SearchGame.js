import React from "react";

function SearchGame({ setQuery }) {
 
  return (
    <div className="searchbar">
      <h4> Search </h4>
      <div class="search-box">
      <input
        className="fas"
        type="text"
        id="search"
        placeholder=" Type a game to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
    </div>
  );
}

export default SearchGame;
