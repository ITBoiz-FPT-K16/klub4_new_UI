import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { left } from "../../../data/home";
import { ArrowDown1 } from "../../../svg";
import LeftLink from "./LeftLink";
import Shortcut from "./Shortcut";
import { useSelector } from "react-redux";
import { members } from "../../../data/member";
import { clubs } from "../../../data/clubs";
import "./style.css";
const HomeLeft = ({ user }) => {
    const [clubUserJoined, setClubUserJoined] = useState([]);
    console.log("members>>", members);

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
                            key={i}
                            img={club?.avatarImage}
                            text={club?.clubName}
                        />
                    );
                })}

            {/* {left.slice(0, 8).map((link, i) => {
                return (
                    <LeftLink
                        key={i}
                        img={link.img}
                        text={link.text}
                        notification={link.notification}
                    />
                );
            })}
            {!visible && (
                <div
                    className="left_link hover2"
                    onClick={() => setVisible(true)}
                >
                    <div className="small_circle">
                        <ArrowDown1 />
                    </div>
                    <span>See More</span>
                </div>
            )}
            {visible && (
                <div className="more_left">
                    {left.slice(8, left.length).map((link, i) => {
                        return (
                            <LeftLink
                                key={i}
                                img={link.img}
                                text={link.text}
                                notification={link.notification}
                            />
                        );
                    })}
                    <div
                        className="left_link hover2 "
                        onClick={() => setVisible(false)}
                    >
                        <div className="small_circle rotate360">
                            <ArrowDown1 />
                        </div>
                        <span>Show Less</span>
                    </div>
                </div>
            )} */}
            <div className="splitter"></div>
            <div className="shortcut">
                <div className="heading">Your shortcuts</div>
                <div className="edit_shortcut">Edit</div>
            </div>
            <div className="shortcut_list">
                <Shortcut
                    link="https://www.instagram.com/mr.rj___93/"
                    img="../../images/insta.png"
                    name="My Instagram"
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
