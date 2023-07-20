import Profile from "../../components/profile";
import Header from "../../components/Header";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ProfileLeft from "../../components/profile/left";

const ProfilePage = () => {
    const middle = useRef(null);
    const user = useSelector((state) => state.state.auth.currentUser);
    const [height, setHeight] = useState();

    return (
        <div className="home" style={{ height: `${height + 150}px` }}>
            <Header />
            <ProfileLeft user={user} />
            <div className="home_middle" ref={middle}>
                <div className="posts">
                    <Profile />
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;
