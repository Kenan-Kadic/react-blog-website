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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia necessitatibus mollitia 
                    quo quam ipsum perferendis cum assumenda nobis reiciendis itaque quas, architecto laudantium 
                    adipisicing elit. Nisi inventore magnam repudiandae alias quam iusto et, nemo velit esse! Sit, 
                    officiis. Quis sunt deleniti nam at, voluptatibus consequatur quasi officia. Lorem ipsum dolor
                     sit amet consectetur. <div className="endingTxt"> Adipisicing elit earum dolores inventore ducimus fugiat quasi culpa alias, 
                     cum eum ut voluptatem quaerat accusantium commodi deleniti laborum cupiditate ullam blanditiis? 
                     Cupiditate, veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas itaque 
                     quidem, earum hic ad inventore quis sint eum deserunt eos a. Consectetur explicabo ut nostrum 
                     doloremque, qui reprehenderit ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Veniam asperiores ad sit iure provident nam. Delectus cumque sint veritatis pariatur soluta ad, 
                     fugit ex, natus commodi blanditiis eveniet molestias recusandae! Lorem ipsum dolor sit amet 
                     consectetur adipisicing elit. Consequuntur et hic enim laudantium unde impedit dicta vero beatae 
                     voluptate. Asperiores quaerat reprehenderit labore sit recusandae magni id tempore.</div>
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
