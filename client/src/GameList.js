import React from "react";
import GameCard from "./GameCard";

function GameList({games, allGameComments}) {
    const renderGames = games.map((game)=>(
      <GameCard key={game.id} id={game.id} name={game.name} image={game.image} venue={game.venue} date={game.date} time={game.time} comments_game={game.comments}/>
      ));

return (
      <ul className='games'>
      {renderGames}
      </ul>
    );
  }
  
  export default GameList;

