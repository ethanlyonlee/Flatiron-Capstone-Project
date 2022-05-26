import React from "react";
import { Link } from 'react-router-dom';

function ItemCard({ key, id, name, price, image}) {

  return (
    <section className="container">
        <div key={key} class="con-card">
          <h2 class="title">{name}</h2>
          <p>Price: {price}</p>
        
                <div class="con">
     <Link to={`/items/${id}`}><button class="button-85">Add to cart</button></Link><br></br>
     <img class="img-single" src={image} alt={name} />
                  {/* <Link to={`/comments`}><button button class="button-85">Comment</button></Link> */}
                </div>
        </div>  
    </section>
   
  );
}

export default ItemCard;
