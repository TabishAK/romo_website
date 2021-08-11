import { FaFacebookSquare, FaPinterestP, FaYoutube } from "react-icons/fa";
import logo from "../../images/logo_updated/eff_logos2.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <img src={logo} alt="logo" />
      <div className="row mt-4 ml-5">
        <div className="col">
          <ul>
            <label>PRODUCTS</label>
            <li>Fabrics</li>
            <li>Curtain and drapes</li>
            <li>Home Decore</li>
            <li>Bedding</li>
            <li>Hardware</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <label>PROVIDERS</label>
            <li>Half Price Drapes</li>
            <li>Sierra Textiles</li>
            <li>Half Price Linun</li>
            <li>Loom</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <label>COMPANY</label>
            <li>Meet EFF</li>
            <li>Contact Us</li>
            <li>Apply For Job</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <label>INFORMATION</label>
            <li>Terms and conditions</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>

      <div className="social-media mt-4 mb-2">
        <span>
          <FaFacebookSquare />
        </span>
        <span>
          <FiInstagram />
        </span>
        <span>
          <AiOutlineTwitter />
        </span>
        <span>
          <FaPinterestP />
        </span>
        <span>
          <FaYoutube />
        </span>
      </div>

      <hr />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;
