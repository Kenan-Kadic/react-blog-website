import "./sidebar.scss"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                src="https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=175&w=400"
                alt=""
        />
                <p>
                    My name is Tamra and I am a Surgical ICU Nurse working in the St. Louis, MO area. This text here is only put for deomstration purposes 
                    so I am currently not able to share a lot of personal information about myself, but should you employ the services of 
                    the web developer who created this page, you are more than welcome to write whatever you see fit here.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>                       
                        <li className="sidebarListItem">Work</li>                     
                        <li className="sidebarListItem">Humor</li>                       
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Listings</li>                        
                        <li className="sidebarListItem">Fun</li>                           
                    </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-snapchat-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
            
        </div>
    )
}
