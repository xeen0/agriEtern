import Head from "next/head";
//styling
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

//components
import { 
  Navbar, 
  Header1, 
  Header2, 
  Carousel, 
  SellerProducts,
  Footer1,
  Footer2,
  Footer3,
  FeaturedProduct,
  Review
} from "../components";

export default function Home() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Navbar />
      <Carousel />
      <SellerProducts/>
      <FeaturedProduct/>
      <Review/>
      <Footer3/>
      <Footer2/>
      <Footer1/>
      
    </div>
  );
}
