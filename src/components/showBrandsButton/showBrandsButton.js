import "./showBrandsButton.scss";
const ShowBrandsButton = () => {
  return (
    <div id="container-brands-button">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Show Brands</span>
      </button>
    </div>
  );
};

export default ShowBrandsButton;
