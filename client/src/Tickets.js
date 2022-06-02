import {useEffect, useState} from 'react'
import TicketItem from './TicketItem'
import './Tickets.css'

function Tickets({user}){
    const [games, setGames] = useState([])
    
    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(res => res.json())
        .then(gameData => setGames(gameData))
    },[user])

    const counts = {};
    for (const game of games) {
        counts[game.id] = counts[game.id] ? counts[game.id] + 1 : 1;
    }
    
    let uniqueGames = [...new Map(games.map((item) => [item["id"], item])).values()];
      
    const renderTickets = uniqueGames.map(game => <TicketItem key={game.id} user={user} game={game} ticketCount={counts[game.id]}/>)

    return(
        <div id='tickets-container'>
            {/* <h1 id='tickets-list-title'>Welcome to Ticket Center</h1> */}
            <div id='tickets-list'>
                {games.length === 0 ? <h1 id="cart">Your cart is empty</h1> : renderTickets }
            </div>
        </div>
    )
}

export default Tickets
