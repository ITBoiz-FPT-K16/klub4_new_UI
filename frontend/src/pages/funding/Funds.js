import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import HomeLeft from "../../components/Home/Left";
import RightHome from "../../components/Home/Right";
import SendVerification from "../../components/Home/sendVerification";
import Funds from "../../components/fund";
import "./Fund.css";
import { funds } from "../../data/fund";
import { useParams } from "react-router-dom";
import { clubs } from "../../data/clubs";
import { Link } from "react-router-dom";
import { Dots } from "../../svg";
import CreateComments from "../../components/post/CreateComments";
import vietQR from "../../assets/images/vietQR.png";
import { Button } from "@mui/material";
import logo from "../../assets/images/logo.png";
const FundsPage = ({ setVisible, posts }) => {
    const middle = useRef(null);
    const user = useSelector((state) => state.state.auth.currentUser);
    const [height, setHeight] = useState();
    const clubId = useParams().clubId;
    const club = clubs.find((club) => club._id === clubId);
    const clubFunds = funds.filter((fund) => fund.clubId === clubId);

    console.log("clubFunds", clubFunds);

    return (
        <div className="home" style={{ height: `${height + 150}px` }}>
            <Header />
            <HomeLeft user={user} />
            <div className="home_middle" ref={middle}>
                {clubFunds && clubFunds.length > 0 && (
                    <div>
                        {clubFunds.map((fund, index) => {
                            return (
                                <div>
                                    <div className="post mb-5">
                                        <div className="post_header">
                                            <Link className="post_header_left">
                                                <img
                                                    src={club.avatarImage}
                                                    alt=""
                                                />
                                                <div className="header_col">
                                                    <div className="post_profile_name">
                                                        {club.clubName}
                                                    </div>
                                                    <div className="post_profile_privacy_date">
                                                        {/* <Moment fromNow interval={30}>
                                        {post.time}
                                    </Moment> */}
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="post_header_right hover1">
                                                <Dots color="#828387" />
                                            </div>
                                        </div>

                                        <div className="post_text">
                                            {fund.fundDesc}
                                        </div>
                                        {fund.imageUrl && (
                                            <div
                                                className="post_image grid_1 p-1"
                                                style={{
                                                    backgroundImage: `url(${vietQR})`,
                                                    backgroundSize: "contain",
                                                    backgroundPosition:
                                                        "center",
                                                    backgroundRepeat:
                                                        "no-repeat",
                                                }}
                                            ></div>
                                        )}

                                        <div className="post_infos">
                                            <div className="reacts_count">
                                                <div className="reacts_count_imgs"></div>
                                                <div className="reacts_count_num"></div>
                                            </div>
                                            <div className="to_right">
                                                <div className="comments_count">
                                                    13 comments
                                                </div>
                                                <div className="share_count">
                                                    1 Share
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post_actions">
                                            <div
                                                className="post_action hover1"
                                                onMouseOver={() => {
                                                    setTimeout(() => {
                                                        setVisible(true);
                                                    }, 500);
                                                }}
                                                onMouseLeave={() => {
                                                    setTimeout(() => {
                                                        setVisible(false);
                                                    }, 500);
                                                }}
                                            >
                                                <i className="like_icon"></i>
                                                <span>Like</span>
                                            </div>
                                            <div className="post_action hover1">
                                                <i className="comment_icon"></i>
                                                <span>comment</span>
                                            </div>
                                            <div className="post_action hover1">
                                                <i className="share_icon"></i>
                                                <span>Share</span>
                                            </div>
                                        </div>
                                        <div className="comments_wrap">
                                            <div className="comments_order"></div>
                                            {/* <CreateComments user={user} /> */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
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
export default FundsPage;
