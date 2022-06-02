import { Link } from "react-router-dom";
import "./CommentItem.css";

function CommentItem({id, game, content, username, deleteComment}) {

    return (
        <section>
            <div className="comment-item">
                <p>{game}</p>
                <p>{username} said:</p>
                <p>{content}</p>
                {/* <Link to={`/Comments/${id}`}><p>More</p></Link> */}
            </div>

            <div>
                <Link to={`/comments/${id}/edit`}>
                    <button>Edit Comment</button>
                </Link>
                <br></br>
                <button onClick={() => deleteComment(id)}>Delete</button>
                {/* <br></br>
                <Link to={`/comments/${id}/edit`}>
                    <button>Edit Comment</button>
                </Link> */}
            </div>
        </section>
    );
}

export default CommentItem;
