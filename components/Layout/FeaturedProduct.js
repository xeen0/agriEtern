import Carousel from "react-multi-carousel";
import FeaturedProductStyles from "../../styles/Featuredproducts.module.css";
import { FeatureCard } from "../shared";
const FeaturedProduct = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  }
  return (
    <div className={FeaturedProductStyles.featuredproduct}>
      <h1 style={{ textAlign: "center" }}> Featured Product</h1>
      <div className={FeaturedProductStyles}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProduct;
