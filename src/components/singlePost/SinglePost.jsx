import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=600" 
                alt=""
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                        <div className="singlePostDelete">
                           <i class="far fa-edit"></i> 
                           <i class="far fa-trash-alt"></i>
                        </div>
                    </div>
                </h1>
            </div>
        </div>
    )
}
