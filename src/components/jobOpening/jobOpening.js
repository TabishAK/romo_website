import { GiTie } from "react-icons/gi";
import "./jobOpening.scss";
import { useState, useRef, useEffect } from "react";
import Signin_Signup from "./../signin_signup/signin_signup";
import { useDispatch, useSelector } from "react-redux";
import ApplyForm from "./../applyForm/applyForm";
import Cookie from "cookie-universal";
import axios from "axios";
import { addToken } from "../../services/slices/tokenSlice";

const JobOpening = () => {
  const [isShowApplyForm, setIsShowApplyForm] = useState(false);
  const [jobPost, setJobPost] = useState();

  const cookies = Cookie();
  const dispatch = useDispatch();
  const ref = useRef();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (token === null) {
      axios
        .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "customerAuth/getToken")
        .then(function (response) {
          if (response.data.token) {
            cookies.set("eff_customer", response.data.token);
            dispatch(addToken(response.data.token));
            console.log("Successfully Captured Token");
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log("Not Captured Token");
        });
    }

    const checkIfClickedOutside = (e) => {
      if (isShowApplyForm && ref.current && !ref.current.contains(e.target)) {
        setIsShowApplyForm(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isShowApplyForm]);

  const [jobOpenings] = useState([
    {
      jobPost: "Graphic Designer",
      briefDecription: "UI/UX",
      jobLocation: "Pleasanton, California",
      jobType: "Full Time",
    },
    {
      jobPost: "Web Designer",
      briefDecription: "MERN Stack",
      jobLocation: "Atlanta, Georgia",
      jobType: "Part Time",
    },
    {
      jobPost: "Print Designer",
      briefDecription: "Bootexpert",
      jobLocation: "Pleasanton, California",
      jobType: "Full Time",
    },
    {
      jobPost: "CAD Designer",
      briefDecription: "Color Seperation Work",
      jobLocation: "Atlanta, Georgia",
      jobType: "Internship",
    },
    {
      jobPost: "Film Maker",
      briefDecription: "Video Artist",
      jobLocation: "Pleasanton, California",
      jobType: "Full Time",
    },
  ]);

  const closeSigninModal = () => {
    setIsShowApplyForm(false);
  };

  const handleApplyForm = (jp) => {
    setIsShowApplyForm(true);
    setJobPost(jp);
  };

  return (
    <>
      <div className="job-openings">
        <h1 className="job-opening-heading">Job Openings</h1>
        <center>
          <div className="seperator">
            <hr />
            <GiTie
              style={{
                fontSize: "3rem",
                textAlign: "center",
                position: "relative",
                top: -4,
              }}
            />
            <hr />
          </div>

          <table className="mt-5">
            <div className="for-apply" ref={ref}>
              <ApplyForm
                setIsShowApplyForm={setIsShowApplyForm}
                token={token}
                jobPost={jobPost}
                isShowApplyForm={isShowApplyForm}
                closeSigninModal={closeSigninModal}
              />
            </div>
            {jobOpenings.map((job) => (
              <tr>
                <td className="job-post">
                  <h5> {job.jobPost}</h5>
                  <p> {job.briefDecription}</p>
                </td>
                <td>
                  <h5>{job.jobLocation}</h5>
                  <p>United States of America</p>
                </td>
                <td className="job-type">
                  <span
                    style={{
                      background:
                        job.jobType == "Full Time"
                          ? "#14b1bb"
                          : job.jobType == "Part Time"
                          ? "#F15B65"
                          : "#2D3E50",
                      padding: "8px 18px",
                      fontFamily: "Raleway",
                      borderRadius: 8,
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    {job.jobType}
                  </span>

                  {!token ? (
                    <Signin_Signup
                      label="Apply"
                      style={{
                        background: "transparent",
                        marginLeft: "0%",
                        color: "#000000",
                        fontSize: 15,
                        marginTop: "5%",
                        fontWeight: 500,
                        border: "none",
                        boxShadow: "none",
                      }}
                    />
                  ) : (
                    <h5 onClick={() => handleApplyForm(job.jobPost)}>Apply</h5>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </center>
      </div>
    </>
  );
};

export default JobOpening;
