import React from "react";
// import Nav from "./Nav";

function Home({setIsAuthenticated, setUser, user}) {

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
    <div class="home">
      <p>
        <h4 className="header"> {`Welcome Bulls Fans 👋`} </h4>
        <img src="https://www.nba.com/bulls/sites/bulls/files/benny-flag-1600x900.jpg"></img>
      </p>
    </div>
  );
}

export default Home;