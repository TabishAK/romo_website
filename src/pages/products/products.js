import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./products.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import News from "./../../components/productCarousel/productCarousel";
const link = "http://54.183.217.110/";

const Products = (props) => {
  const [classNamay, setClassNamay] = useState("fabric");
  const [products, setProducts] = useState();
  const [spinner, setSpinner] = useState(true);

  const location = useLocation();

  const makeBlur = () => {
    setClassNamay("fabric blur");
  };

  const removeBlur = () => {
    setClassNamay("fabric");
  };

  useEffect(() => {
    setSpinner(true);
    axios
      .post(
        link + "products/getFromSlug",
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
        setProducts(response.data);
        setSpinner(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location]);

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />

      <div className="container">
        <h1 className="sub-category-name">
          {products && products[0].subCategory.subCategory_name}..
        </h1>
        <center>
          <button className="btn-md btn">Download Broucher</button>
        </center>
      </div>

      <div className="container-fluid life-style"></div>

      <div className="container description">
        <h1 className="description-heading">Description..</h1>

        <div className="row">
          <p>
            The countdown is on! Grab your shoes, plot your route, and let’s get
            a move on! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sit amet tellus cras adipiscing enim. Ut porttitor leo a diam
            sollicitudin. Turpis in eu mi bibendum neque egestas congue quisque
            egestas. The countdown is on! Grab your shoes, plot your route, and
            let’s get a move on! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sit amet tellus cras adipiscing enim. Ut
            porttitor leo a diam sollicitudin. Turpis in eu mi bibendum neque
            egestas congue quisque egestas.
          </p>

          <button className="btn-md btn">Download Broucher</button>
        </div>
      </div>

      <div className="container product-carousel">
        <h1 className="categories">Categories..</h1>
        <News data={products} />
      </div>

      <Footer />
    </div>
  );
};

export default Products;
