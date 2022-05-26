import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ProfileCommentCards from "./ProfileCommentCards";


function Profile({ user }) {
  const { id, username} = user;
  const [userComments, setUserComments] = useState([]);
  const [refetch, setRefetch] = useState(false);
  useEffect(getUserComments, [refetch]);

  function getUserComments() {
    fetch("/comments")
      .then((resp) => resp.json())
      .then((data) => setUserComments(data));
  }

  const currrentUserComments = userComments.filter(
    (comment) => comment.user.id === id
  );

  console.log(currrentUserComments);

  const displayingCommentCards = currrentUserComments.map((comment) => (

    <ProfileCommentCards />

  ));

  return (
    <>
      <div className="Profile">
        <div className="ProfileStats">
          {/* <h1 className="UserName">{user.username} </h1> */}
        </div>
        {displayingCommentCards}
      </div>
    </>
  );
}

export default Profile;
