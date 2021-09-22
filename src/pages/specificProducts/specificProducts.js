import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./specificProducts.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaFileDownload } from "react-icons/fa";
import axios from "axios";
import Circles from "../../components/Loader/circles";
import Loader2 from "./../../components/Loader/loader2";
import Loader3 from "./../../components/Loader/loader3";
const link = "http://54.183.217.110/";

const SpecificProducts = (props) => {
  const [classNamay, setClassNamay] = useState("specific-products");
  const [swatches, setSwatches] = useState();
  const [products, setProducts] = useState();
  const [spinner, setSpinner] = useState(true);
  const [spinner2, setSpinner2] = useState(true);

  const [loader, setLoader] = useState();

  const location = useLocation();
  const slug = location.pathname.split("/");

  useEffect(() => {
    axios
      .post(
        link + "swatches/getFromSlug",
        {
          slug: "/" + slug[2],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setSwatches(response.data[0]);
        setTimeout(() => setSpinner(false), 1000);

        axios
          .post(
            link + "products/",
            {
              product_slug: "/" + slug[2],
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(function (response) {
            console.log(response);
            setProducts(response.data[0]);
            setTimeout(() => setSpinner2(false), 1000);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location]);

  const makeBlur = () => {
    setClassNamay("specific-products blur");
  };

  const removeBlur = () => {
    setClassNamay("specific-products");
  };

  const downloadBroucher = () => {
    setLoader(true);
    fetch(products.subCategory.pdf, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        setTimeout(() => setLoader(false), 1500);
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${products.subCategory.subCategory_name}.pdf`
        );
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <div className={classNamay}>
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />
      <Breadcrumbs />

      <div className="container editContainer">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5 product">
            {spinner ? (
              <center>
                {" "}
                <Loader2 />
              </center>
            ) : (
              <img src={products && products.product_broucher_image} alt="" />
            )}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5">
            <h2 className="ml-3">{products && products.product_name}</h2>
            <hr />
            <p className="mt-4 mr-5">
              {products && products.product_description}
            </p>

            <div className="brouchers">
              <FaFileDownload />
              <p style={{ color: "black" }} onClick={downloadBroucher}>
                Download Brouchers
              </p>
              {loader ? <Circles /> : ""}
            </div>

            <h1 className="swatches">SWATCHES</h1>

            {spinner2 ? (
              <Loader3 />
            ) : (
              <div className="row swatch-images">
                {swatches &&
                  swatches.swatches.map((s) => (
                    <div className="col-3 mt-5">
                      <img src={s.swatch_image && s.swatch_image} alt="" />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <ProductReview
        showSwatches={props.showSwatches}
        swatches={props.swatches}
      /> */}
      <Footer />
    </div>
  );
};

export default SpecificProducts;
