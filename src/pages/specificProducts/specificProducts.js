import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./specificProducts.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaFileDownload } from "react-icons/fa";
import axios from "axios";
import Circles from "../../components/Loader/circles";
const link = "http://54.183.217.110/";

const SpecificProducts = (props) => {
  const [classNamay, setClassNamay] = useState("specific-products");
  const [swatches, setSwatches] = useState();
  const [products, setProducts] = useState();

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
        link.setAttribute("download", `FileName.pdf`);
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
            <img src={products && products.product_broucher_image} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5">
            <h2 className="ml-3">{products && products.product_name}</h2>
            <hr />
            <p className="mt-4 mr-5">
              The perfect combination of sophistication and modernity. Urban
              velvet is densely woven using the finest yarns to create a
              luxuriously soft velvet with a silky appearance and the most
              exquisite rich jewel-like tones and classic neutrals. A
              specialized finishing technique gives a natural look and
              exceptionally soft supple handle that offers high performance and
              practicality.
            </p>

            <div className="brouchers">
              <FaFileDownload />
              <p style={{ color: "black" }} onClick={downloadBroucher}>
                Download Brouchers
              </p>
              {loader ? <Circles /> : ""}
            </div>

            <h1 className="swatches">SWATCHES</h1>

            <div className="row swatch-images">
              {swatches &&
                swatches.swatches.map((s) => (
                  <div className="col-3 mt-5">
                    <img src={s.swatch_image && s.swatch_image} alt="" />
                  </div>
                ))}
            </div>
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
