import "./Games.css"
// import {useState} from "react";
import GameItem from "./GameItem"
// import SearchGame from "./SearchGame"

function Games({games, user}) {
    // const [query, setQuery] = useState("")
    // const renderGames = games.map((game)=>(
    //     <GameItem key={game.id} game={game} user={user} />
    //     ));

    const renderGames = games.sort((gameA, gameB) => (new Date(gameA.date_time)) - (new Date(gameB.date_time)))
        .map(game => <GameItem key={game.id} game={game} user={user}/>)
    
    // const filterGames = games.filter(game => {
    //     return game.name.toLowerCase().includes(query.toLowerCase());
    // });

    return (
        <section id="game_section">
            {/* <div className="wrapper">
                <div id="btnWrapper">
                    <a href="#gameTitle">
                        <button id="downBtn">ᐯ</button>
                    </a>
                </div>
            </div> */}
            <h2 id="gameTitle">Tickets</h2>
            <div className="games-wrapper">
                {/* <SearchGame setQuery={setQuery} filterGames={filterGames}/> */}
                {renderGames}
            </div>

        </section>
    );
}

export default Games;