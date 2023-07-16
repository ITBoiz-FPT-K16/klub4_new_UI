import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/Inputs/LoginInput/LoginInput";
import { useState } from "react";
import * as Yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../redux/authSlice";
import { toast } from "react-toastify";
import { clubs } from "../../data/clubs";
import { events } from "../../data/event";
import { members } from "../../data/member";
import { posts } from "../../data/posts";
import { users } from "../../data/users";
import { setClub } from "../../redux/clubSlice";
import { setPost } from "../../redux/postSlice";
import { setMember } from "../../redux/memberSlice";
import { setEvent } from "../../redux/eventSlice";

const LoginForm = ({ setVisible }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginInfos = {
        email: "",
        password: "",
    };
    const [login, setLogin] = useState(loginInfos);
    const { email, password } = login;
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const loginValidation = Yup.object().shape({
        email: Yup.string()
            .required("Email address is required")
            .email("Must be a valid email"),
        password: Yup.string().required("Password is required"),
    });

    const loginSubmit = async () => {
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        console.log("user", user);

        if (user) {
            dispatch(setAuth(user));
            console.log("clubs be for set", clubs);
            dispatch(setPost(posts));

            dispatch(setEvent(events));

            navigate("/");
            toast.success("Login success");
        } else {
            console.log("login failed");
            toast.error("Email or password is incorrect");
        }
    };
    return (
        <div className="login_wrap">
            <div className="login_1">
                <img src="../../icons/facebook.svg" alt="" />
                <span>
                    Facebook helps you connect and share with the people in your
                    life
                </span>
            </div>
            <div className="login_2">
                <div className="login_2_wrap">
                    <Formik
                        enableReinitialize
                        initialValues={{
                            email,
                            password,
                        }}
                        validationSchema={loginValidation}
                        onSubmit={() => {
                            loginSubmit();
                        }}
                    >
                        <Form>
                            <LoginInput
                                name="email"
                                type="text"
                                placeholder="Email address"
                                onChange={handleLoginChange}
                            />
                            <LoginInput
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleLoginChange}
                                bottom
                            />
                            <button type="submit" className="blue_btn">
                                Log in
                            </button>
                        </Form>
                    </Formik>
                    <Link to="/reset" className="forgot_password">
                        Forgot password ?
                    </Link>
                    <div className="sign_splitter"></div>
                    <DotLoader color="black" loading={loading} size={30} />
                    <div className="error_text">{error}</div>
                    <div className="success_text">{success}</div>
                    <button
                        className="blue_btn open_signup"
                        onClick={() => setVisible(true)}
                    >
                        create account
                    </button>
                </div>
                <Link to="/" className="sign_extra">
                    <b>Create a page </b>
                    for a celebrity,brand or business
                </Link>
            </div>
        </div>
    );
};
export default LoginForm;
