import { Dots, NewRoom, Search } from "../../../svg";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import "./style.css";
import { Avatar } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import CakeIcon from "@mui/icons-material/Cake";
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
                <div className="user-profile__card bg-white rounded-lg">
                    <div
                        className="userImage  relative rounded-t-lg"
                        style={{
                            backgroundImage: `url(${user.coverImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "150px",
                        }}
                    >
                        <div className="avatar rounded-full w-16 h-16 fixed top-56 right-62 ml-2">
                            <Avatar
                                alt="klub4 logo"
                                sx={{ width: 100, height: 100 }}
                                src={user?.avatar}
                            />
                        </div>
                    </div>

                    <div className="mt-20 px-2">
                        <div>
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                        </div>
                        <div className="flex items-center p-2">
                            {" "}
                            <SchoolIcon />{" "}
                            <span className="mx-2">
                                FPT University DaNang
                            </span>{" "}
                        </div>
                        <div className="flex items-center  p-2">
                            <HomeIcon />{" "}
                            <span className="mx-2"> Quang Nam, Viet Nam</span>
                        </div>
                        <div className="flex items-center  p-2">
                            <CakeIcon />{" "}
                            <span className="mx-2"> {user.DOB}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RightHome;
