import { GiTie } from "react-icons/gi";
import "./jobOpening.scss";
import { useState } from "react";
const JobOpening = () => {
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

  return (
    <div className="job-openings">
      <h1>Job Openings</h1>
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
                <h5>Apply</h5>
              </td>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default JobOpening;
