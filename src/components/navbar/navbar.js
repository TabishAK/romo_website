import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import logo from "../../images/logo_updated/eff_logos2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div
        className={"nav-bar container-fluid " + props.st.gradient}
        style={{ position: props.st.position }}
      >
        <div
          className={"menus " + display}
          onMouseEnter={check}
          onMouseLeave={check2}
        >
          <ul className={"product-names " + products} id="product-names">
            <li>
              <Link>FABRICS</Link>
              <ul>
                <Link to="/velvet">
                  <li>Velvet</li>
                </Link>
                <li>Silk</li>
                <li>Linen</li>
                <li>Cotton</li>
                <li>Faux Silk</li>
                <li>Sheers</li>
              </ul>
            </li>
            <li className="bhola">
              <Link> CURTAINS & DRAPES</Link>
              <ul>
                <li>Cellur Shades</li>
                <li>Custom Curtains</li>
                <li>Custom Valances</li>
                <li>Roller Shades</li>
                <li>Roman Shades</li>
              </ul>
            </li>
            <li>
              <Link> HOME DECORE</Link>
              <ul>
                <li>Cushion Covers</li>
                <li>Dining Chair Covers</li>
                <li>Table Runners</li>
              </ul>
            </li>
            <li>
              <Link> BEDDING</Link>
              <ul>
                <li>Duve Covers</li>
                <li>Sheets</li>
                <li>Shams and Pillows</li>
              </ul>
            </li>
            <li>
              <Link> HARDWARE</Link>
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
              <Link> HALF PRICE DRAPES </Link>
              <ul>
                <li>Velvet</li>
                <li>Silk</li>
              </ul>
            </li>
            <li>
              <Link> HALF PRICE LINENS </Link>
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
              <Link>SIERRA TEXTILES</Link>
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
              <Link>TAKE4MEDIA</Link>
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
          <Link to="/">
            <img
              alt="logo"
              src={display === "show" ? logo : props.st.logo}
            ></img>
          </Link>
        </div>

        <div className="nav-items">
          <ul className="main">
            <li
              style={{ color: props.st.color }}
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
              style={{ color: props.st.color }}
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
            <li
              style={{ color: props.st.color }}
              className={"sub " + display}
              id="sub"
            >
              WHERE TO BUY
            </li>
            <li
              style={{ color: props.st.color }}
              className={"sub " + display}
              id="sub"
            >
              BE INSPIRED
            </li>
            <li
              style={{ color: props.st.color }}
              className={"sub " + display}
              id="sub"
            >
              COMPANY
            </li>
          </ul>
        </div>
        <div className="admin-controls">
          <ul>
            <li>
              <FaUserAlt
                style={
                  display === "show"
                    ? { fontSize: "18px", color: "gray" }
                    : { fontSize: "18px", color: props.st.color }
                }
              />
            </li>
            <li>
              <FaHeart
                style={
                  display === "show"
                    ? { fontSize: "18px", color: "gray" }
                    : { fontSize: "18px", color: props.st.color }
                }
              />
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <GiHamburgerMenu
            onClick={props.openRightMenu}
            style={{ fill: props.st.color }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
