import "../node_modules/video-react/dist/video-react.css";
import logo2 from "./images/logo_updated/eff_logos4.png";
import logo from "./images/logo_updated/eff_logos2.png";
import Products from "./pages/products/products";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../src/media_query.scss";
import "./App.css";
import Home from "./pages/home/home";
import SpecificProducts from "./pages/specificProducts/specificProducts";
import { Route, Switch } from "react-router-dom";
import AboutEFF from "./pages/about_eff/about_eff";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(false);

  const openRightMenu = () => {
    setDisplay(true);
  };

  const closeRightMenu = () => {
    setDisplay(false);
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
        />{" "}
        <Route
          path="/about_eff"
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
          path="/:product_name"
          component={() => (
            <Products
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />
        <Route
          path="/:product_name/:type"
          component={() => (
            <SpecificProducts
              st={{
                gradient: "",
                color: "#828282",
                logo: logo,
                position: "relative",
              }}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
