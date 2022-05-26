import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Ticket({addComment, setCommentData}) {
    const [rating, setRating] = useState();
    const [content, setContent] = useState();
    const [user_id, setUser_Id] = useState();
    const [concert_id, setConcert_Id] = useState();
    const [formErrors, setFormErrors] = useState([]);
    let navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      alert("Thank You For Your Purchase!");
      navigate('/profile')
      // window.location.href='/profile'
    }

    return (
        <>
      <h4 class="new-trip-form-title">Ticket Office</h4>
      <form
        onSubmit={handleSubmit}
        className="editForm"
      >
        <fieldset className="newCommentFieldset">
            <label class="form-label" htmlFor="concert_id">
            Game:
            </label>
            <br></br>
            <select
            type="dropdown"
            className="dropdown"
            name="concert_id"
            id="concert_id"
            value={concert_id}
            onChange={(e) => setConcert_Id(e.target.value)}
            >
            <option>Select a Game</option> 
            <option value= "1">Chicago Bulls @ Golden State Warriors</option>
            <option value= "2">Chicago Bulls @ Miami Heat</option>
            <option value= "3">Chicago Bulls @ Brooklyn Nets</option>
            <option value= "4">Chicago Bulls @ Milwaukee Bucks</option>
            <option value= "5">Chicago Bulls @ New York Knicks</option>
            </select>
            
        </fieldset>
        <div>
        <fieldset className="newCommentFieldset">
          <label class="form-label" htmlFor="rating">
            Quantity:
          </label>
          <br></br>
          <select
            type="dropdown"
            className="dropdown"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
          <option value= "1">1</option>
          <option value= "2">2</option>
          <option value= "3">3</option>
          <option value= "4">4</option>
          <option value= "5">5</option>
          <option value= "6">6</option>
          <option value= "7">7</option>
          <option value= "8">8</option>
          <option value= "9">9</option>
          <option value= "10">10</option>
          </select>
        </fieldset>

        <button
          class="com-btn"
          type="submit"
        >
          Check Out
        </button>
        </div>
      </form>
    </>
  );
    
}

export default Ticket;