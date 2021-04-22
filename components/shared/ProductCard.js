import {Card ,Button} from 'react-bootstrap'
const ProductCard = ({img,title,rate}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="images/Products/fruit_01.jpg"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {rate}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard