import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import LocationPageShow from './LocationPageShow';
import "./LocationPage.css"

function LocationPage() {
    const {id} = useParams();
    const [location, setLocation] = useState({})
    const [locationGames, setLocationGames] = useState([])

    useEffect(() => {
        fetch(`/locations/${id}`)
        .then(res => res.json())
        .then(locationData => {setLocation(locationData)
            setLocationGames(locationData.games)
        })
    }, [id])

    const renderGames = locationGames.map(game => <LocationPageShow key={game.id} game={game}/>)

    return(
        <div className='what'>
            <div className='location-page'>
                <img src={location.image_url} alt={location.name}></img>
                <h1>{location.name}</h1>
                <p>{location.city}, {location.state}</p>
                <p>Capacity: {location.number_of_seats}</p>
                <br></br>
                <a href={location.website_url}>More events at {location.name}</a>
            </div>
            <div className="upcoming-game" autoscroll="true">
                <h1>Upcoming Games at {location.name}:</h1>
                {renderGames}
            </div>
        </div>
    )
}

export default LocationPage;