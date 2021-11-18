import { ImAirplane, ImLocation2 } from "react-icons/im";
import { FaBriefcaseMedical } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { GiMoneyStack, GiCoffeeCup } from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";
import "./eff_benefits.scss";

const Eff_Benefits = () => {
  return (
    <div class="pagecontainer">
      <div class="benefitscontainer container">
        <h2>Benefits of being EFF Employee</h2>
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <FaBriefcaseMedical />
            <h3>competitive Insurance</h3>
            <p>
              We provide health, dental and vision insurance options.
              Complementary life insurance is included too!
            </p>
          </div>
          <div className="col-xl-3 col-lg-4">
            <ImAirplane />
            <h3>paid time off</h3>
            <p>
              We believe that if you work hard, you get to play hard too. Enjoy
              paid time off in addition to all main holidays.
            </p>
          </div>
          <div className="col-xl-3 col-lg-4">
            <GiMoneyStack />
            <h3>retirement options</h3>
            <p>
              We care about your retirement and give you the freedom to
              customize your 401(k) options.
            </p>
          </div>
          <div className="col-xl-3 col-lg-4">
            <RiShirtFill />
            <h3>casual attire</h3>
            <p>
              We keep it classy yet casual, so feel free to wear what you feel
              comfortable in!
            </p>
          </div>

          <div className="col-xl-3 col-lg-4">
            <GiCoffeeCup />
            <h3 id="bottom-adjustment">coffee & tea bar</h3>
            <p>
              Get the juices flowing every morning with complimentary coffee and
              tea.
            </p>
          </div>
          <div className="col-xl-3 col-lg-4">
            <BsFillHouseFill />
            <h3 id="bottom-adjustment">community</h3>
            <p>
              We host happy hours, employee appreciation events, and some
              awesome team building events.
            </p>
          </div>
          <div className="col-xl-3 col-lg-4">
            <ImLocation2 />
            <h3 id="location">
              <span>California location:</span>
              <br />
              los angeles
            </h3>
            <p>
              Our Hawthorne location is located in the heart of sunny Los
              Angeles, just 15 minutes from the beach!
            </p>
          </div>
          <div className="col-xl-3 col-lg-4">
            <ImLocation2 />
            <h3 id="location">
              <span>Texas location:</span>
              <br />
              north austin
            </h3>
            <p>
              Our large North Austin location has plenty of free parking away
              from the crowds. There’s a killer Donut shop down the road too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eff_Benefits;
