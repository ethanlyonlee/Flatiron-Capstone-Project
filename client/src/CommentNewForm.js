import React, { useState } from 'react';
import './CommentItem.css'

function CommentNewForm({addComment, setCommentData, userId}) {
  const [content, setContent] = useState();
  // const [user_id, setUser_Id] = useState();
  const [game_id, setGame_Id] = useState();
  // const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = (e) => {
        // e.preventDefault();
    addComment({
      content: content,
      user_id: userId,
      game_id: game_id
    })
    window.confirm("Thank you for your submission!")
  };
  
    return (
        <div className="comment-item">
      <h1>Your comments?</h1>
      <form 
      onSubmit={handleSubmit}
      >

        <div className="comment-item">
          <p>Select a Game:</p>
            <select
            type="dropdown"
            name="game_id"
            id="game_id"
            value={game_id}
            onChange={(e) => setGame_Id(e.target.value)}
            >
            <option value="">Select a Game </option>
            <option value= "1">Golden State Warriors @ Chicago Bulls</option>
            <option value= "2">Boston Celtics @ Golden State Warriors</option>
            <option value= "3">Miami Heat @ Boston Celtics</option>
            <option value= "4">Dallas Mavericks @ Miami Heat</option>
            <option value= "5">Phoenix Suns @ Dallas Mavericks</option>
            <option value= "6">Chicago Bulls @ Phoenix Suns</option>
            </select>
        </div>

        <div >
          <p>Comment:</p>
          <input
            type="text"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="comment-item">
        <button
          type="submit"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
    );
}


export default CommentNewForm;