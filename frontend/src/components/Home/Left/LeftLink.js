const LeftLink = ({ img, text, notification }) => {
    return (
        <div className="left_link hover:bg-gray-300">
            <img src={img} alt="" />
            {notification !== undefined ? (
                <div className="col">
                    <div className="col1">{text}</div>
                    <div className="col2">{notification}</div>
                </div>
            ) : (
                <span>{text}</span>
            )}
        </div>
    );
};
export default LeftLink;
