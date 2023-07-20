import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { left } from "../../../data/home";
import { ArrowDown1 } from "../../../svg";
import LeftLink from "./LeftLink";
import Shortcut from "./Shortcut";
import { useSelector } from "react-redux";
import { members } from "../../../data/member";
import { clubs } from "../../../data/clubs";
import earthImage from "../../../assets/images/—Pngtree—3d green planet earth day_9026710.png";
import "./style.css";
const HomeLeft = ({ user }) => {
    const [clubUserJoined, setClubUserJoined] = useState([]);
    console.log("members>>", members);
    console.log("user in home left>>>", user);

    const getClubUserJoined = () => {
        const clubIdUserJoined = members.filter(
            (member) => member.userId === "64aeb4b4a050d44ea4219de0"
        );
        console.log("clubIdUserJoined", clubIdUserJoined);

        let clubsUserJoined = [];
        clubIdUserJoined.forEach((club) => {
            const clubUserJoined = clubs.find(
                (club1) => club1._id === club.clubId
            );
            clubsUserJoined.push(clubUserJoined);
        });

        setClubUserJoined(clubsUserJoined);
    };

    console.log("clubUserJoined", clubUserJoined);

    useEffect(() => {
        getClubUserJoined();
    }, []);
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
                <div className="heading">Club you joined</div>
                <div className="edit_shortcut">Edit</div>
            </div>
            {clubUserJoined.length > 0 &&
                clubUserJoined.map((club, i) => {
                    return (
                        <LeftLink
                            clubId={club?._id}
                            key={i}
                            img={club?.avatarImage}
                            text={club?.clubName}
                        />
                    );
                })}

            <div className="splitter"></div>
            <div className="shortcut">
                <div className="heading">Your shortcuts</div>
                <div className="edit_shortcut">Edit</div>
            </div>
            <div className="shortcut_list  hover:bg-gray-300 hover:rounded-lg">
                <Shortcut
                    link="/allClubs"
                    img={earthImage}
                    name="View all clubs"
                />
            </div>
            <div className="shortcut_list  hover:bg-gray-300 hover:rounded-lg">
                <Shortcut
                    link="/"
                    img={
                        "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png"
                    }
                    name="View all post"
                />
            </div>
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
export default HomeLeft;
