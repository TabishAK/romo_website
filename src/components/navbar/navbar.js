import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import logo from "../../images/logo/eff_white.png";
import logo2 from "../../images/logo/eff_black.png";

import NavHeaders from "./../navHeaders/navHeaders";
import { useState } from "react";

const Navbar = (props) => {
  const [display, setDisplay] = useState();
  const [products, setProducts] = useState();
  const [brand, setBrand] = useState();

  const check = () => {
    setDisplay("show");
  };

  const check2 = () => {
    setDisplay("");
  };

  const showProds = () => {
    setProducts("show-prods");
    setBrand("");
  };

  const dontShowProds = () => {
    setBrand("");
  };

  const showBrand = () => {
    setBrand("show-brand");
    setProducts("");
  };

  const dontShowBrand = () => {
    setProducts("");
  };

  return (
    <>
      <div className="nav-bar container-fluid">
        <div
          className={"menus " + display}
          onMouseEnter={check}
          onMouseLeave={check2}
        >
          <ul className={"product-names " + products} id="product-names">
            <li>
              <a>FABRICS</a>
              <ul>
                <li>Velvet</li>
                <li>Silk</li>
                <li>Linen</li>
                <li>Cotton</li>
                <li>Faux Silk</li>
                <li>Sheers</li>
              </ul>
            </li>
            <li className="bhola">
              <a> CURTAINS & DRAPES</a>
              <ul>
                <li>Cellur Shades</li>
                <li>Custom Curtains</li>
                <li>Custom Valances</li>
                <li>Roller Shades</li>
                <li>Roman Shades</li>
              </ul>
            </li>
            <li>
              <a> HOME DECORE</a>
              <ul>
                <li>Cushion Covers</li>
                <li>Dining Chair Covers</li>
                <li>Table Runners</li>
              </ul>
            </li>
            <li>
              <a> BEDDING</a>
              <ul>
                <li>Duve Covers</li>
                <li>Sheets</li>
                <li>Shams and Pillows</li>
              </ul>
            </li>
            <li>
              <a> HARDWARE</a>
              <ul>
                <li>Metal Hardware</li>
                <li>Clips</li>
                <li>Hangers</li>
                <li>Rods</li>
                <li>Decorator</li>
                <li>Wood</li>
              </ul>
            </li>
          </ul>

          <ul className={"brand-names " + brand} id="product-names">
            <li>
              <a> Half Price Drapes</a>
              <ul>
                <li>Velvet</li>
                <li>Silk</li>
              </ul>
            </li>
            <li>
              <a> Half Price Linens</a>
              <ul>
                <li>Velvet</li>
                <li>Silk</li>
                <li>Linen</li>
                <li>Cotton</li>
                <li>Faux Silk</li>
                <li>Sheers</li>
              </ul>
            </li>
            <li>
              <a>Sierra Textile</a>
              <ul>
                <li>Velvet</li>
                <li>Silk</li>
                <li>Linen</li>
                <li>Cotton</li>
                <li>Faux Silk</li>
                <li>Sheers</li>
              </ul>
            </li>
            <li>
              <a>Take4Media</a>
              <ul>
                <li>Velvet</li>
                <li>Silk</li>
                <li>Linen</li>
                <li>Cotton</li>
                <li>Faux Silk</li>
                <li>Sheers</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="logo-section">
          <img src={display === "show" ? logo2 : logo}></img>
        </div>
        <div className="nav-items">
          <ul className="main">
            <li
              className={"sub " + display}
              id="sub"
              onMouseEnter={() => {
                check();
                showProds();
              }}
              onMouseLeave={dontShowProds}
            >
              PRODUCTS
            </li>
            <li
              className={"sub " + display}
              id="sub"
              onMouseEnter={() => {
                check();
                showBrand();
              }}
              onMouseLeave={dontShowBrand}
            >
              BRAND
            </li>
            <li className={"sub " + display} id="sub">
              WHERE TO BUY
            </li>
            <li className={"sub " + display} id="sub">
              BE INSPIRED
            </li>
            <li className={"sub " + display} id="sub">
              COMPANY
            </li>
          </ul>
        </div>
        <div className="admin-controls">
          <ul>
            <li>
              <FaUserAlt
                style={
                  display == "show"
                    ? { fontSize: "18px", color: "gray" }
                    : { fontSize: "18px", color: "white" }
                }
              />
            </li>
            <li>
              <FaHeart
                style={
                  display == "show"
                    ? { fontSize: "18px", color: "gray" }
                    : { fontSize: "18px", color: "white" }
                }
              />
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu onClick={props.openRightMenu} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
