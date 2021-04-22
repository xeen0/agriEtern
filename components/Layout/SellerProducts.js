import Carousel from 'react-multi-carousel';
import { ProductCard } from '../shared';
const SellerProducts = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return (
      <div style={{margin:"10%"}}>
        <h1 style={{textAlign:"center",padding:10}}> Super Offer</h1>
      <Carousel
        arrows
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        // infinite={true}
        autoPlaySpeed={100}
        keyBoardControl={true}
        // customTransition="all .1"
        transitionDuration={100000}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="1"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="2"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="3"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="4"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="5"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="6"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="6"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="7"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="8"/>
        <ProductCard src="/images/Products/fruit_01.jpg" title="fruits" rate="9"/>


      </Carousel>
      </div>
      )
}
export default SellerProducts