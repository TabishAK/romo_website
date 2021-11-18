import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./products.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import News from "./../../components/productCarousel/productCarousel";
import ImageViewer from "react-simple-image-viewer";
import Signin_Signup from "../../components/signin_signup/signin_signup";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import Cookie from "cookie-universal";
import { addToken } from "../../services/slices/tokenSlice";
import HorseLoader from "../../components/Loader/horseLoader";

const Products = (props) => {
  const [classNamay, setClassNamay] = useState("fabric");
  const [products, setProducts] = useState();
  const [spinner, setSpinner] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [token, setToken] = useState();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const location = useLocation();
  const cookies = Cookie();
  const lg = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const md = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const sm = useMediaQuery({ minWidth: 576, maxWidth: 767 });
  const xs = useMediaQuery({ maxWidth: 575 });
  const dispatch = useDispatch();

  const makeBlur = () => {
    setClassNamay("fabric blur");
  };

  const removeBlur = () => {
    setClassNamay("fabric");
  };

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    setSpinner(true);
    axios
      .post(
        process.env.REACT_APP_AMAZON_SERVER_LINK + "products/getFromSlug",
        JSON.stringify({
          slug: location.pathname,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setClassNamay("fabric");
        setProducts(response.data);
        setSpinner(false);
        return axios
          .get(
            process.env.REACT_APP_AMAZON_SERVER_LINK + "customerAuth/getToken"
          )
          .then(function (response) {
            if (response.data.token) {
              cookies.set("eff_customer", response.data.token);
              dispatch(addToken(response.data.token));
              setToken(response.data.token);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location]);

  console.log("token: ", token);

  const getImages = () => {
    var images = [];
    products &&
      products.map((p) => {
        images.push(p.product_creative_image);
      });
    return images;
  };

  return spinner ? (
    <HorseLoader />
  ) : (
    <div className={classNamay}>
      <Navbar
        token={token}
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 description">
            <h1 className="sub-category-name">
              {products && products[0].subCategory.subCategory_name}..
            </h1>

            <p className="description-text">
              The countdown is on! Grab your shoes, plot your route, and let’s
              get a move on! Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Sit amet tellus cras adipiscing enim. Ut porttitor leo a
              diam sollicitudin. Turpis in eu mi bibendum neque egestas congue
              quisque egestas.
            </p>

            <Signin_Signup
              label="Download Broucher"
              products={products && products[0]}
              style={{
                background: "#6bc9cade",
                borderRadius: "5px",
                marginLeft: "15%",
                color: "#f3f3f3",
                padding: "2% 3%",
                boxShadow: "0 2px 10px grey",
                fontSize: "15px",
                marginTop: "5%",
                fontWeight: "400",
                border: "none",
              }}
            />
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 image">
            <img
              src={products && products[0].subCategory.subCategory_image}
              alt="life-style"
            />
          </div>
        </div>
      </div>
      <div className="container product-carousel">
        <h1 className="categories">Categories..</h1>
        <center>
          <News
            openImageViewer={openImageViewer}
            data={products}
            md={md}
            lg={lg}
            sm={sm}
            xs={xs}
          />
        </center>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={getImages()}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
      <Footer />
    </div>
  );
};

export default Products;
