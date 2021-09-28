import "./brouchers.scss";
import Navbar from "./../../components/navbar/navbar";
import broucherImage from "../../images/brouchers/b2.jpg";
import { useEffect, useState } from "react";
import { ImDownload } from "react-icons/im";
import axios from "axios";
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
    fetch(c.pdf, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${c.subCategory_name}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
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
                  <p>{c.subCategory_name}</p>

                  <div class="image">
                    <img
                      class="image__img"
                      src={c.subCategory_image}
                      alt="Bricks"
                    />
                    <div class="image__overlay">
                      <div class="image__title">{c.subCategory_name}</div>
                      <p class="image__description">
                        Enjoy the blue color of ocean.
                      </p>
                    </div>
                  </div>

                  {/* <img src={c.subCategory_image} alt="" /> */}
                  <span onClick={() => downlaodBroucher(c)} className="mt-3">
                    <ImDownload />
                    Download
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
