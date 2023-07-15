import { Form, Formik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginInput from "../../components/Inputs/LoginInput/LoginInput";
import * as Yup from 'yup'
import axios from 'axios'
const ChangePassword = ({password,error,setPassword,cnfrmPassword,userInfos,setError,loading,setLoading,setCnfrmPassword}) => {

  const navigate = useNavigate()
    const validatePassword = Yup.object({
        password: Yup.string()
      .required(
        "Enter a combination of six letters numbers and special characters such as (* and #)"
      )
      .min(6, "Password must be atleast 6 characters long")
      .max(16, "Password cannot be greater then 16 characters"),
      cnfrmPassword: Yup.string().required('Confirm your password').
      oneOf([Yup.ref('password')],'Password must match')
    })

    const {email} = userInfos
    const changePassword = async()=>{
      try{
        setLoading(true);
        await axios.post(`${process.env.REACT_APP_BACKEND_URI}/changePassword`,{email,password})
        setError('')
        setLoading(false)
        navigate('/')
      }
      catch(error){
        setLoading(false)
        setError(error.response.data.message)
      }
    }
  return (
    <div className="reset_form">
      <div className="reset_form_header">Change Password</div>
      <div className="reset_form_text">
        Enter the new password
      </div>
      <Formik enableReinitialize 
      initialValues={{
        password,
        cnfrmPassword
        }}
        validationSchema={validatePassword}
        onSubmit={changePassword}
        >
        <Form>
          <LoginInput
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />
          <LoginInput
            type="password"
            name="cnfrmPassword"
            onChange={(e) => setCnfrmPassword(e.target.value)}
            placeholder="Confirm password"
          />
          {error && <div className="error_text">{error}</div>}
          <div className="reset_form_btns">
            <Link to="/login" className="gray_btn">
              Cancel
            </Link>
            <button className="blue_btn" type="submit">
              Continue
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default ChangePassword;
