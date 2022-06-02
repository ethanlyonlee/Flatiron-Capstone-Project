import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import TeamPageShow from './TeamPageShow';
import "./TeamPage.css"

function TeamPage() {
    const {id} = useParams();
    const [team, setTeam] = useState({})
    const [teamGames, setTeamGames] = useState([])

    useEffect(() => {
        fetch(`/teams/${id}`)
        .then(res => res.json())
        .then(teamData => {
            setTeam(teamData)
            setTeamGames(teamData.games)
        })
    }, [id])

    // useEffect(() => {
    //     team.games && setTeamGames(team.games)
    // }, [team])

    const renderGames = teamGames.map(game => <TeamPageShow key={game.id} game={game}/>)

    return(
        <div className='background' id="team-page-box">
            <div className='team-page'>
                <img src={team.image_url} alt={`${team.name}`}></img>
                <h1>{team.name}</h1>
                <p>{team.about_info}</p>
                <a href={team.website_url}>{team.name}'s official website</a>
            </div>
            <div className='upcoming-game'>
                    <h1>{team.name}'s Upcoming Home Games:</h1>
                    {renderGames}
                    {/* <Link to={`/Teams/${team.id}`} className="home-game-team-link"><h1 className="team-name">{team.name}</h1></Link> */}
            </div>
        </div>
    )
}

export default TeamPage;