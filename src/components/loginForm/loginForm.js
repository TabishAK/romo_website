import Joi from "joi-browser";
import React, { useState } from "react";
import Cookie from "cookie-universal";
import "./loginForm.scss";
import axios from "axios";
import { LogIn } from "react-feather";
import { useDispatch } from "react-redux";
import { addToken } from "../../services/slices/tokenSlice";
const LoginForm = (props) => {
  let [signinFormData, setSigninFormData] = useState({
    email: "",
    password: "",
  });
  const [signinFormError, setSigninFormError] = useState();
  const cookies = Cookie();
  const dispatch = useDispatch();

  var SignInFormSchema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(3).max(15).required().label("Password"),
  };

  const handleFormSignin = (e) => {
    setSigninFormData({ ...signinFormData, [e.target.name]: e.target.value });
  };

  const signin = (e) => {
    e.preventDefault();
    const result = validateSigninFrom();
    if (result.error) {
      setSigninFormError(result.error.details[0].message);
    } else {
      axios
        .post(
          process.env.REACT_APP_AMAZON_SERVER_LINK + "customerAuth/signin",
          signinFormData
        )
        .then((response) => {
          cookies.set("eff_customer", response.data);
          dispatch(addToken(response.data));
          props.closeSigninModal();
          setSigninFormData({
            email: "",
            password: "",
          });
        })
        .catch((error) => console.log(error.response));
      setSigninFormData({ email: "", password: "" });
    }
  };

  function validateSigninFrom() {
    const result = Joi.validate(signinFormData, SignInFormSchema);
    return result;
  }

  return (
    <div className={`${!props.isShowLogin ? "active2" : ""} showLoginForm`}>
      <div className="login-form2">
        <div className="form-box solid">
          <form>
            <h1 className="login-text2 mb-5">Login</h1>
            <label>Email</label>
            <input
              style={{
                fontSize: "12px",
                padding: "20px",
                fontWeight: "400",
              }}
              type="text"
              value={signinFormData.email}
              placeholder="Email"
              name="email"
              onChange={handleFormSignin}
              className="login-box mb-4"
            />
            <label>Password</label>
            <input
              type="password"
              style={{
                fontSize: "12px",
                padding: "20px",
                fontWeight: "400",
              }}
              name="password"
              placeholder="Password"
              value={signinFormData.password}
              className="login-box mb-5"
              onChange={handleFormSignin}
            />

            {signinFormError ? (
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#fd1b1b",
                  position: "relative",
                  top: "10px",
                }}
              >
                {signinFormError}
              </p>
            ) : (
              ""
            )}

            <p style={{ color: "black", fontSize: "15px" }}>
              New to EFF?{" "}
              <span
                onClick={props.handleSignupClick}
                style={{ fontWeight: 600, cursor: "pointer" }}
              >
                Signup!
              </span>
            </p>
            <button
              onClick={signin}
              type="submit"
              value="LOGIN"
              className="login-btn2 mb-5"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
