import TeamsList from "./TeamsList";
import "./TeamsList.css"

function Teams({teams}){
    const renderTeams = teams.sort((teamsA, teamsB) => (teamsA.name) - (teamsB.name))
        .map(team => <TeamsList key={team.id} team={team}/>)

    return(
        <section id="team_section">
        <h2 id="teamTitle">Teams</h2>
        {renderTeams}
        </section>
    )
}
export default Teams;