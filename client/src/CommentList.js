import React from "react";
import CommentCard from "./CommentCard";


function CommentList({comments}) {
    const renderComments = comments.map((comment)=>(
      <CommentCard key={comment.id} id={comment.id} game_id={comment.game_id} content={comment.content}/>
      ));

    return (
      <ul className='comments'>
      {renderComments}
      </ul>
    );
  }
  
  export default CommentList;
