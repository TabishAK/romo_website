import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import logo from "../../images/logo/logo-white.png";
import NavHeaders from "./../navHeaders/navHeaders";
import { useState } from "react";
const Navbar = (props) => {
  const [display, setDisplay] = useState();

  const check = () => {
    setDisplay("show");
  };

  const check2 = () => {
    setDisplay("");
  };

  return (
    <>
      <div className="nav-bar container-fluid">
        <div
          className={"menus " + display}
          onMouseEnter={check}
          onMouseLeave={check2}
        >
          <ul className="product-names" id="product-names">
            <li>
              FABRICS
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
              CURTAINS & DRAPES
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
              HOME DECORE
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
              BEDDING
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
              HARDWARE
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
          <img src={logo}></img>
        </div>
        <div className="nav-items">
          <ul className="main">
            <li className={"sub " + display} id="sub" onMouseEnter={check}>
              PRODUCTS
            </li>
            <li className={"sub " + display} id="sub">
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
              <FaUserAlt style={{ fontSize: "18px", color: "white" }} />
            </li>
            <li>
              <FaHeart style={{ fontSize: "18px", color: "white" }} />
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
