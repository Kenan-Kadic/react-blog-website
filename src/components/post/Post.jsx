import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Fun </span>
                <span className="postCat">Life </span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Saepe, voluptatum soluta neque quam officia voluptatem ab nemo 
            vitae quisquam et non excepturi animi cum cupiditate ipsa eligendi 
            facere iste sed!
        </p>
        </div>
            
        );
}
