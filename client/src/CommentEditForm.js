import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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
    <>
    <h1 className="new-trip-form-title">Edit Your Comment</h1>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newCommentFieldset">
            <label className="" htmlFor="game_id">
           Game:
            </label>
            <select
            type="dropdown"
            className="dropdown"
            name="concert_id"
            id="concert_id"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            >
           <option value= "1">Chicago Bulls @ Golden State Warriors</option>
            <option value= "2">Chicago Bulls @ Miami Heat</option>
            <option value= "3">Chicago Bulls @ Brooklyn Nets</option>
            <option value= "4">Chicago Bulls @ Milwaukee Bucks</option>
            <option value= "5">Chicago Bulls @ New York Knicks</option>
            </select>
        </fieldset>


        <fieldset className="newCommentFieldset">
          <label className="" htmlFor="content">
            Comment:
          </label>
          <input
            type="text"
            className="input"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </fieldset>

        <button
          class="com-btn"
          type="submit"
        >
          Update
        </button>
        
      </form>
    </>
  );
}

export default CommentEditForm;