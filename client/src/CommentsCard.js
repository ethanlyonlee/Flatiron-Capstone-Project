import React from 'react';
import { Link } from 'react-router-dom';

function CommentsCard({id, game, content, username, game_id, comment, deleteComment}) {
   
    return (
      <>
      {/* <Navbar /> */}
      <section className="container-con">
        
          <div key={id} className="card">
            <h2 class="card-head"> {username} </h2>
              
            <p class="card-sub">Game: </p>
            <h3 class="card-stuff"> {game} </h3>

            <p class="card-sub"> Comment: </p>
              <h3 class="card-stuff">{content}</h3>

          </div> 

          <div class="com-card-btn-con">
           <button class="com-card-btn" onClick={() => deleteComment(id)}>Delete Comment</button>
           <br></br>
           <Link to={`/comments/${id}/edit`}><button class="com-card-btn" >Edit Comment</button></Link>
          </div>
      </section>
      </>
    );
  }
  
  export default CommentsCard;