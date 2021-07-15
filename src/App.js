import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../node_modules/video-react/dist/video-react.css"; // import css
import TopCarousel from "./components/carousel/carousel";
import Home from "./pages/home/home";
import "../src/media_query.scss";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
