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
                My name is Tamra and I am a Surgical ICU Nurse working in the St. Louis, MO area. I have been a nurse for 8 years
                and there is nothing I love more than to take good care of my patients. Aside from working in ICU, I also have 2 
                years experience as a Neuro Nurse, where I have addressed multiple types of stroke and stroke related topics.
                </p>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">CATEGORIES</span>
                    <ul className="aboutList">
                        <li className="aboutListItem">Life</li>                       
                        <li className="aboutListItem">Work</li>                     
                        <li className="aboutListItem">Medicine</li>                       
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
