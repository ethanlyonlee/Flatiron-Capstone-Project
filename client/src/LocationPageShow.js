function LocationPageShow({game}) {
    return(
        <div className="render-game">
            <p>{game.game_name}</p>
            <p>Date: {game.date_time}</p>
            {/* <p>Home Team: {game.team.name}</p> */}
            <p>Ticket Price: ${game.price}</p>
        </div>
    )
}

export default LocationPageShow;