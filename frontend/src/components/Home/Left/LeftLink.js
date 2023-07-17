import { NavLink } from "react-router-dom";

const LeftLink = ({ clubId, img, text, notification }) => {
    return (
        <NavLink
            to={`/club/${clubId}/posts`}
            className="left_link hover:bg-gray-300"
        >
            <img src={img} alt="" />
            {notification !== undefined ? (
                <div className="col">
                    <div className="col1">{text}</div>
                    <div className="col2">{notification}</div>
                </div>
            ) : (
                <span>{text}</span>
            )}
        </NavLink>
    );
};
export default LeftLink;
