import { useMediaQuery } from "react-responsive";
import { GiCrossedBones } from "react-icons/gi";
import MenuContent from "./menuContent";
import Sidebar from "react-sidebar";
import "./sidebar.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Sideba = (props) => {
  const [subCategories, setSubCategories] = useState();
  const [mainCategories, setMainCategories] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AMAZON_SERVER_LINK + "subCategories/")
      .then((response) => {
        setSubCategories(response.data);
        return axios.get(
          process.env.REACT_APP_AMAZON_SERVER_LINK + "mainCategory/"
        );
      })
      .then((response) => {
        setMainCategories(response.data);
      })
      .catch((error) => console.log(error.response));
  }, [null]);

  const isNotMobile = useMediaQuery({ maxWidth: 1155 });
  const isMobile = useMediaQuery({ maxWidth: 576 });

  const styles = {
    root: {
      position: "inherit",
      top: 0,
      left: 0,
      height: "176%",
      right: 0,
      bottom: 0,
      overflow: "hidden",
    },
    sidebar: {
      display: isNotMobile ? "block" : "none",
      width: isMobile ? "50%" : "40%",
      background: "#e6e6e6",
      zIndex: 101,
      position: "absolute",
      top: 0,
      bottom: 0,
      transition: "transform .3s ease-out",
      WebkitTransition: "-webkit-transform .3s ease-out",
      willChange: "transform",
      overflowY: "auto",
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      transition: "left .3s ease-out, right .3s ease-out",
    },
    overlay: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      visibility: "hidden",
      transition: "opacity .3s ease-out, visibility .3s ease-out",
      backgroundColor: "rgba(0,0,0,.3)",
    },
    dragHandle: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      bottom: 0,
    },
  };

  function content() {
    return (
      <div className="sidebar-content">
        <div className="heading-and-cross container">
          <GiCrossedBones onClick={props.closeRightMenu} />
        </div>
        <MenuContent
          subCategories={subCategories}
          mainCategories={mainCategories}
        />
      </div>
    );
  }
  return (
    <Sidebar
      className="hello"
      pullRight={true}
      touch={true}
      sidebar={content()}
      open={props.display}
      // onSetOpen={onSetSidebarOpen}
      styles={styles}
    ></Sidebar>
  );
};

export default Sideba;
