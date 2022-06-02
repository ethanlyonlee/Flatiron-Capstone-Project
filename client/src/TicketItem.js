import {useState} from 'react'
import './TicketItem.css'

function TicketItem({game, ticketCount, user}) {

    const [numTickets, setNumTickets] = useState(ticketCount)
    // numTickets.value.min = 0
    
    function handleBuy(e) {
        const ticket = {
            user_id: user.id,
            game_id: game.id
        }

        fetch("/tickets",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        })
        .then(res => res.json())
        .then(boughtTicket => {setNumTickets(numTickets+1)
            console.log(boughtTicket)})
    }
    
  function handleDelete(e) {
        fetch(`/games/${game.id}`,{
            method:"DELETE"
        }).then(() => setNumTickets(numTickets-1))
    }

    return(
        <div className='ticket-item'>
            <div className='ticket-game-info'>
                <h3>{game.game_name}</h3>
                <h3>{game.location.name} - {game.location.city}, {game.location.state}</h3>
                <h3>{game.date_time}</h3>
            </div>
            <div className="ticket-buy-delete">
                <button className='ticket-buy-button' onClick={(e) => handleBuy(e)}>Add More</button>
                <button className='ticket-delete-button' onClick={(e) => handleDelete(e)}>Delete</button>
                <h3>{numTickets} ticket(s) purchased</h3>
            </div>
        </div>
    )
}

export default TicketItem