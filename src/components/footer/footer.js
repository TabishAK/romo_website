import "./footer.scss";
import logo from "../../images/logo_updated/eff_logos2.png";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <img src={logo} alt="logo" />
      <div className="row mt-4">
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
      <hr />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Footer;
