import { Form, Formik } from "formik";
import { useState } from "react";
import RegisterInput from "../Inputs/RegisterInput";
import * as Yup from "yup";
import GenderSelect from "./GenderSelect";
import DateOfBirth from "./DateOfBirth";
import DotLoader from "react-spinners/DotLoader";
import {useDispatch} from "react-redux"
import axios from 'axios'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
const RegisterForm = ({setVisible}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
  const userInfos = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };
  const [user, setUser] = useState(userInfos);
  const [dateError, setDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const {
    first_name,
    last_name,
    email,
    password,
    bYear,
    bMonth,
    bDay,
    gender,
  } = user;
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const registerValidation = Yup.object().shape({
    first_name: Yup.string()
      .required(`What's your name?`)
      .min(3, "First Name must be at least 2 characters long")
      .max(10, "First Name must be at least 10 characters long")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed"),

    last_name: Yup.string()
      .required("Surname is required")
      .min(3, "Surname must be at least 2 characters long")
      .max(10, "Surname must be at least 10 characters long")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed"),
    email: Yup.string()
      .required(
        `You will need this when you login or you ever need to reset your password`
      )
      .email("Enter a valid email address"),
    password: Yup.string()
      .required(
        "Enter a combination of six letters numbers and special characters such as (* and #)"
      )
      .min(6, "Password must be atleast 6 characters long")
      .max(16, "Password cannot be greater then 16 characters"),
  });
  const tempYear = new Date().getFullYear();
  const years = Array.from(new Array(100), (val, index) => tempYear - index);
  const months = Array.from(new Array(12), (val, index) => 1 + index);
  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };
  const dates = Array.from(new Array(getDays()), (val, index) => 1 + index);

  const [error,setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const registerSubmit = async()=>{
    try {
        const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/register`,{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
                })
            setSuccess(data.message)

            const {message,...rest} = data
            setTimeout(()=>{
                dispatch({type : 'LOGIN', payload:rest})
                Cookies.set("user", JSON.stringify(rest))
                navigate('/')
            },2000)
    } catch (error) {
        setLoading(false)
        setSuccess('')
        setError(error.response.data.message)
        
    }
  }
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon" onClick={() => setVisible(false)}></i>
          <span>Sign up </span>
          <span>It's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            first_name,
            last_name,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
          }}
          validationSchema={registerValidation}
          onSubmit={() => {
            let currentDate = new Date();
            let pickedDate = new Date(bYear, bMonth - 1, bDay);
            let atleast14 = new Date(1970 + 14, 0, 1);
            let morethan70 = new Date(1970 + 70, 0, 1);
            console.log(currentDate);
            console.log(pickedDate);
            console.log(morethan70);
            if (currentDate - pickedDate < atleast14) {
              setDateError(
                "It seems like you have entered wrong the birth date. Please use your real birthday"
              );
            } else if (currentDate - pickedDate > morethan70) {
              setDateError(
                "It seems like you have entered wrong the birth date. Please use your real birthday"
              );
            } else if (gender === "") {
                setDateError('')
              setGenderError(
                "Please choose a gender.You can change who can see this later"
              );
            }
            else{
                setDateError('')
                setGenderError('')
                registerSubmit()
            }
          }}
        >
          <Form className="register_form">
            <div className="reg_line">
              <RegisterInput
                type="text"
                placeholder="First Name"
                name="first_name"
                onChange={handleRegisterChange}
              />
              <RegisterInput
                type="text"
                placeholder="SurName"
                name="last_name"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="reg_line">
              <RegisterInput
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="reg_line">
              <RegisterInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="reg_col">
              <div className="reg_line_header">
                Date of birth <i className="info_icon"></i>
              </div>
              <DateOfBirth
                handleRegisterChange={handleRegisterChange}
                bDay={bDay}
                bMonth={bMonth}
                bYear={bYear}
                dateError={dateError}
                dates={dates}
                months={months}
                years={years}
              />
            </div>

            <div className="reg_col">
              <div className="reg_line_header">
                Gender <i className="info_icon"></i>
              </div>
              <GenderSelect
                handleRegisterChange={handleRegisterChange}
                genderError={genderError}
              />
            </div>

            <div className="reg_infos">
              By clicking Sign up,you agree to our(" ")
              <span>Terms ,data policy &nbsp;</span>
              and <span>Cookie policy.</span> You may receive SMS notification
              from us and can opt out any time
            </div>
            <div className="reg_btn_wrapper">
              <button type="submit" className="blue_btn open_signup">
                Sign Up
              </button>
            </div>
            <DotLoader color='black' loading={loading} size={30}/>
            <div className="error_text">{error}</div>
            <div className="success_text">{success}</div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default RegisterForm;
