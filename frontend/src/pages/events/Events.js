import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import HomeLeft from "../../components/Home/Left";
import RightHome from "../../components/Home/Right";
import Event from "../../components/event";
import "./Event.css";

const EventPage = ({ setVisible, posts }) => {
  const middle = useRef(null);
  const { user } = useSelector((state) => ({ ...state }));
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(middle.current.clientHeight);
  }, []);

  return (
    <div className="home" style={{ height: `${height + 150}px` }}>
      <Header />
      <HomeLeft user={user} />
      <div className="home_middle" ref={middle}>
        <Event />
      </div>
      <RightHome user={user} />
    </div>
  );
};
export default EventPage;
