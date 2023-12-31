import "./style.css";
import { Link, NavLink, useParams } from "react-router-dom";
import {
    ArrowDown,
    Friends,
    Gaming,
    HomeActive,
    Logo,
    Market,
    Menu,
    Messenger,
    Notifications,
    Search,
    Watch,
} from "../../svg";
import { useSelector } from "react-redux";
import SearchMenu from "./SearchMenu";
import { useRef, useState } from "react";
import AllMenu from "./AllMenu";
import UserMenu from "./userMenu";
import useClickOutside from "../../helpers/ClickOutside";
import Funds from "../../svg/fund";
import Events from "../../svg/event";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Header = () => {
    const color = "#65676b";
    // const { user } = useSelector((user) => ({ ...user }));
    const user = useSelector((state) => state.state.auth.currentUser);
    const [showSearchMenu, setShowSearchMenu] = useState(false);
    const [showAllMenu, setShowAllMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const allMenu = useRef(null);
    const userMenu = useRef(null);
    const path = window.location.pathname;
    console.log("path in header>>>", path);
    const { clubId } = useParams();
    useClickOutside(allMenu, () => {
        setShowAllMenu(false);
    });
    useClickOutside(userMenu, () => {
        setShowUserMenu(false);
    });
    const route = window.location.pathname;
    console.log("route", route);

    return (
        <header className="flex justify-between items-center px-5 py-2">
            <div className="flex justify-center items-center">
                <Link to={"/"} className="logo mr-2">
                    <div className="circle">
                        <Logo />
                    </div>
                </Link>
                <div
                    className="search search1"
                    onClick={() => setShowSearchMenu(true)}
                >
                    <Search color={color} />
                    <input
                        type="text"
                        placeholder="Search something"
                        className="hide_input"
                    />
                </div>
            </div>
            {showSearchMenu && (
                <SearchMenu
                    color={color}
                    setShowSearchMenu={setShowSearchMenu}
                />
            )}

            {!route.match("/allClubs") &&
                !route.match("/profile") &&
                !route.match("/$") && (
                    <div className=" flex">
                        <NavLink
                            to={`/club/${clubId}/posts`}
                            active={route.match("/post")}
                            className="middle_icon hover1 mx-1"
                        >
                            <HomeActive />
                        </NavLink>
                        <NavLink
                            to={`/club/${clubId}/funds`}
                            className="middle_icon hover1 mx-1"
                        >
                            <Funds />
                        </NavLink>
                        <NavLink
                            to={`/club/${clubId}/events`}
                            className="middle_icon hover1 mx-1"
                        >
                            <Events />
                            <div className="middle_notifications">9+</div>
                        </NavLink>
                    </div>
                )}

            <div className="flex">
                <div className="px-28"></div>
                <div
                    className={`circle_icon hover1  ${
                        showUserMenu && "active_header"
                    }`}
                    ref={userMenu}
                >
                    <div onClick={() => setShowUserMenu((prev) => !prev)}>
                        <MoreVertIcon />
                    </div>
                    {showUserMenu && <UserMenu user={user} />}
                </div>
            </div>
        </header>
    );
};
export default Header;
