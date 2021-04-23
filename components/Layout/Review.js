import { ReviewCard } from "../shared";
import Carousel from 'react-multi-carousel'
const Review = () => {
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
    <div style={{ textAlign: "center", padding: "10%" }}>
      <h1>What People Say</h1>
      <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay={true}
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
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Carousel>
    </div>
  );
};

export default Review;
