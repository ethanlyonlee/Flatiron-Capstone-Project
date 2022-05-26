import React from 'react';
import { useEffect, useState } from "react";
import SearchGame from "./SearchGame";
import GameList from "./GameList";
// import CommentCard from './CommentCard';
// import CommentForm from './CommentForm';
// import CommentList from "./CommentList";

function Game({renderGames, allGameComments, games}) {
    console.log(allGameComments);
    const [query, setQuery] = useState("");
    // const [comments, setComments] = useState
    // const [search, setSearch] = useState(false);






    const filterGames = games.filter((game) => {
      return game.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <main>
      <div className="container">
      {/* <SearchGame setQuery={setQuery}/> */}
      <GameList games={filterGames} renderGames={renderGames} allGameComments={allGameComments}/> 
      <div games={games}> </div>
      </div>
      </main>
    );
  }
  
  export default Game;