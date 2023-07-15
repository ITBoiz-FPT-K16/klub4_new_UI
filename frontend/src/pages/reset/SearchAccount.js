import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import LoginInput from "../../components/Inputs/LoginInput/LoginInput";
import * as Yup from 'yup'
import axios from 'axios'
const SearchAccount = ({ email, error,setError,setLoading,setUserInfos,setVisible, setEmail }) => {
  const validateEmail = Yup.object({
    email: Yup.string().required('Email is required').email('The email address provided is not valid')
  })

  const handleSearch = async()=>{
    try{
      setLoading(true)
      const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/findUser`,{email})
      setUserInfos(data)
      setLoading(false)
      setVisible(1)
      setError('')
    }
    catch(err){
      setLoading(false);
      setError(err.response.data.message);
    }
  }
  return (
    <div className="reset_form">
      <div className="reset_form_header">Find your Account</div>
      <div className="reset_form_text">
        Please enter your mobile number or email to search for your account
      </div>
      <Formik enableReinitialize 
        initialValues={{email}}
        validationSchema={validateEmail}
        onSubmit={handleSearch}
        >
        
        <Form>
          <LoginInput
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          {error && <div className="error_text">{error}</div>}
          <div className="reset_form_btns">
            <Link to="/login" className="gray_btn">
              Cancel
            </Link>
            <button className="blue_btn" type="submit">
              Search
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchAccount;
