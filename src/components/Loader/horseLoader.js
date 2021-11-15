import horseGIF from "../../images/horse.gif";

const HorseLoader = () => {
  return (
    <div className="loader">
      <img src={horseGIF} style={{ width: "15%" }} alt="loading" />
      <h1>Loading ...</h1>
    </div>
  );
};

export default HorseLoader;
