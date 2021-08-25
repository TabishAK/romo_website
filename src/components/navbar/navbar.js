import logo from "../../images/logo_updated/eff_logos2.png";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.scss";

const Navbar = (props) => {
  const [display, setDisplay] = useState();
  const [products, setProducts] = useState();
  const [brand, setBrand] = useState();
  const [whereToBuy, setWhereToBuy] = useState();
  const [beInspried, setBeInspried] = useState();
  const [height, setHeight] = useState("24rem");
  const check = () => {
    setDisplay("show");
  };

  const check2 = () => {
    setDisplay("");
  };

  const showProds = () => {
    setProducts("show-prods");
    setBrand("");
    setBeInspried("");
    setWhereToBuy("");
    setHeight("24rem");
  };

  const dontShowProds = () => {
    setBrand("");
  };

  const showBeInspired = () => {
    setBeInspried("show-be-inspried");
    setProducts("");
    setBrand("");
    setWhereToBuy("");
    setHeight("12rem");
  };

  const dontShowBeInspired = () => {
    //  setBeInspried("");
    setProducts("");
    setBrand("");
    setWhereToBuy("");
  };

  // const showBrand = () => {
  //   setBrand("show-brand");
  //   setProducts("");
  //   setWhereToBuy("");
  // };

  // const dontShowBrand = () => {
  //   setProducts("");
  // };

  const showWhereToBuy = () => {
    setWhereToBuy("show-where-to-buy");
    setProducts("");
    setBrand("");
    setBeInspried("");
    setHeight("22rem");
  };

  const dontShowWhereToBuy = () => {
    // setWhereToBuy("");
  };

  return (
    <>
      <div
        className={"nav-bar container-fluid " + props.st.gradient}
        style={{ position: props.st.position }}
      >
        <div
          className={"menus " + display}
          style={{ height: height }}
          onMouseEnter={() => {
            check();
            props.makeBlur();
          }}
          onMouseLeave={() => {
            check2();
            props.removeBlur();
          }}
        >
          <ul className={"product-names " + products} id="product-names">
            <li className="bhola">
              <Link> CURTAINS AND DRAPES</Link>
              <ul className="first-row">
                <li>Raw Silk</li>
                <li>Cotton Silk</li>
                <li>Thai Silk</li>
                <li>Taffeta Silk</li>
                <li>Dupioni Silk</li>
                <li>Organza Silk</li>
                <li>Faux Silk</li>
              </ul>
              <ul className="second-row">
                <li>Velvet</li>
                <li>Linen</li>
                <li>Faux Linen</li>
                <li>Cotton</li>
                <li>Blackout</li>
                <li>Crewel</li>
                <li>Sheers</li>
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
                <li>Duvet Covers</li>
                <li>Bed Sheets</li>
                <li>Shams and Pillows</li>
              </ul>
            </li>
            <li>
              <Link> HARDWARE</Link>
              <ul>
                <li>Metal Hardware</li>
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
                <li>Raw Silk</li>
                <li>Cotton Silk</li>
                <li>Thai Silk</li>
                <li>Taffeta Silk</li>
                <li>Dupioi Silk</li>
                <li>Organza Silk</li>
                <li>Faux Silk</li>
              </ul>
              <ul>
                <li>Velvet</li>
                <li>Linen</li>
                <li>Faux Linen</li>
                <li>Cotton</li>
                <li>Blackout</li>
                <li>Crewel</li>
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

          <ul className={"where-to-buy " + whereToBuy} id="product-names">
            <li className="providers">
              <Link>HALF PRICE DRAPES </Link>
              <Link>All MODERN </Link>
              <Link>BIRCHLANE </Link>
            </li>
            <li className="providers">
              <Link> AMAZON </Link>
              <Link> KHOLS </Link>
              <Link> AMAZON </Link>
            </li>
            <li className="providers">
              <Link>JC PENNY</Link>
              <Link>HOMEDEPOT</Link>
              <Link>BELLACOR</Link>
            </li>
            <li className="providers">
              <Link>HOUZZ</Link>
              <Link>EBAY</Link>
              <Link>WAYFARE</Link>
            </li>
          </ul>

          <ul className={"be-inspried " + beInspried} id="product-names">
            <li>Show Brouchers</li>
            <li>Video Library</li>
            <li>Blogs</li>
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
                props.makeBlur();
              }}
              onMouseLeave={() => {
                dontShowProds();
                props.removeBlur();
              }}
            >
              PRODUCTS
            </li>
            {/* <li
              style={{ color: props.st.color }}
              className={"sub " + display}
              id="sub"
              onMouseEnter={() => {
                check();
                props.makeBlur();
                showBrand();
              }}
              onMouseLeave={() => {
                dontShowBrand();
                props.removeBlur();
              }}
            >
              BRAND
            </li> */}
            <li
              onMouseEnter={() => {
                check();
                showWhereToBuy();
                props.makeBlur();
              }}
              onMouseLeave={() => {
                dontShowWhereToBuy();
                props.removeBlur();
              }}
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
              onMouseEnter={() => {
                check();
                showBeInspired();
                props.makeBlur();
              }}
              onMouseLeave={() => {
                dontShowBeInspired();
                props.removeBlur();
              }}
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
