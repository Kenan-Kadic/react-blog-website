import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-snapchat-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/"> HOME</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                        
                    </li>
                    </ul>
            </div>
            <div className="topRight">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
