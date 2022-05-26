import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from "./Navbar";

function GameCard({key, id, name, image, date, time, venue}) {
   
    return (
      <>
      {/* <Navbar /> */}
      <section className="container">
          <div key={key} class="con-card">
            <img class="img-single" src={image} alt={name} />
            <h2 class="title">{name}</h2>
                  <div class="con">
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Venue: {venue}</p>
                    <Link to={`/games/${id}`}><button class="button-85">See More</button></Link><br></br>
                    <Link to={`/comments`}><button button class="button-85">Comment</button></Link>
                  </div>
          </div>
         
      </section>
      </>
    );
  }
  
  export default GameCard;