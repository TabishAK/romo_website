import logo from "../../images/logo_updated/eff_logos2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import Cookie from "cookie-universal";
import AdminControls from "./adminControl";
import { addToken } from "../../services/slices/tokenSlice";

const Navbar = (props) => {
  const [display, setDisplay] = useState();
  const [products, setProducts] = useState();
  const [brand, setBrand] = useState();
  const [whereToBuy, setWhereToBuy] = useState();
  const [company, setCompany] = useState();
  const [beInspried, setBeInspried] = useState();
  const [height, setHeight] = useState("22rem");

  const subCategories = useSelector(
    (state) => state.subCategories.subCategories
  );

  const mainCategories = useSelector(
    (state) => state.mainCategories.mainCategories
  );

  const isToken = useSelector((state) => state.token.token);

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
    setCompany("");
    setWhereToBuy("");
    setHeight("30rem");
  };

  const showCompany = () => {
    setCompany("show-company");
    setProducts("");
    setBeInspried("");
    setWhereToBuy("");
    setHeight("25rem");
  };

  const dontShowCompany = () => {
    setProducts("");
  };

  const dontShowProds = () => {
    setBrand("");
  };

  const showBeInspired = () => {
    setBeInspried("show-be-inspried");
    setProducts("");
    setBrand("");
    setCompany("");
    setWhereToBuy("");
    setHeight("20.5rem");
  };

  const dontShowBeInspired = () => {
    setProducts("");
    setBrand("");
    setWhereToBuy("");
  };

  const showWhereToBuy = () => {
    setWhereToBuy("show-where-to-buy");
    setProducts("");
    setBrand("");
    setCompany("");
    setBeInspried("");
    setHeight("27rem");
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
            {mainCategories &&
              mainCategories.map((m, i) =>
                i === 0 ? (
                  <li>
                    <Link style={{ textTransform: "uppercase" }}>
                      {m.category_name}
                    </Link>
                    <ul className="first-row">
                      {subCategories.map((s, i) =>
                        i <= 5 && s.mainCategory._id === m._id ? (
                          <>
                            <Link to={s.subCategory_slug}>
                              <li>{s.subCategory_name}</li>
                            </Link>
                          </>
                        ) : (
                          ""
                        )
                      )}
                    </ul>
                    <ul className="second-row">
                      {subCategories.map((s, i) =>
                        i > 5 && s.mainCategory._id === m._id ? (
                          <Link to={s.subCategory_slug}>
                            <li>{s.subCategory_name}</li>
                          </Link>
                        ) : (
                          <></>
                        )
                      )}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <Link style={{ textTransform: "uppercase" }}>
                      {m.category_name}
                    </Link>
                    <ul>
                      {subCategories.map((s, i) =>
                        s.mainCategory._id === m._id ? (
                          <>
                            <Link to={s.subCategory_slug}>
                              <li>{s.subCategory_name}</li>
                            </Link>
                          </>
                        ) : (
                          ""
                        )
                      )}
                    </ul>
                  </li>
                )
              )}
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
              <Link>HOUZZ</Link>
            </li>
            <li className="providers">
              <Link>JC PENNY</Link>
              <Link>HOMEDEPOT</Link>
              <Link>BELLACOR</Link>
            </li>
            <li className="providers">
              <Link>EBAY</Link>
              <Link
                style={{
                  position: "relative",
                  bottom: "22px",
                }}
              >
                WAYFARE
              </Link>
            </li>
          </ul>

          <ul className={"be-inspried " + beInspried} id="product-names">
            <Link to="/brouchers">
              <li
                style={{
                  fontSize: 17,
                  fontFamily: "Noah Grotesque Regular",
                }}
              >
                Show Brouchers
              </li>
            </Link>

            <Link to="#">
              <li
                style={{
                  fontSize: 17,
                  fontFamily: "Noah Grotesque Regular",
                }}
              >
                Video Library
              </li>
            </Link>

            <Link to="/blogs">
              <li
                style={{
                  fontSize: 17,
                  fontFamily: "Noah Grotesque Regular",
                }}
              >
                Blogs
              </li>
            </Link>
          </ul>

          <ul className={"company " + company} id="product-names">
            <li className="about-us">
              <Link> ABOUT US</Link>
              <ul>
                <Link to="/about">
                  <li>About Exclusive Fabrics</li>
                  <li>Leadership</li>
                  <li>Facilities</li>
                </Link>
              </ul>
            </li>
            <li>
              <Link> BRANDS </Link>
              <ul>
                <li>Half Price Drapes</li>
              </ul>
            </li>
            <li>
              <Link> CAREER</Link>
              <ul>
                <li>Careers</li>
              </ul>
            </li>
            <li>
              <Link>CONTACT US</Link>
              <ul>
                <Link to="/contact_us">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>

        <center>
          <div className="logo-section">
            <Link to="/">
              <img
                alt="logo"
                style={{ opacity: 1 }}
                src={display === "show" ? logo : props.st.logo}
              ></img>
            </Link>
          </div>
        </center>

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
              onMouseEnter={() => {
                check();
                showCompany();
                props.makeBlur();
              }}
              onMouseLeave={() => {
                dontShowCompany();
                props.removeBlur();
              }}
              style={{ color: props.st.color }}
              className={"sub " + display}
              id="sub"
            >
              COMPANY
            </li>
          </ul>
        </div>
        <AdminControls
          st={props.st}
          token={isToken}
          display={display}
          handleLoginClick={props.handleLoginClick}
        />
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
