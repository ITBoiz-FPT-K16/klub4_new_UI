import React from "react";
import Header from "../../components/Header";
import HomeLeft from "../../components/Home/Left";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { posts } from "../../data/posts";
import Post from "../../components/post";
import { clubs } from "../../data/clubs";
import { Avatar, Button } from "@mui/material";
import logo from "../../assets/images/logo.png";
const ClubPosts = () => {
    const user = useSelector((state) => state.state.auth.currentUser);
    console.log("user>>>", user);
    const { clubId } = useParams();
    console.log("clubId>>>", clubId);
    const club = clubs.find((club) => club._id === clubId);

    const thisClubPosts = posts.filter((post) => post.clubId === clubId);
    console.log("thisClubPosts>>>", thisClubPosts);

    return (
        <>
            <Header user={user} />
            <div className="grid grid-cols-8">
                <div className="col-span-2">
                    <HomeLeft user={user} />
                </div>
                <div className="col-span-4 pt-20">
                    {thisClubPosts.map((post, index) => {
                        return (
                            <div className="flex justify-center">
                                <Post key={index} post={post} user={user} />
                            </div>
                        );
                    })}
                </div>
                <div className="col-span-2 relative">
                    <div className="fixed top-24 ">
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
                                    <h1 className="text-3xl">
                                        {club.clubName}
                                    </h1>
                                </div>
                                <div className="card-desc my-2">
                                    {club.desc}
                                </div>
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
        </>
    );
};

export default ClubPosts;
