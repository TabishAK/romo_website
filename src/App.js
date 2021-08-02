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

function App() {
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
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
