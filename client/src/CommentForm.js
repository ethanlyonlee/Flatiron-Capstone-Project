import React, { useState } from "react";

function CommentForm({ commentData, addComment, setCommentData }) {
  const [newGame, setNewGame] = useState("");

  const [newContent, setNewContent] = useState("");

  function handleNewGame(event) {
    setNewGame(event.target.value)
  }

  function handleNewContent(event) {
    setNewContent(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank You For Your Submission!")
    // window.location.href='/tea-shop'
    // window.open('/tea-shop');

    const newReview = {
      game: newGame,
      content: newContent
    };

    fetch("/comments",{
      method : "POST",
      headers : { "Content-Type": "application/json",
      Accepts: "application/json",},
      body: JSON.stringify(newReview),
    })
    .then((res) => res.json())
    .then((newReview) => {
      setCommentData(commentData.concat(newReview))
    }
    )

  return (
    <div className="CommentForm">
      <h4>We would love to hear from you! </h4>
      <br/>

      <form onSubmit={handleSubmit}>
        <select onChange={handleNewGame}>
        <option>Select a Game</option> 
        <option>Chicago Bulls @ Golden State Warriors</option><option>Chicago Bulls @ Miami Heat</option><option>Chicago Bulls @ Brooklyn Nets</option><option>Chicago Bulls @ Milwaukee Bucks</option><option>Chicago Bulls @ New York Knicks</option>
        </select>
            
        <textarea onChange={handleNewContent} type="text" placeholder="Leave your thoughts" />
    
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}}

export default CommentForm;
