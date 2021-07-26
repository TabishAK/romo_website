import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Navbar from "./../../components/navbar/navbar";

import "./fabric.scss";
import Footer from "../../components/footer/footer";
import Line from "./../../components/line/line";
import Gallery from "../../components/gallery/gallery";

const Fabric = (props) => {
  return (
    <div className="fabric">
      <Navbar st={props.st} />
      <Line />
      <Breadcrumbs />
      <div className="container velvet-heading">
        <h1>Velvet</h1>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Fabric;
