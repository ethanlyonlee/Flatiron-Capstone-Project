import React from 'react';
import { useEffect, useState } from "react";
import Search from "./Search";
import GameList from "./GameList";


function GameHomePage({renderGames}) {
    const [games, setGames] = useState([]);
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      fetch(`/games`)
        .then((r) => r.json())
        .then(setGames);
    }, []);

    const filterGames = games.filter((game) => {
      return game.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <section className="container">
      <Search setQuery={setQuery}/>
      <GameList games={filterGames} renderGames={renderGames}/>
      </section>
    );
  }
  
  export default GameHomePage;