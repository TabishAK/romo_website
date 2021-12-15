import React, { useState, useEffect } from "react";
import "./applyForm.scss";
import { useLocation } from "react-router-dom";
import Joi from "joi-browser";
import { useAlert } from "react-alert";
import PhoneInput from "react-phone-number-input";
import jwt_decode from "jwt-decode";
import axios from "axios";

const SignupForm = (props) => {
  const location = useLocation();
  const [error, setError] = useState();
  const alert = useAlert();
  const [userID, setUserID] = useState();

  let [applyFormData, setApplyFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_no: "",
    job_post: props.jobPost,
    resume: null,
    userID: userID,
  });

  useEffect(() => {
    if (props.token !== null) {
      setUserID(jwt_decode(props.token));
    }
    setApplyFormData({
      first_name: "",
      last_name: "",
      email: "",
      contact_no: "",
      job_post: props.jobPost,
      resume: null,
      userID: userID && userID.id,
    });
  }, [props.isShowApplyForm, props.token]);

  var schema = {
    first_name: Joi.string().min(3).max(10).required().label("First Name"),
    last_name: Joi.string().min(3).max(10).required().label("Last Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    contact_no: Joi.string().required().label("Contact Number"),
    job_post: Joi.string(),
    resume: Joi.allow("").required(),
    userID: Joi.allow("").required(),
  };

  function validate() {
    const result = Joi.validate(applyFormData, schema);
    return result;
  }

  const applyJob = (e) => {
    e.preventDefault();
    const result = validate();

    if (result.error) {
      setError(result.error.details[0].message);
    } else {
      setError("");
    }

    console.log(applyFormData);

    let formData = new FormData();
    formData.append("first_name", applyFormData.first_name);
    formData.append("last_name", applyFormData.last_name);
    formData.append("email", applyFormData.email);
    formData.append("contact_no", applyFormData.contact_no);
    formData.append("job_post", applyFormData.job_post);
    formData.append("resume", applyFormData.resume);
    formData.append("userID", applyFormData.userID);

    axios
      .post(process.env.REACT_APP_DEVELOPMENT_LINK + "apply_job/", formData, {})
      .then((response) => {
        props.setIsShowApplyForm(false);
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  const handleFileSelected = (e) => {
    const data = { ...applyFormData };
    data.resume = e.target.files[0];
    setApplyFormData(data);
  };

  const handleForm = (e) => {
    setApplyFormData({ ...applyFormData, [e.target.name]: e.target.value });
  };

  const handleContactInput = (e) => {
    setApplyFormData({ ...applyFormData, contact_no: e });
  };

  return (
    <div
      className={`${!props.isShowApplyForm ? "active3" : ""} showSignupForm`}
    >
      <div className="signup-form2">
        <div className="form-box2 solid">
          <form>
            <h1 className="signup-text2 mb-5">Apply For Job</h1>

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
                  value={applyFormData.first_name}
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
                  value={applyFormData.last_name}
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
                  value={applyFormData.email}
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
                  value={applyFormData.contact_no}
                  onChange={handleContactInput}
                />
              </span>
            </div>

            <div className="flex-inputs">
              <span>
                <label>Job Post</label>
                <input
                  style={{
                    fontSize: "12px",
                    padding: "20px",
                    fontWeight: "400",
                  }}
                  type="text"
                  value={props.jobPost}
                  name="jobPost"
                  className="login-box mb-4"
                />
              </span>

              <span>
                <label>Upload Resume</label>
                <input
                  style={{
                    background: "transparent",
                    position: "relative",
                    top: -10,
                    width: "18rem",
                  }}
                  type="file"
                  name="resume"
                  id="fileupload"
                  onChange={handleFileSelected}
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

            <button
              onClick={applyJob}
              type="submit"
              value="LOGIN"
              className="signup-btn2 mb-5"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
