import React from "react"
import {Link} from "react-router-dom"
import "./Nav.css";

function Nav({setIsAuthenticated, isAuthenticated, setUser, user}){

    function handleClick() {
        fetch('/logout', {method: 'DELETE'})
        .then(() => {
          setUser(null)
          setIsAuthenticated(false)
        })
    }

return (
    <div >
        <nav>
            <Link to="/" className="nav-link" >
            {/* <img src="https://thelab.bleacherreport.com/nbaemoji/img/emoji/large/ChampionshipTrohpy.png" alt="logo" className="logo" /> */}
                <span> Home 🏠</span>
            </Link>
            <Link to="/Teams" className="nav-link">
                <span> Team 🎽</span>
            </Link>
            <Link to="/Locations" className="nav-link">
                <span> Arena 🏛️</span>
            </Link>
            <Link to="/Games" className="nav-link">
                <span> Ticket 🎫</span>
            </Link>

            {user ?
            <div id='logged-in'> 
                <span id='welcome'><Link to= '/Profile' className="nav-link" id="profile-link">Greetings, {user.first_name} 👋</Link>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                </span>
                {/* <Link to= '/Tickets'className="nav-link" id="my-tickets">
                    <span>Ticket 🎫 </span>
                </Link> */}
                <span>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                </span>
                <Link to='/Comments' className="nav-link" id="my-comments">
                    <span>Comment 📝</span>
                </Link>
                <span>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                </span>
                <Link to="/" className="nav-link" id="logout" onClick={handleClick}>
                    <span>Log Out</span>
                </Link> 

            </div>
            :
            <div id='logged-out'>
                <Link to='/Login' className="nav-link" id="login">
                    <span>Log In</span>
                </Link>
                <p id='or'>
                    &nbsp;&nbsp;&nbsp;
                    or
                    &nbsp;&nbsp;&nbsp;
                    </p>
                <Link to='/Signup' className="nav-link" id="signup">
                    <span>Sign Up</span>
                </Link>
            </div>
            }
        </nav>
    </div>
);
}
export default Nav;