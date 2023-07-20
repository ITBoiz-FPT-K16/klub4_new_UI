import { useState } from "react";
import { Link } from "react-router-dom";
import LeftLink from "../Home/Left/LeftLink";
import "../Home/Left/style.css";

const ProfileLeft = ({ user }) => {
    const [clubUserJoined, setClubUserJoined] = useState([]);

    console.log("clubUserJoined", clubUserJoined);
    console.log("user in profile left", user);

    console.log("clubUserJoined", clubUserJoined);
    const [visible, setVisible] = useState(false);
    return (
        <div className="left_home scrollbar">
            <Link to={"/profile"} className="left_link hover2 ">
                <img src={user?.avatar} alt="" />
                <span>{user?.name}</span>
            </Link>
            <div className="splitter"></div>
            <div className="shortcut">
                <div className="heading">Profile Setting</div>
                <div className="edit_shortcut">Edit</div>
            </div>
            <div className="aboslute_wrap">
                <div className="menu_item hover3">
                    <div className="small_circle">
                        <i className="settings_filled_icon"></i>
                    </div>
                    <span>Settings</span>
                </div>
                <div className="menu_item hover3">
                    <div className="small_circle">
                        <i className="privacy_checkup_icon"></i>
                    </div>
                    <span>Privacy Checkup</span>
                </div>
                <div className="menu_item hover3">
                    <div className="small_circle">
                        <i className="privacy_shortcuts_icon"></i>
                    </div>
                    <span>Privacy Shortcuts</span>
                </div>
                <div className="menu_item hover3">
                    <div className="small_circle">
                        <i className="activity_log_icon"></i>
                    </div>
                    <span>Activity log</span>
                </div>
                <div className="menu_item hover3">
                    <div className="small_circle">
                        <i className="news_icon"></i>
                    </div>
                    <span>News Feed Preferences</span>
                </div>
                <div className="menu_item hover3">
                    <div className="small_circle">
                        <i className="language_icon"></i>
                    </div>
                    <span>Language</span>
                </div>
            </div>
            {clubUserJoined.length > 0 &&
                clubUserJoined.map((club, i) => {
                    return (
                        <LeftLink
                            key={i}
                            img={club?.avatarImage}
                            text={club?.clubName}
                        />
                    );
                })}
            <div
                className={`fb_copyright ${visible && "relative_fb_copyright"}`}
            >
                <Link to={"/"}>Privacy </Link>
                <span>. </span>
                <Link to={"/"}>Terms </Link>
                <span>. </span>
                <Link to={"/"}>Advertising </Link>
                <span>. </span>
                <Link to={"/"}>
                    Ad choices <i className="ad_choices_icon"></i>{" "}
                </Link>
                <span>. </span>
                <Link to={"/"}>Cookies </Link>
                <span>. </span>
                <Link to={"/"}>More </Link>
                <span>. </span> <br />
                Meta © 2022
            </div>
        </div>
    );
};
export default ProfileLeft;
