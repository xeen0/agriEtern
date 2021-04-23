import Head from "next/head";
//styling
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

//components
import { 
  Carousel, 
  SellerProducts,
  FeaturedProduct,
  Review
} from "../components";

export default function Home() {
  return (
    <div>
      <Carousel />
      <SellerProducts/>
      <FeaturedProduct/>
      <Review/>
    </div>
  );
}
