import "./post.scss"
import { Link } from "react-router-dom";

const Post = props => {
    return (
        <div className="post">
            <img 
            className="postImg"
            src={props.postImage} 
            alt="" 
            />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Work </span>
                <span className="postCat">Medicine </span>
            </div>
            <span className="postTitle">
                <Link className="link" to="/singlePost">{props.postTitle}
                </Link>
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        
        <p className="postDesc">
        <Link className="link" to="/singlePost">{props.postText}
        </Link>
        </p>
        
        </div>
            
        );
}

export default Post;