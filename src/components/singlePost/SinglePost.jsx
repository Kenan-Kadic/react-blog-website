import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.pexels.com/photos/3791136/pexels-photo-3791136.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"  
                alt=""
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                Nurses with burnout: A major problem that continues as nurse shortages worsen Nationwide.
                    <div className="singlePostEdit">
                           <i className="singlePostIcon far fa-edit"></i> 
                           <i class="singlePostIcon far fa-trash-alt"></i>
                        </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Kenan</b></span>                                        
                    <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Nurses and other front-line health care workers across the state and nation are 
            feeling deeply stressed out and overwhelemed on there job,and companies are now wondering what can be done to 
            address this issue.  With some hospitals losing more than 50 percent of their staff in the last year, staffing shortages are expected to continue. One of the main reasons for these shortages is the fact that nurses feel burned 
            out while performing their job. This feeling of burnout has worsened lately, due to a pandemic that has dragged on for years now with no official 
            end in sight. The crises is expected to worsen in the upcoming years, and there is no official consensus on how this issue should be resolved.</p>
            <p className="singlePostSecondDesc">Some people thought it was simply a problem of pay, and if they increased the pay things would automatically get better. But with many hospitals increasing
            their pay in the last few years, it is sad to see that the situation has not changed at all. "If anything, the situation has gotten worse", one nurse from St. Louis who
            spoke to us anonymously stated. "It is more than just a problem of pay", she said, as nurses are leaving due to the stress that is involved with their job. Many hospitals
            are now considering coping education and other ways of addressing the large amounts of stress that nurses deal with every day. Until this situation is fully
            addressed, it is expected that instances of burnout and nurse shortages are going to continue with no end in sight right now. Still, many nurses hope
            for a better future in the upcoming years as the nation heals.
            </p>
          </div>
        </div>
    )
}
