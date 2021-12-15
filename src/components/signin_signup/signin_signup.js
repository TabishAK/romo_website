import "./signin_signup.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal";
import Joi from "joi-browser";
import { useDispatch } from "react-redux";
import { addToken } from "../../services/slices/tokenSlice";
import { useAlert } from "react-alert";
import PhoneInput from "react-phone-number-input";

const Signin_Signup = (props) => {
  const [modalClass, setModalClass] = useState("modal fade");
  const [toggle, setToggle] = useState("");
  const [error, setError] = useState();
  const [signinFormError, setSigninFormError] = useState();
  const cookies = Cookie();
  const dispatch = useDispatch();
  const alert = useAlert();
  const location = useLocation();

  let [signupFormData, setSignupFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_no: "",
    password: "",
    confirm_password: "",
    slugForBroucher: location.pathname,
  });

  let [signinFormData, setSigninFormData] = useState({
    email: "",
    password: "",
  });

  var SignUpFormSchema = {
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

  var SignInFormSchema = {
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().min(3).max(15).required().label("Password"),
  };

  function validateSigninFrom() {
    const result = Joi.validate(signinFormData, SignInFormSchema);
    return result;
  }

  function validate() {
    const result = Joi.validate(signupFormData, SignUpFormSchema);
    return result;
  }

  const signup = (e) => {
    e.preventDefault();

    const result = validate();
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
          document.getElementsByClassName("modal-backdrop")[0].style.opacity =
            "0";
          document.getElementsByClassName("modal-backdrop")[1].style.opacity =
            "0";

          document.getElementsByClassName("modal-backdrop")[0].style.display =
            "none";
          document.getElementsByClassName("modal-backdrop")[1].style.display =
            "none";

          document.getElementsByClassName("modal fade")[0].style.display =
            "none";

          setToggle("");
          setModalClass("modal fade");
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

  //signin

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
          console.log(response);
          cookies.set("eff_customer", response.data);
          dispatch(addToken(response.data));
          setSigninFormData({ email: "", password: "" });

          document.getElementsByClassName("modal-backdrop")[0].style.opacity =
            "0";
          document.getElementsByClassName("modal-backdrop")[1].style.opacity =
            "0";

          document.getElementsByClassName("modal-backdrop")[0].style.display =
            "none";
          document.getElementsByClassName("modal-backdrop")[1].style.display =
            "none";

          setToggle("");
          setModalClass("modal fade");

          document.getElementsByClassName("modal")[0].style.display = "none";
        })
        .catch(
          (error) => error.response && setSigninFormError(error.response.data)
        );

      setSigninFormData({ email: "", password: "" });
    }
  };

  const handleFormSignin = (e) => {
    setSigninFormData({ ...signinFormData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    if (signUpButton) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
    }

    if (signInButton) {
      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
    }
  }, []);

  const downloadBroucher = (e) => {
    e.preventDefault();
    const t = cookies.get("eff_customer");
    console.log(location.pathname);

    setSignupFormData({
      first_name: "",
      last_name: "",
      email: "",
      contact_no: "",
      password: "",
      confirm_password: "",
      slugForBroucher: location.pathname,
    });
    if (t) {
      fetch(
        props.products
          ? props.products.subCategory
            ? props.products.subCategory.pdf
            : props.products.pdf
          : "",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      )
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            `${
              props.products && props.products.subCategory
                ? props.products.subCategory.subCategory_name
                : props.products.subCategory_name
            }.pdf`
          );
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        });
      setToggle("");
    } else {
      setModalClass("modal fade show");
      setToggle("modal");
    }
  };

  const handleContactInput = (e) => {
    setSignupFormData({ ...signupFormData, contact_no: e });
  };

  return (
    <>
      <button
        className="download-broucher login-trigger"
        data-target="#login"
        data-toggle={toggle}
        style={props.style}
        onClick={downloadBroucher}
      >
        {props.label ? props.label : "Download Broucher"}
      </button>
      <center>
        <div id="login" className={modalClass} role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button data-dismiss="modal" className="close">
                  &times;
                </button>
                <div className="container-changed" id="container">
                  <div className="form-container sign-up-container">
                    <form className="signin-signup-form">
                      <h1 className="login-form-heading">Create Account</h1>

                      <span>Please verify your email after signup!</span>

                      <div className="name-section">
                        <input
                          type="text"
                          onChange={handleForm}
                          name="first_name"
                          value={signupFormData.first_name}
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          onChange={handleForm}
                          name="last_name"
                          value={signupFormData.last_name}
                          placeholder="Last Name"
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        onChange={handleForm}
                        value={signupFormData.email}
                        placeholder="Email"
                      />
                      <PhoneInput
                        international
                        defaultCountry="US"
                        name="contact_no"
                        value={signupFormData.contact_no}
                        onChange={handleContactInput}
                      />
                      <input
                        onChange={handleForm}
                        value={signupFormData.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <input
                        onChange={handleForm}
                        value={signupFormData.confirm_password}
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                      />
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
                      <button onClick={signup} className="login-btn mt-4">
                        Sign Up
                      </button>
                    </form>
                  </div>
                  <div className="form-container sign-in-container">
                    <form>
                      <h1 className="login-form-heading">Sign in</h1>
                      <span>or use your account</span>
                      <input
                        name="email"
                        type="email"
                        value={signinFormData.email}
                        onChange={handleFormSignin}
                        placeholder="Email"
                      />
                      <input
                        onChange={handleFormSignin}
                        value={signinFormData.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                      />

                      {signinFormError ? (
                        <p
                          style={{
                            fontSize: "14px",
                            lineHeight: "18px",
                            color: "#fd1b1b",
                            position: "relative",
                            top: "15px",
                          }}
                        >
                          {signinFormError}
                        </p>
                      ) : (
                        ""
                      )}

                      <button onClick={signin} className="login-btn mt-4">
                        Sign In
                      </button>
                    </form>
                  </div>
                  <div className="overlay-container">
                    <div className="overlay">
                      <div className="overlay-panel overlay-left">
                        <h1 className="login-form-heading">Welcome Back!</h1>
                        <p className="login-form-text">
                          To keep connected with us please login with your
                          personal info
                        </p>
                        <button className="ghost" id="signIn">
                          Sign In
                        </button>
                      </div>
                      <div className="overlay-panel overlay-right">
                        <h1 className="login-form-heading">Hello, Friend!</h1>
                        <p className="login-form-text">
                          Enter your personal details and start journey with us
                        </p>
                        <button className="ghost" id="signUp">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Signin_Signup;
