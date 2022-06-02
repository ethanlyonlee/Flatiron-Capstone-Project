import {useEffect, useState} from 'react'
import LocationItem from './LocationItem'
import './Locations.css'

function Locations(){
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('/locations')
        .then(res => res.json())
        .then(locationData => setLocations(locationData))
    },[])

    const renderLocations = locations.map(location => 
    <LocationItem key={location.id} location={location}/>)

    return(
        <div>
            <h1 id='locations-page-title'>Arenas</h1>
            {renderLocations}
        </div>
    )
}
export default Locations;