import "./post.scss"
import { Link } from "react-router-dom";
export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Work </span>
                <span className="postCat">Medicine </span>
            </div>
            <span className="postTitle">
                <Link className="link" to="/singlePost">Nurses with burnout: A major problem that continues as nurse shortages worsen Nationwide.
                </Link>
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        
        <p className="postDesc">
        <Link className="link" to="/singlePost">
        Nurses and other front-line health care workers across the state and nation are feeling deeply stressed out and overwhelemed on there job,
        and companies are now wondering what can be done to address this issue. 
        With some hospitals losing more than 50 percent of their staff in the last year, staffing shortages are expected to continue. One of the main reasons for these shortages is the fact that nurses feel burned 
        out while performing their job. This feeling of burnout has worsened lately, due to a pandemic that has dragged on for years now with no official 
        end in sight.
        </Link>
        </p>
        
        </div>
            
        );
}
