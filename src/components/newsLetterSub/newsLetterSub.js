import "./newsLetterSub.scss";
import Button1 from "./../buttons/button1";
const NewsLetterSub = () => {
  return (
    <div className="container newsletter-subscription">
      <h4>Subscribe to our Newsletter</h4>
      <p>
        Discover the latest news, from new product launches and events, to
        inspiring updates.
        <br /> All information will be used by The Romo Group only and will not
        be passed on to third parties.
      </p>

      <center>
        <Button1 />
      </center>
    </div>
  );
};

export default NewsLetterSub;
