import ProductReview from "../../components/productReview/productReview";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./specificProducts.scss";

const SpecificProducts = (props) => {
  // let [swatchesClone] = useState([...swatches]);

  return (
    <div className="specific-products">
      <Navbar st={props.st} />
      <Breadcrumbs />
      <ProductReview
        showSwatches={props.showSwatches}
        swatches={props.swatches}
      />
      <Footer />
    </div>
  );
};

export default SpecificProducts;
