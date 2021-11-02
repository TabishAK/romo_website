import "./signin_signup.scss";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useLocation } from "react-router-dom";
const cookies = new Cookies();

const Signin_Signup = (props) => {
  const [modalClass, setModalClass] = useState("modal fade");
  const [toggle, setToggle] = useState("");
  const location = useLocation();

  let [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    slugForBroucher: location.pathname,
  });

  let [signinFormData, setSigninFormData] = useState({
    name: "",
    email: "",
  });

  //signup

  const signup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/customerAuth/signup", signupFormData)
      .then((response) => {
        console.log(response);
        setModalClass("modal fade");
        setSignupFormData({ name: "", email: "", password: "" });
        document.getElementsByClassName("modal-backdrop")[0].style.opacity =
          "0";
        document.getElementsByClassName("modal-backdrop")[1].style.opacity =
          "0";
      })
      .catch((error) => console.log(error.response));
  };

  const handleForm = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };

  //signin

  const signin = (e) => {
    e.preventDefault();
    console.log(signinFormData);
    setSigninFormData({ email: "", password: "" });
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
    console.log(t);

    // if (t) {
    //   fetch(props.products ? props.products.subCategory.pdf : "", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/pdf",
    //     },
    //   })
    //     .then((response) => response.blob())
    //     .then((blob) => {
    //       const url = window.URL.createObjectURL(new Blob([blob]));
    //       const link = document.createElement("a");
    //       link.href = url;
    //       link.setAttribute(
    //         "download",
    //         `${
    //           props.products ? props.products.subCategory.subCategory_name : ""
    //         }.pdf`
    //       );
    //       document.body.appendChild(link);
    //       link.click();
    //       link.parentNode.removeChild(link);
    //     });
    //   setToggle("");
    // } else {
    //   setModalClass("modal fade show");
    //   setToggle("modal");
    // }
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
        Download Broucher
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
                    <form>
                      <h1 className="login-form-heading">Create Account</h1>

                      <span>or use your email for registration</span>
                      <input
                        type="text"
                        onChange={handleForm}
                        name="name"
                        value={signupFormData.name}
                        placeholder="Name"
                      />
                      <input
                        type="email"
                        name="email"
                        onChange={handleForm}
                        value={signupFormData.email}
                        placeholder="Email"
                      />
                      <input
                        onChange={handleForm}
                        value={signupFormData.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
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
                      <a
                        style={{
                          marginBottom: "2rem",
                        }}
                      >
                        Forgot your password?
                      </a>
                      <button onClick={signin} className="login-btn">
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
