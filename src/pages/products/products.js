import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./products.scss";

const Products = (props) => {
  return (
    <div className="fabric">
      <Navbar
        st={props.st}
        makeBlur={props.makeBlur}
        removeBlur={props.removeBlur}
      />

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
