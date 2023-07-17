import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import sampleImage from "../../assets/images/—Pngtree—3d green planet earth day_9026710.png";
import { Button } from "@mui/material";
import { clubs } from "../../data/clubs";
import { members } from "../../data/member";
import { useSelector } from "react-redux";
import HomeLeft from "../../components/Home/Left";

const AllClubs = () => {
    const user = useSelector((state) => state.state.auth.currentUser);
    const [clubUserJoined, setClubUserJoined] = useState([]);
    const getClubUserJoined = () => {
        const clubIdUserJoined = members.filter(
            (member) => member.userId === user._id
        );
        console.log("clubIdUserJoined", clubIdUserJoined);

        let clubsUserJoined = [];
        clubIdUserJoined.forEach((club) => {
            const clubUserJoined = clubs.find(
                (club1) => club1._id === club.clubId
            );
            clubsUserJoined.push(clubUserJoined);
        });

        setClubUserJoined(clubsUserJoined);
    };

    useEffect(() => {
        getClubUserJoined();
    }, []);

    console.log("clubUserJoined", clubUserJoined);

    return (
        <>
            <Header />;
            <div className="grid grid-cols-7">
                <div className="col-span-1">
                    {" "}
                    <HomeLeft user={user} />
                </div>
                <div className="col-span-6">
                    <div className="all-groups__wrapper p-10  mt-20  flex justify-center items-center cursor-pointer ">
                        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                            {clubs.map((club, index) => {
                                return (
                                    <div
                                        key={index}
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
                                        >
                                            {/* <img
                                        className="block"
                                        src={club.avatarImage}
                                    /> */}
                                        </div>

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
                                                {clubUserJoined.find(
                                                    (club1) =>
                                                        club1._id === club._id
                                                ) ? (
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                        disabled={true}
                                                    >
                                                        Joined
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                    >
                                                        Join Club
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllClubs;
