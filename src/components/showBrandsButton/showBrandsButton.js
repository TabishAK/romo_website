import "./showBrandsButton.scss";
const ShowBrandsButton = () => {
  return (
    <div id="container">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Show Brands</span>
      </button>
    </div>
  );
};

export default ShowBrandsButton;
