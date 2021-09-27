import logo from "../../images/logo_updated/eff_logos2.png";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.scss";
const Navbar = (props) => {
  const [display, setDisplay] = useState();
  const [products, setProducts] = useState();
  const [brand, setBrand] = useState();
  const [whereToBuy, setWhereToBuy] = useState();
  const [company, setCompany] = useState();
  const [beInspried, setBeInspried] = useState();
  const axios = require("axios");
  const [height, setHeight] = useState("22rem");
  const [mainCategories, setMainCategories] = useState();
  const [subCategories, setSubCategories] = useState();
  const link = "http://54.183.217.110/";

  useEffect(() => {
    axios
      .post(link + "subCategories/")
      .then((response) => {
        setSubCategories(response.data);
        return axios.post(link + "mainCategory/");
      })
      .then((response) => {
        setMainCategories(response.data);
      })
      .catch((error) => console.log(error.response));
  }, []);

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
    setHeight("22.5rem");
  };

  const showCompany = () => {
    setCompany("show-company");
    setProducts("");
    setBeInspried("");
    setWhereToBuy("");
    setHeight("19rem");
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
    setHeight("12.5rem");
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
    setHeight("19rem");
  };

  const dontShowWhereToBuy = () => {
    // setWhereToBuy("");
  };

  // const downloadPdf = () => {

  // };

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
            <Link to="#">
              <li
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Noah Grotesque Regular",
                }}
              >
                Show Brouchers
              </li>
            </Link>

            <Link to="#">
              <li
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Noah Grotesque Regular",
                }}
              >
                Video Library
              </li>
            </Link>

            <Link to="/blogs">
              <li
                style={{
                  textTransform: "uppercase",
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
                </Link>
              </ul>
            </li>
            <li>
              <Link> BRANDS </Link>
              <ul>
                <li>Loom</li>
                <li>Half Price Drapes</li>
                <li>Half Price Linens</li>
                <li>Sierra Textiles</li>
              </ul>
            </li>
            <li>
              <Link> CAREER</Link>
              <ul>
                <li>Careers</li>
                <li>Leadership</li>
                <li>Facilities</li>
              </ul>
            </li>
            <li>
              <Link>CONTACT US</Link>
              <ul>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="logo-section">
          <Link to="/">
            <img
              alt="logo"
              style={{ opacity: 1 }}
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
