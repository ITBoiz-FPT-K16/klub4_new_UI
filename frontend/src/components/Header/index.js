import "./style.css";
import { Link } from "react-router-dom";
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
import Groups from "../../svg/group";

const Header = () => {
  const color = "#65676b";
  const { user } = useSelector((user) => ({ ...user }));
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const allMenu = useRef(null);
  const userMenu = useRef(null);
  useClickOutside(allMenu, () => {
    setShowAllMenu(false);
  });
  useClickOutside(userMenu, () => {
    setShowUserMenu(false);
  });
  return (
    <header>
      <div className="header_left">
        <Link to={"/"} className="logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search1" onClick={() => setShowSearchMenu(true)}>
          <Search color={color} />
          <input
            type="text"
            placeholder="Search something"
            className="hide_input"
          />
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      )}
      <div className="header_middle">
        <Link to={"/"} className="middle_icon hover1">
          <HomeActive />
        </Link>
        <Link to={"/funds"} className="middle_icon hover1">
          <Funds />
        </Link>
        <Link to={"/group"} className="middle_icon hover1">
          <Groups />
          <div className="middle_notifications">9+</div>
        </Link>
        <Link to={"/"} className="middle_icon hover1">
          <Market />
        </Link>
        <Link to={"/"} className="middle_icon hover1">
          <Gaming />
        </Link>
      </div>
      <div className="header_right">
        <Link to={"/profile"} className="profile_link hover1">
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
        <div
          className={`circle_icon hover1  ${showAllMenu && "active_header"}`}
          ref={allMenu}
        >
          <div onClick={() => setShowAllMenu(!showAllMenu)}>
            <div>
              <Menu style={{ transform: "translateY(3px)" }} />
            </div>
          </div>
          {showAllMenu && <AllMenu />}
        </div>
        <div className="circle_icon hover1">
          <Messenger />
        </div>
        <div className="circle_icon hover1">
          <Notifications />
          <div className="right_notifications">5</div>
        </div>
        <div
          className={`circle_icon hover1  ${showUserMenu && "active_header"}`}
          ref={userMenu}
        >
          <div onClick={() => setShowUserMenu((prev) => !prev)}>
            <ArrowDown />
          </div>
          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
};
export default Header;
