import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  
                alt=""
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur.
                    <div className="singlePostEdit">
                           <i className="singlePostIcon far fa-edit"></i> 
                           <i class="singlePostIcon far fa-trash-alt"></i>
                        </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Kenan</b></span>                                        
                    <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. A iure quaerat voluptatibus 
                dolorum numquam assumenda placeat harum pariatur omnis hic recusandae perferendis, 
                aperiam, tenetur sit soluta sint! Molestias, alias cupiditate. Lorem ipsum dolor sit 
                amet consectetur adipisicing elit. Nisi delectus reiciendis ut odio quis vitae aliquid 
                voluptate! Ab, aliquam neque amet quia, et vitae quidem perferendis, eum vel maxime 
                consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim inventore 
                tempore nesciunt soluta optio incidunt laborum accusantium, quo quisquam facere? Voluptatum 
                illum laboriosam fugit quidem. Provident ipsum perspiciatis beatae? Lorem ipsum dolor, sit 
                amet consectetur adipisicing elit. Magni non rerum fugiat eaque maxime dolorem odit nostrum 
                facere, esse dicta consectetur doloremque beatae modi voluptatum praesentium quos laboriosam
                , error quidem.</p>
          </div>
        </div>
    )
}
