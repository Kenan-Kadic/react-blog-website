import "./sidebar.css"

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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia necessitatibus mollitia 
                    quo quam ipsum perferendis cum assumenda nobis reiciendis itaque quas, architecto laudantium 
                    expedita sit nostrum molestias. Saepe, officia natus.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>                       
                        <li className="sidebarListItem">Work</li>                     
                        <li className="sidebarListItem">Humor</li>                       
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Employment Oppertunities</li>                        
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
