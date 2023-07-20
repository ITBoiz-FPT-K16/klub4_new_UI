import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ButtonGroup } from "@mui/material";
import { clubs } from "../../data/clubs";
const Profile = () => {
    const user = useSelector((state) => state.state.auth.currentUser);
    const image = clubs[0].coverImage;
    console.log("user", user);
    return (
        <div
            className="bg-white rounded-lg shadow-lg "
            style={{ hover: "none", width: "550px" }}
        >
            <div className="post_header">
                <div className="w-full">
                    <div className="">
                        <Box sx={{}} noValidate autoComplete="off">
                            <div
                                className="rounded-t-lg"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    height: "200px",
                                    position: "relative",
                                    width: "100%",
                                }}
                            >
                                <div>
                                    <img
                                        src={user.avatar}
                                        alt="profile"
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            borderRadius: 200,
                                            position: "absolute",
                                            bottom: "-100px",
                                            left: "5%",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="" style={{ marginTop: "100px" }}>
                                <div className="grid grid-cols-2 my-5">
                                    <div className="flex  items-center text-lg ">
                                        <strong className="mr-2">Name: </strong>
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="flex  text-lg  ">
                                        <strong className="mr-2">
                                            Email:{" "}
                                        </strong>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 my-5">
                                    <div className="flex  items-center text-lg ">
                                        <strong className="mr-2">
                                            Birthday:{" "}
                                        </strong>
                                        <p>{user.DOB}</p>
                                    </div>
                                    <div className="flex  text-lg  ">
                                        <strong className="mr-2">
                                            School:{" "}
                                        </strong>
                                        <p>{"FPT University"}</p>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <Button variant="outlined">
                                        Edit Your Profile
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
