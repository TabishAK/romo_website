import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./products.scss";
import { useState } from "react";

const Products = (props) => {
  const [classNamay, setClassNamay] = useState("fabric");

  const makeBlur = () => {
    setClassNamay("fabric blur");
  };

  const removeBlur = () => {
    setClassNamay("fabric");
  };

  return (
    <div className={classNamay}>
      <Navbar st={props.st} makeBlur={makeBlur} removeBlur={removeBlur} />

      <div className="container velvet-heading">
        <Breadcrumbs />
        <h1>Velvet</h1>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Products;
