import { Link } from "react-router-dom";
import "./CommentItem.css";

function CommentItem({id, game, content, username, deleteComment}) {

    return (
        <section className="comment-item">
            <div className="comment-item">
                <p>{game}</p>
                <p>{username} said:</p>
                <p>{content}</p>
                {/* <Link to={`/Comments/${id}`}><p>More</p></Link> */}
            </div>

            <div className="comment-item">
                <button onClick={() => deleteComment(id)}>Delete Comment</button>
                <br></br>
                <Link to={`/comments/${id}/edit`}>
                    <button>Edit Comment</button>
                </Link>
            </div>
        </section>
    );
}

export default CommentItem;
