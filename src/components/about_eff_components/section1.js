import logo from "../../images/logo/eff_black.png";
import "./style.scss";

const Section1 = () => {
  return (
    <>
      <div className="row section-1">
        <div className="col-lg-6 col-xl-6">
          <h1 className="mb-5">About Exclusive Fabrics</h1>

          <p className="para-without-image">
            The founding brand of The Romo Group, Romo is renowned for its
            assorted library of classic and contemporary designs and versatile
            plains, offering a diverse style and timeless elegance enriched with
            a sophisticated colour palette.
          </p>
          <p className="para-without-image mt-4">
            Generations of experience and distinctive British design are the
            foundation of the Romo brand. Since establishing its own in-house
            design studio in the 1980s Romo has continued to grow and is now a
            market leader in designer fabrics and wallcoverings.
          </p>
          <div className="para-with-image mt-4">
            <p>
              Led by Design Director Emily Mould, the Romo studio is a
              continuous hub of activity and creativity, an Aladdin’s cave of
              sketches, paintings, fabric and colour charts, the studio walls
              are a constant source of inspiration. Each launch the designers
              research new ideas, finding inspiration in an array of influences
              from travel and fashion to nature and the outdoors.
            </p>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 bg-1"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Section1;
