import {Link} from "react-router-dom"
import "./LocationItem.css"

function LocationItem({location}) {
    const {id, name, city, state, number_of_seats, image_url} = location
    
    return(
        <div className="location-item">
            <h1>{name}</h1>
            <p>Location: {city}, {state}</p>
            <p>Capacity: {number_of_seats}</p>
            <Link to={`/Locations/${id}`}><p>More Info</p></Link>
            <img src={image_url} alt={name}></img>
            {/* <br></br>
            <Link to={`/Locations/${id}`}><p>More Info</p></Link> */}
        </div>
    )
}

export default LocationItem;