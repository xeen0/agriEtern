import FeaturedCardStyles from "../../styles/Feturedcard.module.css";
import {Card,Button} from 'react-bootstrap'
const FeaturedCard = ({ img, title, matter, price }) => {
  return (
    <div className={FeaturedCardStyles.cardContainer}>
      <Card style={{ width: "90rem" }}>
          <div style={{display:"flex",padding:"10vw"}}>
        <Card.Img variant="top" src="images/Products/fruit_01.jpg" style={{width:"30%"}}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default FeaturedCard;
