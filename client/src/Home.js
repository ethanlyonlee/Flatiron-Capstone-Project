import "./Home.css";
import React from "react";

function Home(){
    
return(
    <div className="home-container">
        <video src="/videos/nba.mp4" autoPlay loop muted ></video>
        {/* <h1>Road to the Final</h1> */}
        {/* <p>Which team are you rooting for?</p> */}
    </div>
);
}

export default Home;