import axios from "axios";
import { Link} from "react-router-dom";
const SendEmail = ({ userInfos,email,error,setError,setLoading,setUserInfos,setVisible }) => {
  const sendEmail = async()=> {
    try{
      setLoading(true);
      const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/sendResetPasswordcode`,{email})
      setError('')
      setLoading(false)
      setVisible(2)
    }
    catch(error){
      setLoading(false)
      setError(error.response.data.message)
    }
  }
  return (
    <div className="reset_form dynamic_height">
      <div className="reset_form_header">Reset your paasword</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form_text">
            How do you want to receive the code to reset your paasword?
          </div>
          <label htmlFor="email">
            <input type="radio" name="email" id="email" checked readOnly />
            <div className="label_col">
              <span>Send Code via email</span>
              <span>{userInfos.email}</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={userInfos.picture} alt="" />
          <span>{userInfos.email}</span>
          <span>Facebook user</span>
        </div>
        </div>
        {error && <div className="error_text">{error}</div>}
        <div className="reset_form_btns">
          <Link to="/login" className="gray_btn">
            Not You?
          </Link>
          <button className="blue_btn" type="submit" onClick={sendEmail}>
            Continue
          </button>
      </div>
    </div>
  );
};
export default SendEmail;
