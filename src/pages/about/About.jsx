import "./about.css"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="aboutItem">
                <span className="aboutTitle">ABOUT ME</span>
                <img
                src="https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=175&w=400"
                alt=""
        />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia necessitatibus mollitia 
                    quo quam ipsum perferendis cum assumenda nobis reiciendis itaque quas, architecto laudantium 
                    expedita sit nostrum molestias. Saepe, officia natus.
                </p>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">CATEGORIES</span>
                    <ul className="aboutList">
                        <li className="aboutListItem">Life</li>                       
                        <li className="aboutListItem">Work</li>                     
                        <li className="aboutListItem">Humor</li>                       
                        <li className="aboutListItem">Tech</li>
                        <li className="aboutListItem">Listings</li>                        
                        <li className="aboutListItem">Fun</li>                           
                    </ul>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">FOLLOW US</span>
                    <div className="aboutSocial">
                    <i className="aboutIcon fab fa-facebook-square"></i>
                    <i className="aboutIcon fab fa-twitter-square"></i>
                    <i className="aboutIcon fab fa-snapchat-square"></i>
                    <i className="aboutIcon fab fa-instagram-square"></i>
            </div>
            </div>
            
        </div>
    )
}
