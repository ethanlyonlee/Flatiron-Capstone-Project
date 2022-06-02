import {Link} from 'react-router-dom'
import "./TeamsList.css"

function TeamsList({team}){
    const {id, name, image_url} = team

    return(
        <div className="teams-list">
            <br></br>
            <img src={image_url} alt={name}></img>
            <h1>{name}</h1>
            <br></br>
            <Link to={`/Teams/${id}`}><p>Team Info</p></Link>
        </div>
    )
}

export default TeamsList;