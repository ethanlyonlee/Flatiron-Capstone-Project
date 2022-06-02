import {Link} from 'react-router-dom'
import { useState } from 'react'
import "./GameItem.css"

function GameItem({game, user}){
    const {game_name, date_time, price, location} = game
    const [ticketBought, setTicketBought] = useState(false)

    function handleBuy(e) {
        const ticket = {
            user_id: user.id,
            game_id: game.id
        }
        
        fetch("/tickets",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        }).then(() => setTicketBought(true))
        window.confirm("Thank you for your purchase!")
    }
        

    return(
        <div className="game-item">
            {/* <Link to={`/Teams/${team.id}`} className="home-game-team-link"><h1 className="team-name">{team.name}</h1></Link> */}
            <p className="game_name">{game_name}</p>
            <br/>
            <p className="date_time">Date: {date_time}</p>
            <section className='location'><p className="location">Arena:</p><Link to={`/Locations/${location.id}`} className="home-game-location-link"><p className="location">{location.name}</p></Link><p className="location">- {location.city}, {location.state}</p></section>
            <p className="price">Ticket Price: ${price}</p>
            {user ? <div className='buy-bought-div'><button id='buy-button' onClick={(e) => handleBuy(e)}>Add Ticket</button>{ticketBought ? <p>Added. Click for more.</p> : null}</div>          
            : <Link to='/Login' className='cannot-buy-link'> <button id='cannot-buy-button'>Ticket Center</button></Link>
            }
        </div>
    )
}

export default GameItem;