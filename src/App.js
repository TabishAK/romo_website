import SpecificProducts from "./pages/specificProducts/specificProducts";
import "../node_modules/video-react/dist/video-react.css";
import logo2 from "./images/logo_updated/eff_logos4.png";
import logo from "./images/logo_updated/eff_logos2.png";
import AboutEFF from "./pages/about_eff/about_eff";
import Products from "./pages/products/products";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/home/home";
import { useState } from "react";
import "../src/media_query.scss";
import "./App.scss";
import Blog from "./pages/blog/blog";
import Sideba from "./components/sidebar/sidebar";
import Brouchers from "./pages/brouchers/brouchers";

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

  const selectProduct = (p) => {
    setSelectedProd(p);
  };

  return (
    <div className="App">
      <Sideba display={display} closeRightMenu={closeRightMenu} />

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
          path="/brouchers"
          component={() => (
            <Brouchers
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
              selectedSubCategory={selectedSubCategory}
              selectedProd={selectedProd}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
