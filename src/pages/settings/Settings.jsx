import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img 
                src="https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="" />
                <label htmlFor="fileInput">
               <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input 
                id="fileInput"
                type="file" 
                style={{ display: "none"}}
                />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Kenan" name="name" />
            <label>Email</label>
            <input type="email" placeholder="ken.kadic@outlook.com" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            <button className="settingsSubmitButton" type="submit">
            Update
            </button>
            </form>
        </div>
         <Sidebar/>
    </div>
    );
}
