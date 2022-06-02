import React from "react";

function TeamPageShow({game}) {
    return (
        <div className="render-game">
            <p>{game.game_name}</p>
            <p>Date: {game.date_time}</p>
            <p>Arena: {game.location.name}</p>
            <p>Ticket Price: ${game.price}</p>
        </div>
    )
}

export default TeamPageShow;