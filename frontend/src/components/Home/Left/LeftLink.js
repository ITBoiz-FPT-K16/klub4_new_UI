import { useNavigate } from "react-router-dom";

const LeftLink = ({ img, text, idGroup, notification }) => {
  const navigate = useNavigate();

  return (
    <div
      className="left_link hover2"
      onClick={() => {
        navigate(`/groups`);
      }}
    >
      <img src={`../../../left/${img}.png`} alt="" />
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
