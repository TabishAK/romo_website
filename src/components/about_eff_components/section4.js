import history_1 from "../../images/about_eff/history/1.jpg";
import history_2 from "../../images/about_eff/history/2.jpg";

const Section4 = () => {
  return (
    <div className="section-4 mt-5">
      <h1>History</h1>
      <p className="mt-3">
        In 1902, Robert Mould, who gave his name to the company, started a
        small-scale furniture manufacturing business in Nottingham, England. By
        the 1930s, the company had become wholesalers to the upholstery
        industry, supplying furnishing fabrics and components for the
        manufacture of furniture. The company continued to evolve until
        eventually the upholstery manufacturing side of the business ceased
        completely and the supply of furnishing fabrics became the company’s
        primary focus. In the 1980s Romo started its own in-house design studio,
        injecting a more creative approach to design which redefined Romo as the
        design-led company it is known as today.
      </p>

      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
          <img src={history_1} alt="" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
          <img src={history_2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
