import "../node_modules/video-react/dist/video-react.css";
import logo2 from "./images/logo_updated/eff_logos4.png";
import logo from "./images/logo_updated/eff_logos2.png";
import Fabric from "./pages/fabric/fabric";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../src/media_query.scss";
import "./App.css";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      {/* <Home
        st={{ gradient: "", color: "white", logo: logo2, position: "absolute" }}
      /> */}
      <Fabric
        st={{
          gradient: "",
          color: "#828282",
          logo: logo,
          position: "relative",
        }}
      />
    </div>
  );
}

export default App;
