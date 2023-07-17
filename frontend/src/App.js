import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Funds from "./pages/funding/Funds";
import Groups from "./pages/group/Groups";
import Events from "./pages/events/Events";

import Login from "./pages/login/Login";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import Activate from "./pages/home/Activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useSelector } from "react-redux";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import AllClubs from "./pages/allClubs/AllClubs";
import ClubPosts from "./pages/clubPosts/ClubPosts";

// function reducer(state, action) {
//     switch (action.type) {
//         case "POSTS_REQUEST":
//             return { ...state, loading: true, error: "" };
//         case "POSTS_SUCCESS":
//             return {
//                 ...state,
//                 loading: false,
//                 posts: action.payload,
//                 error: "",
//             };
//         case "POSTS_ERROR":
//             return { ...state, loading: false, error: action.payload };

//         default:
//             return state;
//     }
// }
function App() {
    const [visible, setVisible] = useState(false);
    const { user } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    return (
        <div className="App ">
            {visible && <CreatePostPopup setVisible={setVisible} user={user} />}
            <Routes>
                {/* <Route element={<LoggedInRoutes />}> */}
                <Route
                    exact
                    path="/"
                    element={<Home setVisible={setVisible} />}
                />
                <Route exact path="/allClubs" element={<AllClubs />} />
                <Route path="/club/:clubId" />
                <Route
                    exact
                    path="/club/:clubId/posts"
                    element={<ClubPosts />}
                />
                <Route exact path="/activate/:token" element={<Activate />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/funds" element={<Funds />} />
                <Route exact path="/group" element={<Groups />} />
                {/* </Route> */}
                {/* <Route element={<NotLoggedInRoutes />}> */}
                <Route exact path="/login" element={<Login />} />
                {/* </Route> */}
                {/* <Route exact path="/reset" element={<Reset />} /> */}
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default App;
