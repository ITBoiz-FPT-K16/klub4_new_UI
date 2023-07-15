import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Cookies from "js-cookie";
import { useState } from "react";
import { Form, Formik } from "formik";
import LoginInput from "../../components/Inputs/LoginInput/LoginInput";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import ChangePassword from "./ChangePassword";
const Reset = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [userInfos, setUserInfos] = useState("");
  const [cnfrmPassword, setCnfrmPassword] = useState("");
  const [code, setCode] = useState();
  const logout = () => {
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <div className="reset">
      <div className="reset_header">
        <img src="../../../icons/facebook.svg" alt="" />
        {user ? (
          <div className="right_reset">
            <Link to="/profile">
              <img src={user.picture} alt="" />
            </Link>
            <button className="blue_btn" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="blue_btn">Login</button>
          </Link>
        )}
      </div>
      <div className="reset_wrap">
        {visible === 0 && (
          <SearchAccount
            setLoading={setLoading}
            email={email}
            error={error}
            setError={setError}
            setEmail={setEmail}
            setUserInfos={setUserInfos}
            setVisible={setVisible}
          />
        )}
        {visible === 1 && userInfos && (
          <SendEmail
          email={email}
            error={error}
            setError={setError}
            userInfos={userInfos}
            setUserInfos={setUserInfos}
            setVisible={setVisible}
            setLoading={setLoading}
          />
        )}
        {visible === 2 && (
          <CodeVerification
            user={user}
            code={code}
            error={error}
            setError={setError}
            setCode={setCode}
            loading={loading}
            userInfos={userInfos}
            setLoading={setLoading}
            setVisible={setVisible}
            email={email}
          />
        )}
        {visible === 3 && (
          <ChangePassword
            password={password}
            error={error}
            setError={setError}
            setPassword={setPassword}
            cnfrmPassword={cnfrmPassword}
            setCnfrmPassword={setCnfrmPassword}
            userInfos={userInfos}
            loading={loading}
            setLoading={setLoading}
            setVisible={setVisible}
          />
        )}
      </div>
    </div>
  );
};
export default Reset;
