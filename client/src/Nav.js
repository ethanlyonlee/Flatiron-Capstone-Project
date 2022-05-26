import { Link } from "react-router-dom";
import React from "react";
// import Home from "./Home";

function Nav({setIsAuthenticated, user, setUser}) {

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
}
    
  return (
    <header>
      <div className="grid">
          <nav className="navigation">
          <h1 className="Tittle"> The Home of the Chicago Bulls </h1>
            <Link to="/"> Home |</Link>
            <Link to="/games"> Games |</Link>
            {/* <Link to="/calendar"> Calendar |</Link> */}
            <Link to="/items"> Shop |</Link>
            <Link to="/tickets"> Tickets |</Link>
            <Link to="/comments"> Comments |</Link>
            <Link to="/profile"> Profile </Link>
            {/* <Link to="/signin"> User Center </Link> */}
            {/* <Link to="/signup"> Sign Up </Link>   */}
          <button onClick={logout} className="SaveButton">Logout</button>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
