import SpecificProducts from "./pages/specificProducts/specificProducts";
import swatch_10 from "../src/images/swatches/swatch-10.jpg";
import swatch_1 from "../src/images/swatches/swatch-1.jpg";
import swatch_2 from "../src/images/swatches/swatch-2.jpg";
import swatch_3 from "../src/images/swatches/swatch-3.jpg";
import swatch_4 from "../src/images/swatches/swatch-4.jpg";
import swatch_5 from "../src/images/swatches/swatch-5.jpg";
import swatch_6 from "../src/images/swatches/swatch-6.jpg";
import swatch_7 from "../src/images/swatches/swatch-7.jpg";
import swatch_8 from "../src/images/swatches/swatch-8.jpg";
import swatch_9 from "../src/images/swatches/swatch-9.jpg";
import "../node_modules/video-react/dist/video-react.css";
import logo2 from "./images/logo_updated/eff_logos4.png";
import logo from "./images/logo_updated/eff_logos2.png";
import AboutEFF from "./pages/about_eff/about_eff";
import Products from "./pages/products/products";
import { Route, Switch } from "react-router-dom";
import Swatches from "./pages/swatches/swatches";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/home/home";
import { useState } from "react";
import "../src/media_query.scss";
import "./App.scss";
import Blog from "./pages/blog/blog";

function App() {
  const [display, setDisplay] = useState(false);
  const [selectedProd, setSelectedProd] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState();

  const openRightMenu = () => {
    setDisplay(true);
  };

  const closeRightMenu = () => {
    setDisplay(false);
  };

  let [swatches, setSwatches] = useState([
    { id: 1, image: swatch_1 },
    { id: 2, image: swatch_2 },
    { id: 3, image: swatch_3 },
    { id: 4, image: swatch_4 },
    { id: 5, image: swatch_5 },
    { id: 6, image: swatch_6 },
    { id: 7, image: swatch_7 },
    { id: 8, image: swatch_8 },
    { id: 9, image: swatch_9 },
    { id: 10, image: swatch_10 },
  ]);

  const showSwatches = (i) => {
    let s = [...swatches];
    let temp = s[0];
    s[0] = s[i];
    s[i] = temp;
    setSwatches(s);
  };

  const selectProduct = (p) => {
    setSelectedProd(p);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              st={{
                gradient: "gradient",
                color: "white",
                logo: logo2,
                position: "absolute",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />

        <Route
          exact
          path="/blogs"
          component={() => (
            <Blog
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />

        <Route
          exact
          path="/about"
          component={() => (
            <AboutEFF
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              display={display}
            />
          )}
        />

        <Route
          exact
          path="/:product_name"
          component={() => (
            <Products
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              selectProduct={selectProduct}
            />
          )}
        />
        <Route
          exact
          path="/:product_name/:type"
          component={() => (
            <SpecificProducts
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              openRightMenu={openRightMenu}
              closeRightMenu={closeRightMenu}
              swatches={swatches}
              selectedSubCategory={selectedSubCategory}
              showSwatches={showSwatches}
              selectedProd={selectedProd}
            />
          )}
        />
        {/* <Route
          exact
          path="/:product_name/:type/:id"
          component={() => (
            <Swatches
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
              swatchesClone={swatchesClone}
              swatches={swatches}
              editSwatch={editSwatch}
            />
          )}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
