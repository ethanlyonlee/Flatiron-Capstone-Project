import React from "react";
import { Link } from 'react-router-dom';
import GameComments from "./GameComments";
import {useState, useEffect} from "react"
import CommentForm from './CommentForm'

function GameCard({ key, id, name, image, venue, date, time, comments_game }) {
  const [comments, setComments] = useState([false]);
  
  function handleFeedback(event) {
    event.preventDefault();
    setComments(!comments);
  }
  console.log(id)

  
  // const gameComments = <GameComments id={id} allGameComments={comments_game}/>


  return (
    <>
    <section className="container">
        <div key={key} class="con-card">
          <img class="img-single" src={image} alt={name} />
          <h2 class="title">{name}</h2>
                <div class="con">
                  <p>Date: {date}</p>
                  <p>Time: {time}</p>
                  <p>Venue: {venue}</p>
                  <Link to={`/tickets`}><button class="button-85">Buy tickets</button></Link><br></br>
                  <button onClick={handleFeedback}>Feedback</button>
                  {/* {comments? gameComments : null} */}
                  <GameComments id={id} allGameComments={comments_game}/>
                  {/* <Link to={`/comments`}><button class="button-85">Your thoughts</button></Link><br></br> */}

                </div>
                {/* <CommentForm game_id={id} /> */}
        </div>
    </section>
    </>
  );
}

export default GameCard;

