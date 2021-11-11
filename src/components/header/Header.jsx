import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & JS </span>
                <span className="headerTitleLg">NURSE BLOG</span>
        </div>
        <img
            className="headerImg"
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4386466.jpg&fm=jpg"
            alt=""
            />
        </div>
    );
}
