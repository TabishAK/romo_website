import { useState } from "react";
import "./sidebar.scss";
import Sidebar from "react-sidebar";
import { GiCrossedBones } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";

const Sideba = (props) => {
  const [sidebarOpen, handleSidebarOpen] = useState(false);
  // const [width] = useState();

  const isNotMobile = useMediaQuery({ maxWidth: 1010 });
  const styles = {
    root: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
    },
    sidebar: {
      display: isNotMobile ? "block" : "none",
      width: "40%",
      background: "white",
      zIndex: 100,
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
          <h5>Navigate</h5>
          <GiCrossedBones onClick={props.closeRightMenu} />
        </div>
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
