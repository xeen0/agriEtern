import Carousel from 'react-multi-carousel';
import { ProductCard } from '../../shared';
const Product1 = () => {
    const responsive = 
      {
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1,
          partialVisibilityGutter: 30
        }
      }
      return (
      <div style={{margin:"10%"}}>
          <span>Prod1</span>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="container-with-dots"
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
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
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
export default Product1