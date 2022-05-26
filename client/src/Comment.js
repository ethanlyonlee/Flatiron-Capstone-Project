import React from 'react';
import { useEffect, useState } from "react";
import CommentForm from './CommentForm';
import CommentList from "./CommentList";

function Comment({renderComments, addComment, user_id, game_id, setUser}) {
    const [comments, setComments] = useState([]);
    const [games, setGames] = useState([]);
    // const [query, setQuery] = useState("");
    // const [search, setSearch] = useState(false);

useEffect(() => {
  fetch(`/comments`)
    .then((res) => res.json())
    .then(data => setComments(data));
}, []);

useEffect(() => {
  fetch(`/games`)
    .then((res) => res.json())
    .then(data => setGames(data));
}, []);

    return (
      <main>
      <div className="container">
      <CommentList comments={comments} games={games} renderComments={renderComments}/>
      <CommentForm setUser={setUser} user_id={user_id} game_id={game_id} addComment={addComment} comments={comments} renderComments={renderComments}/>
      </div>
      </main>
    );
  }
  
  export default Comment;