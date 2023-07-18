import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import HomeLeft from "../../components/Home/Left";
import RightHome from "../../components/Home/Right";
import SendVerification from "../../components/Home/sendVerification";
import Funds from "../../components/fund";
import "./Fund.css";

const FundsPage = ({ setVisible, posts }) => {
  const middle = useRef(null);
  const { user } = useSelector((state) => ({ ...state }));
  const [height, setHeight] = useState();
  const funds = [
    {
      id: 1,
      name: "First Fund",
      description: "This is a fund for Manchester United",
      price: 9.9,
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
        <div className="posts">
          {funds.map((fund) => {
            return <Funds fund={fund} />;
          })}
        </div>
      </div>
      <RightHome user={user} />
    </div>
  );
};
export default FundsPage;
