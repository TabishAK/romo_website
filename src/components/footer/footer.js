import {
  FaFacebookSquare,
  FaPinterestP,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../../images/logo_updated/eff_logos2.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import "./footer.scss";
import "antd/dist/antd.css";
import { Input } from "antd";

const { Search } = Input;
const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row mt-4  ml-5">
        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 mt-4 column-1">
          <ul>
            <label>PRODUCTS</label>
            <li>Curtain and drapes</li>
            <li>Home Decore</li>
            <li>Bedding</li>
            <li>Hardware</li>
          </ul>
          <ul className="mt-5">
            <label>COMPANY</label>
            <li>About Exclusive Fabrics</li>
            <li>Terms and conditions</li>
            <li>Facilities</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-4 column-2">
          <ul className="connect-with-us">
            <label>CONNECT WITH US</label>
            <p>Join Our Community!</p>
            <p className="mb-1">
              Stay on the top of latest window treatment trends and events
            </p>
          </ul>

          <ul className="social-share">
            <label>SOCIAL SHARE</label>
            <div className="social-media mt-2 mb-2">
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
              <span>
                <FaLinkedin />
              </span>
            </div>
          </ul>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
          <Search
            className="mt-5"
            placeholder="Subscribe to our newsletter"
            enterButton="Subcribe"
            size="large"
          />
          <img src={logo} alt="" style={{ display: "grid" }} />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2021 Exclusive Fabrics | 440 Boulder Court, Suite 100, Pleasanton,
          CA 94566
        </p>
        <ul>
          <li>Home</li>
          <li>Where to buy</li>
          <li>Brouchers</li>
          <li>Video Library</li>
          <li>Blogs</li>
          <li>Brands</li>
        </ul>

        <p>Custom ecommerce designed and developed by Take4media</p>
      </div>
    </div>
  );
};

export default Footer;
