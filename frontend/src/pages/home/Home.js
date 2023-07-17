import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost";
import Header from "../../components/Header";
import HomeLeft from "../../components/Home/Left";
import RightHome from "../../components/Home/Right";
import SendVerification from "../../components/Home/sendVerification";
import Post from "../../components/post";

import "./Home.css";
const Home = ({ setVisible, posts }) => {
    const postsOfAllClubs = useSelector((state) => state.state.post);
    const middle = useRef(null);
    const currentUser = useSelector((state) => state.state.auth.currentUser);
    const { user } = useSelector((state) => ({ ...state }));
    const [height, setHeight] = useState();
    console.log("current user in home", currentUser);

    // useEffect(() => {
    //     setHeight(middle.current.clientHeight);
    // }, []);

    return (
        <div className="">
            <Header />
            <HomeLeft user={currentUser} />
            <div className="home_middle" ref={middle}>
                {/* <CreatePost user={currentUser} setVisible={setVisible} /> */}
                <div className="posts">
                    {postsOfAllClubs.map((post) => {
                        return (
                            <Post
                                key={post._id}
                                post={post}
                                user={currentUser}
                            />
                        );
                    })}
                </div>
            </div>
            <RightHome user={currentUser} />
        </div>
    );
};
export default Home;
