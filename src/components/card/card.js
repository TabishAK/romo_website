import "./card.scss";
import im from "../../images/banner/1.jpg";
const Card = () => {
  return (
    <div class="blog-grid boxed grid-3">
      <figure class="blog-grid-image">
        <a href="https://stockie.clbthemes.com/4-reasons-why-you-should-purchase-stockie-theme/">
          <div
            class="blog-image"
            style={{
              "background-image": `url(${im})`,
            }}
          ></div>
        </a>
      </figure>
      <div class="blog-grid-content">
        <div class="tags">
          <a
            class="tag brand-bg-color"
            href="https://stockie.clbthemes.com/category/fashion/"
          >
            Fashion
          </a>
        </div>
        <div class="post-details">
          <span class="author">Colabrio</span>
          <span class="date">February 15, 2019</span>
        </div>
        <h3 class="blog-grid-headline">
          <a href="https://stockie.clbthemes.com/4-reasons-why-you-should-purchase-stockie-theme/">
            4 reasons why you should purchase Stockie theme
          </a>
        </h3>
        <p>
          Creative curves &amp; disruptive Valley at ramps ecosystem
          infrastructure backing seed round bandwidth series...
        </p>
        <a
          href="https://stockie.clbthemes.com/4-reasons-why-you-should-purchase-stockie-theme/"
          class="btn btn-link brand-color-hover"
        >
          Read More <i class="ion-right ion ion-ios-arrow-forward"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
