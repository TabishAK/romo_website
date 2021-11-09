import "./brouchers.scss";
import Navbar from "./../../components/navbar/navbar";
import broucherImage from "../../images/brouchers/b2.jpg";
import { useEffect, useState } from "react";
import { ImDownload } from "react-icons/im";
import axios from "axios";
import Signin_Signup from "./../../components/signin_signup/signin_signup";
require("dotenv").config();

const Brouchers = (props) => {
  const [classNamay, setClassNamay] = useState("brouchers");
  const [categories, setCategories] = useState();

  const makeBlur = () => {
    setClassNamay("brouchers blur");
  };

  const removeBlur = () => {
    setClassNamay("brouchers");
  };

  const link = "http://54.183.217.110/";

  console.log("ENV: ", process.env.AMAZON_SERVER_LINK);

  useEffect(() => {
    axios
      .post(link + "subCategories/")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.response));
  }, []);

  const downlaodBroucher = (c) => {
    // fetch(c.pdf, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/pdf",
    //   },
    // })
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", `${c.subCategory_name}.pdf`);
    //     document.body.appendChild(link);
    //     link.click();
    //     link.parentNode.removeChild(link);
    //   });
  };

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <div className="container broucher-heading">
        <h1>Exclusive Fabrics Brouchers</h1>
      </div>

      <div className="container broucher-card">
        <div className="row">
          {categories &&
            categories.map((c) =>
              c.subCategory_image ? (
                <div className="col-4 mb-5">
                  <center>
                    <p className="sub-cat-name">{c.subCategory_name}</p>
                  </center>

                  <div class="image">
                    <img
                      class="image__img"
                      src={c.subCategory_image}
                      alt="Bricks"
                    />
                    <div class="image__overlay">
                      <div class="image__title">{c.subCategory_name}</div>
                    </div>
                  </div>

                  {console.log(c)}
                  <span className="mt-3">
                    <Signin_Signup
                      products={c}
                      style={{
                        background: "#6bc9cade",
                        borderRadius: "5px",
                        marginLeft: "0",
                        color: "#f3f3f3",
                        padding: "2% 3%",
                        boxShadow: "0 2px 10px grey",
                        fontSize: "15px",
                        marginTop: "3%",
                        fontWeight: "400",
                        border: "none",
                      }}
                    />
                  </span>
                </div>
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Brouchers;
