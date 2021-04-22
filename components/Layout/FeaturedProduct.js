import Carousel from 'react-multi-carousel';
import FeaturedProductStyles from '../../styles/Featuredproducts.module.css'
import { FeatureCard } from '../shared'
const FeaturedProduct = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div className={FeaturedProductStyles.featuredproduct}>
            <h1 style={{textAlign:"center"}}> Featured Product</h1>
            <div className={FeaturedProductStyles}>
            <Carousel
        arrows
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .1"
        transitionDuration={10000}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
      >
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                </Carousel>

            </div>
        </div>
    )
}

export default FeaturedProduct

