import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./products.scss";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
const link = "http://54.183.217.110/";

const Products = (props) => {
  const [classNamay, setClassNamay] = useState("fabric");
  const [products, setProducts] = useState();
  const [check, setCheck] = useState();

  const location = useLocation();

  const makeBlur = () => {
    setClassNamay("fabric blur");
  };

  const removeBlur = () => {
    setClassNamay("fabric");
  };

  useEffect(() => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [location]);

  return (
    <div className={classNamay}>
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />

      <div className="container velvet-heading">
        <Breadcrumbs />

        {products && products.length !== 0 ? (
          <h1> {products[0].subCategory.subCategory_name}</h1>
        ) : (
          ""
        )}
      </div>
      <Gallery selectProduct={props.selectProduct} products={products} />
      <Footer />
    </div>
  );
};

export default Products;
