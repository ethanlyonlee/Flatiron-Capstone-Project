import React from "react";
import { Link } from 'react-router-dom';

function CommentCard({ key, id, game_id, name, content}) {

  return (
    <>
    <section className="container">
        <div key={key} class="con-card">
          {/* <img class="img-single" src={image} alt={name} /> */}
          {/* <h2 class="title">{name}</h2> */}
                {/* <div class="con"> */}
                <p>" {content} "</p>
                {/* <p>Game: {name}</p> */}
                    <button class="button-85">👍</button>
                    <button class="button-85">👎</button>
                  <Link to={`/comments`}><button button class="button-85">Delete</button></Link>
                </div>
        {/* </div> */}
       
    </section>
    </>
  );
}

export default CommentCard;

