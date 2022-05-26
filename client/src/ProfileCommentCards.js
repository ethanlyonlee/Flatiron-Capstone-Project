import React from "react";
import { useState } from "react";

function ProfileCommentCards({ review, user, setRefetch, refetch, setUserReviews, userReviews }) {
  const [editContent, setEditContent] = useState(false);
  const { rating, review_text, movie, id } = review;
  const { title, overview, poster_path, release_date, vote_average } = movie;
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  function handleDeleteComment() {
    fetch(`comments/${id}`,{
      method: 'DELETE',
    });
    setRefetch(!refetch);
  }

  function handleEditReview() {
    const editedReview = document.getElementById("edited_review_text").value;
    const editedRating = document.getElementById("edited_review_rating").value;
    const edited_review_text = {
      review_text: editedReview,
      rating: editedRating,
    };
    fetch(`comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(edited_review_text),
    })
      .then((res) => res.json())
      .then((data) => setUserReviews([data]));
    // setRefetch(!refetch);
    setEditModal(!editModal);
  }
  function handleCloseWindowEdit() {
    setEditModal(!editModal);
  }

  return (
    <>
      <div className="ReviewCards">
        <img src={IMG_API + poster_path} alt={title} className="photo" />
        <div className="MovieStats">
          <h1 className="MovieTitle">{title}</h1>
          <p>Average Rating: {vote_average}</p>
          <p>Released: {release_date}</p>
          <p>synopsis: {overview}</p>
          <p>
            {user.username}'s Review: {review_text}
          </p>
          <p>Rating: {rating}</p>
        </div>
        <button onClick={handleDeleteComment}>🗑️</button>
        <button onClick={handleCloseWindowEdit}>Edit Review</button>
      </div>
      {editModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <p className="review-title">Edit your review for {title}</p>
              <input
                placeholder="Write your new review here"
                id="edited_review_text"
              ></input>
              <input
                placeholder="Your New Rating"
                id="edited_review_rating"
              ></input>
              <button className="close-modal" onClick={handleEditReview}>
                Submit
              </button>
              <button onClick={handleCloseWindowEdit}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileCommentCards;
