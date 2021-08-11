import img2 from "../../images/about_eff/backgrounds/about_bg2.jpg";
import img1 from "../../images/about_eff/backgrounds/about_bg.jpg";
import "./style.scss";

const Section2 = () => {
  return (
    <div className="section-2">
      <h1>The experts in fabrics and wallcoverings</h1>
      <p className="mt-5">
        Our reputation for offering excellent designs and outstanding products
        is upheld by our in-house team of talented and experienced designers.
      </p>

      <p>
        With the customer at the forefront of any launch, great consideration
        and thought is put into the designs and colour palette, ensuring that
        collections can be used to create a cohesive scheme for all types of
        home. Each designer plays a key part in the creative process, with
        expert weavers designing innovative woven qualities and talented artists
        creating original prints and wallcoverings. All original artwork is
        intricately hand painted and delicately coloured in our in-house design
        studio, before being sent to expert weavers and printers to create the
        finished pieces of fabric and wallcoverings you see today.
      </p>

      <div className="row mt-5">
        <div className="col-xl-6">
          <img alt="" src={img1} />
        </div>
        <div className="col-xl-6">
          <img alt="" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
