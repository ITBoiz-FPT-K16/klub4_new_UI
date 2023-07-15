import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/Inputs/LoginInput/LoginInput";
import * as Yup from 'yup'
import axios from 'axios';
const CodeVerification = ({code,setCode,userInfos,error,setLoading,loading,setVisible,setError}) => {
  const validateCode = Yup.object({
    code: Yup.string().required("Code is required").min('5','Code must be of 5 characters').max('5','Code must be of 5 characters')
  })

  const {email} = userInfos
  console.log(email);
  const verifyCode = async()=> {
    try{
      setLoading(true);
      const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/validateResetCode`,{email,code})
      setError('')
      setLoading(false)
      setVisible(3)
    }
    catch(error){
      setLoading(false)
      setError(error.response.data.message)
    }
  }
  return (
    <div className="reset_form">
      <div className="reset_form_header">Code Verification</div>
      <div className="reset_form_text">
        Please enter the code that has been sent to your email
      </div>
      <Formik enableReinitialize initialValues={{code}}
        validationSchema={validateCode}
        onSubmit={verifyCode}
      >
        <Form>
          <LoginInput
            type="text"
            name="code"
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code"
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
export default CodeVerification;
