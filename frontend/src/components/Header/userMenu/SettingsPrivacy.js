import React, { useEffect } from "react";
import { clubs } from "../../../data/clubs";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const SettingsPrivacy = ({ setVisible }) => {
    const [clubsOfUser, setClubsOfUser] = React.useState({});
    const user = useSelector((state) => state.state.auth.currentUser);
    const findClubsOfUser = () => {
        return clubs.find((club) => club.manager === user._id);
    };

    useEffect(() => {
        const club = findClubsOfUser();
        setClubsOfUser(club);
    }, [clubsOfUser]);
    console.log("clubsOfUser", clubsOfUser);

    return (
        <div className="aboslute_wrap">
            <div className="absolute_wrap_header">
                <div className="circle hover1" onClick={() => setVisible(0)}>
                    <i className="arrow_back_icon"></i>
                </div>
                Your club
            </div>
            {clubsOfUser && Object.keys(clubsOfUser).length > 0 && (
                <div className="menu_item hover3">
                    <div className="small_circle">
                        <Avatar src={clubsOfUser?.avatarImage} />
                    </div>
                    <span>{clubsOfUser.clubName}</span>
                </div>
            )}

            {clubsOfUser && Object.keys(clubsOfUser).length === 0 && (
                <div className="menu_item hover3">
                    <span>Create your club</span>
                </div>
            )}
        </div>
    );
};
export default SettingsPrivacy;
