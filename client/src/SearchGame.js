import React from "react";
import "./Games.css"

function SearchGame({ setQuery, filterGames }) {
 
  return (
    <div className="game_section">
      <h2 id="gameTitle"> Find games </h2>
      <div class="games-wrapper">
      <input
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
