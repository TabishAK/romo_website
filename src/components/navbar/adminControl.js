import { FaUserAlt, FaHeart } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Cookie from "cookie-universal";
import LoginForm from "../loginForm/loginForm";
import SignupForm from "../signupForm/signupForm";
import { useDispatch } from "react-redux";
import { addToken } from "../../services/slices/tokenSlice";
import { Link } from "react-router-dom";

const AdminControls = (props) => {
  const cookies = Cookie();
  const ref = useRef();
  const ref2 = useRef();
  const dispatch = useDispatch();

  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowSignup, setIsShowSignup] = useState(false);

  const handleLoginClick = () => {
    console.log("Clicked3");
    setIsShowSignup(false);
    setIsShowLogin(true);
  };

  const closeSigninModal = () => {
    setIsShowLogin(false);
  };
  const closeSignupModal = () => {
    setIsShowSignup(false);
  };

  const handleSignupClick = () => {
    setIsShowLogin(false);
    setIsShowSignup(true);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isShowLogin && ref.current && !ref.current.contains(e.target)) {
        setIsShowLogin(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isShowLogin]);

  useEffect(() => {
    const checkIfClickedOutside2 = (e) => {
      if (isShowSignup && ref2.current && !ref2.current.contains(e.target)) {
        setIsShowSignup(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside2);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside2);
    };
  }, [isShowSignup]);

  const logout = () => {
    cookies.remove("eff_customer");
    dispatch(addToken(null));
  };

  return (
    <>
      <div className="for-login" ref={ref}>
        <LoginForm
          isShowLogin={isShowLogin}
          handleSignupClick={handleSignupClick}
          closeSigninModal={closeSigninModal}
        />
      </div>

      <div className="for-signup" ref={ref2}>
        <SignupForm
          isShowSignup={isShowSignup}
          handleLoginClick={handleLoginClick}
          closeSignupModal={closeSignupModal}
        />
      </div>
      <div className="admin-controls">
        <ul className="icons">
          <li className="user-icon">
            <FaUserAlt
              style={
                props.display === "show"
                  ? { fontSize: "18px", color: "gray" }
                  : { fontSize: "18px", color: props.st.color }
              }
            />

            <ul className="drop-down">
              <center>
                {props.token ? (
                  <li onClick={logout}>Logout</li>
                ) : (
                  <li onClick={handleLoginClick}> Login</li>
                )}
              </center>
              <li>Careers</li>
              <li>
                <Link to="/brouchers">Brouchers</Link>
              </li>
              <li>
                <Link to="/contact_us">Contact Us</Link>
              </li>
            </ul>
          </li>
          <li>
            <FaHeart
              style={
                props.display === "show"
                  ? { fontSize: "18px", color: "gray" }
                  : { fontSize: "18px", color: props.st.color }
              }
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminControls;
