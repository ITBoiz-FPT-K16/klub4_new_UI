import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import "./style.css";
import { Avatar } from "@mui/material";
const RightHome = () => {
    const color = "#65676b";
    const user = useSelector((state) => state.state.auth.currentUser);
    return (
        <div className="right_home">
            <div className="contacts_wrap">
                <div className="contacts_header">
                    <div className="contacts_header_left">User profile</div>
                </div>
                <div className="splitter"></div>
            </div>
            <div>
                <div className="user-profile__card">
                    <div
                        className="userImage"
                        style={{
                            backgroundImage: `url(${user.coverImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="avatar rounded-full w-16 h-16">
                            <Avatar
                                alt="klub4 logo"
                                sx={{ width: 100, height: 100 }}
                                src={user?.avatar}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RightHome;
