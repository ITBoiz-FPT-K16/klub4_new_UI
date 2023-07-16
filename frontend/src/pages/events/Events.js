import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost";
import Header from "../../components/Header";
import HomeLeft from "../../components/Home/Left";
import RightHome from "../../components/Home/Right";
import SendVerification from "../../components/Home/sendVerification";
import Event from "../../components/event";
import "./Event.css";

const EventPage = ({ setVisible, posts }) => {
  const middle = useRef(null);
  const { user } = useSelector((state) => ({ ...state }));
  const [height, setHeight] = useState();
  const events = [
    {
      id: 1,
      name: "First Fund",
      description: "This is a fund for Manchester United",
      price: 9.9,
    },
    {
      id: 2,
      name: "Second Fund",
      description: "This is a fund for FA Cup",
      price: 10,
    },
  ];
  useEffect(() => {
    setHeight(middle.current.clientHeight);
  }, []);

  return (
    <div className="home" style={{ height: `${height + 150}px` }}>
      <Header />
      <HomeLeft user={user} />
      <div className="home_middle" ref={middle}>
        {user.verified === false && <SendVerification user={user} />}
        <CreatePost user={user} setVisible={setVisible} />
        <div className="posts">
          <h2>This is Event Page</h2>
          {events.map((event) => {
            return <Event key={event.id} event={event} />;
          })}
        </div>
      </div>
      <RightHome user={user} />
    </div>
  );
};
export default EventPage;
