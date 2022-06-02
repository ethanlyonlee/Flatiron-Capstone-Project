import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./CommentEditForm.css";

function CommentEditForm({ comment = {}, updateComment }) {
  const [content, setContent] = useState(comment.content);
  const [game, setGame] = useState(comment.game_id);
  
  const {id} = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateComment(id, {
      content,
      game,
    });
  };

  useEffect(() => {
    setContent(comment.content);
    setGame(comment.game_id);
  }, [comment])

  return (
    <div id="edit-form-box">
    <h1 id="edit-h1">Edit Your Comment:</h1>
      <form
        onSubmit={handleSubmit}
        className="comment-item"
      >
            <label htmlFor="game_id">
            Game:
            </label>
            <select
            type="dropdown"
            name="game_id"
            id="game_id"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            >
            <option value="">Select a Game</option>
            <option value= "1">Golden State Warriors @ Chicago Bulls</option>
            <option value= "2">Boston Celtics @ Golden State Warriors</option>
            <option value= "3">Miami Heat @ Boston Celtics</option>
            <option value= "4">Dallas Mavericks @ Miami Heat</option>
            <option value= "5">Phoenix Suns @ Dallas Mavericks</option>
            <option value= "6">Chicago Bulls @ Phoenix Suns</option> 
            </select>
            
          <label htmlFor="content">
            Comment:
          </label>
          <input
            type="text"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />


        <button
            className="edit-button"
          type="submit"
        >
          Update
        </button>
        
      </form>
    </div>
  );
}

export default CommentEditForm;