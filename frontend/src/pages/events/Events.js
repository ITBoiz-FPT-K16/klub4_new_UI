import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import HomeLeft from "../../components/Home/Left";
import RightHome from "../../components/Home/Right";
import Event from "../../components/event";
import "./Event.css";
import logo from "../../assets/images/logo.png";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { clubs } from "../../data/clubs";

const EventPage = ({ setVisible, posts }) => {
    const clubId = useParams().clubId;
    const club = clubs.find((club) => club._id === clubId);
    const middle = useRef(null);
    const user = useSelector((state) => state.state.auth.currentUser);
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
            <div className="col-span-2 relative">
                <div className="fixed top-24 right-7 ">
                    <div className="flex items-center justify-center px-2 py-10 bg-white rounded-md mb-5 ">
                        <div className="mx-3">
                            {/* <Avatar alt="klub4 logo" src={logo} /> */}
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <h1 className="text-3xl">Klub4</h1>
                        </div>
                    </div>

                    <div
                        className="col-span-1 club-card bg-white rounded-lg gap-5 shadow-lg flex-col justify-center items-center"
                        style={{ width: "350px" }}
                    >
                        <div
                            className="club-card__image flex justify-center rounded-t-lg"
                            style={{
                                height: "300px",
                                width: "",
                                backgroundImage: `url(${club.avatarImage})`,
                                backgroundSize: "cover100%",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>

                        <div className="club-card__content p-3">
                            <div className="cart-title my-2">
                                <h1 className="text-3xl">{club.clubName}</h1>
                            </div>
                            <div className="card-desc my-2">{club.desc}</div>
                            <div className="card-action">
                                <Button variant="contained" color="error">
                                    Leave group
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EventPage;
