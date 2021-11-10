import React, { useState, useEffect } from "react";
import "./signupForm.scss";
import { useLocation } from "react-router-dom";
import Joi from "joi-browser";
import { useAlert } from "react-alert";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

const SignupForm = (props) => {
  const location = useLocation();
  const [error, setError] = useState();
  const alert = useAlert();

  useEffect(() => {
    setSignupFormData({
      first_name: "",
      last_name: "",
      email: "",
      contact_no: "",
      password: "",
      confirm_password: "",
      slugForBroucher: location.pathname,
    });
  }, [props.isShowSignup]);

  let [signupFormData, setSignupFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_no: "",
    password: "",
    confirm_password: "",
    slugForBroucher: location.pathname,
  });

  var schema = {
    first_name: Joi.string().min(3).max(10).required().label("First Name"),
    last_name: Joi.string().min(3).max(10).required().label("Last Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    contact_no: Joi.string().required().label("Contact Number"),
    password: Joi.string().min(3).max(15).required().label("Password"),
    confirm_password: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .label("Confirm Password")
      .error((errors) => {
        errors.forEach((err) => {
          switch (err.type) {
            case "any.allowOnly":
              err.message = "Password Not Matched!";
              break;
            default:
              break;
          }
        });
        return errors;
      }),

    slugForBroucher: Joi.string(),
  };

  function validate() {
    const result = Joi.validate(signupFormData, schema);
    return result;
  }

  const signup = (e) => {
    e.preventDefault();
    const result = validate();

    console.log(signupFormData);
    if (result.error) {
      setError(result.error.details[0].message);
    } else {
      setError("");

      axios
        .post(
          process.env.REACT_APP_AMAZON_SERVER_LINK + "customerAuth/signup",
          signupFormData
        )
        .then((response) => {
          props.closeSignupModal();
          alert.success("Registerd! Please verify your email.");
          setSignupFormData({
            first_name: "",
            last_name: "",
            email: "",
            contact_no: "",
            password: "",
            confirm_password: "",
            slugForBroucher: location.pathname,
          });
        })
        .catch((error) => setError(error.response.data));
    }
  };

  const handleForm = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };

  const handleContactInput = (e) => {
    setSignupFormData({ ...signupFormData, contact_no: e });
  };

  return (
    <div className={`${!props.isShowSignup ? "active3" : ""} showSignupForm`}>
      <div className="signup-form2">
        <div className="form-box2 solid">
          <form>
            <h1 className="signup-text2 mb-5">Signup</h1>

            <div className="flex-inputs">
              <span>
                <label>First Name</label>
                <input
                  style={{
                    fontSize: "12px",
                    padding: "20px",
                    fontWeight: "400",
                  }}
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={signupFormData.first_name}
                  onChange={handleForm}
                  className="login-box mb-4"
                />
              </span>

              <span>
                <label>Last Name</label>
                <input
                  style={{
                    fontSize: "12px",
                    padding: "20px",
                    fontWeight: "400",
                  }}
                  type="text"
                  placeholder="Last Name"
                  value={signupFormData.last_name}
                  onChange={handleForm}
                  name="last_name"
                  className="login-box mb-4"
                />
              </span>
            </div>

            <div className="flex-inputs">
              <span>
                <label>Email</label>
                <input
                  style={{
                    fontSize: "12px",
                    padding: "20px",
                    fontWeight: "400",
                  }}
                  type="text"
                  placeholder="Email"
                  onChange={handleForm}
                  value={signupFormData.email}
                  name="email"
                  className="login-box mb-4"
                />
              </span>

              <span>
                <label>Contact No</label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  name="contact_no"
                  value={signupFormData.contact_no}
                  onChange={handleContactInput}
                />
              </span>
            </div>

            <div className="flex-inputs">
              <span>
                <label>Password</label>
                <input
                  style={{
                    fontSize: "12px",
                    padding: "20px",
                    fontWeight: "400",
                  }}
                  type="password"
                  placeholder="Password"
                  onChange={handleForm}
                  value={signupFormData.password}
                  name="password"
                  className="login-box mb-4"
                />
              </span>

              <span>
                <label>Confrim Password</label>
                <input
                  style={{
                    fontSize: "12px",
                    padding: "20px",
                    fontWeight: "400",
                  }}
                  type="password"
                  placeholder="Confrim Password"
                  name="confirm_password"
                  onChange={handleForm}
                  value={signupFormData.confirm_password}
                  className="login-box mb-4"
                />
              </span>
            </div>
            {error ? (
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#fd1b1b",
                  position: "relative",
                  top: "10px",
                }}
              >
                {error}
              </p>
            ) : (
              ""
            )}
            <p style={{ color: "black", fontSize: "15px" }}>
              Already have account?{" "}
              <span
                onClick={props.handleLoginClick}
                style={{ fontWeight: 600, cursor: "pointer" }}
              >
                Signin!
              </span>
            </p>

            <button
              onClick={signup}
              type="submit"
              value="LOGIN"
              className="signup-btn2 mb-5"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
