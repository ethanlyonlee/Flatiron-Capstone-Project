import React, { useEffect, useState } from 'react';

function NewCommentForm({addComment, setCommentData}) {
    const [rating, setRating] = useState();
    const [content, setContent] = useState();
    const [user_id, setUser_Id] = useState();
    const [game_id, setGame_Id] = useState();
    const [formErrors, setFormErrors] = useState([]);


    const handleSubmit = async (e) => {
        // e.preventDefault();
    
        addComment({
          content,
          user_id,
          game_id
        })
      };

    //   function handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = {
    //       rating: rating,
    //       content: content,
    //       concert_id: concert_id,
    //       user_id: user_id,
    //     };
    //     console.log(JSON.stringify(formData))
    //     fetch("/comments", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }).then((r) => {
    //         console.log(r)
    //       if (r.ok) {
    //         r.json().then((newComment) => {
    //             console.log(newComment)
    //           addComment(newComment);
    //           setFormErrors([]);
    //         });
    //       } else {
    //         r.json().then((err) => setFormErrors(err.errors));
    //       }
    //     });
    //   }

    return (
        <>
      <h1 class="new-trip-form-title">We wanna hear your voice</h1>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newCommentFieldset">
            <label class="form-label" htmlFor="game_id">
            Game:
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="game_id"
            id="game_id"
            value={game_id}
            onChange={(e) => setGame_Id(e.target.value)}
            >
            <option value= "1">Chicago Bulls @ Golden State Warriors</option>
            <option value= "2">Chicago Bulls @ Miami Heat</option>
            <option value= "3">Chicago Bulls @ Brooklyn Nets</option>
            <option value= "4">Chicago Bulls @ Milwaukee Bucks</option>
            <option value= "5">Chicago Bulls @ New York Knicks</option>
            </select>
            
        </fieldset>
        <div>
        <fieldset className="newCommentFieldset">
          <label class="form-label" htmlFor="content">
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
          Submit
        </button>
        </div>
      </form>
    </>
  );
    
}

export default NewCommentForm;