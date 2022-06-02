// import {useEffect, useState} from 'react'
import { useRouteMatch } from 'react-router-dom';
import CommentItem from './CommentItem';
import CommentNewForm from './CommentNewForm';
import './Comments.css'

function Comments({commentData, setCommentData, userId, addComment}) {
    // const history = useHistory();
    // const location = useLocation();
    const match = useRouteMatch();

    function deleteComment(id) {
        fetch(`/comments/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            setCommentData((commentData) =>
            commentData.filter((commentData) => commentData.id !== id)
            );
          }
        });
        window.confirm("Your comment has been deleted!")
      }

    const renderComments = commentData.map((comment) => <CommentItem comment={commentData} id={comment.id} content={comment.content} username={comment.user.username} game={comment.game.game_name} deleteComment={deleteComment} />)
    
    return(
    <>
    <div>
      <CommentNewForm userId={userId} addComment={addComment} setCommentData={setCommentData} comment={commentData.find((comment) => comment.id === parseInt(match.params.id))}/>
    </div>
    <div className="comment-item">
      <h1 id="fans-voices">Fans' voices:</h1>
       {renderComments}
        {/* {commentData.map((comment) => <CommentItem comment={commentData} id={comment.id} content={comment.content} username={comment.user.username} game={comment.game.name} deleteComment={deleteComment} />)} */}
    </div>
    </>
  );
}

export default Comments;
