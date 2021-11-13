import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="aboutItem">
                <span className="aboutTitle">ABOUT ME</span>
                <img
                src="https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=175&w=400"
                alt=""
        />
                <p className="initialTxt">
                     My name is Amra and I am a Surgical ICU Nurse working in the St. Louis, MO area. This text here is only 
                     put for deomstration purposes so I am currently not able to share a lot of personal information about 
                     myself, but should you employ the services of the web developer who created this page, you 
                     are more than welcome to write whatever you see fit here.<div className="endingTxt"></div>
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
