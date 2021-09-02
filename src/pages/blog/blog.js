import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import "./blogs.scss";
import Card from "../../components/card/card";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Footer from "../../components/footer/footer";

const Blog = (props) => {
  const [classNamay, setClassNamay] = useState("blogs");

  const makeBlur = () => {
    setClassNamay("blogs blur");
  };

  const removeBlur = () => {
    setClassNamay("blogs");
  };

  return (
    <div className={classNamay}>
      <Navbar
        st={props.st}
        openRightMenu={props.openRightMenu}
        makeBlur={makeBlur}
        removeBlur={removeBlur}
      />
      <div className="container blogs-heading">
        <h1>Exclusive Fabrics Blogs</h1>
      </div>

      <div className="container blogs-card">
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
