import { Link, NavLink } from "react-router-dom";

const Shortcut = ({ link, img, name }) => {
    return (
        <NavLink to={link} className="shortcut_item my-1">
            <img src={img} alt="" />
            <span>{name}</span>
        </NavLink>
    );
};
export default Shortcut;
