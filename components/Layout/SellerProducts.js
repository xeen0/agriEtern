import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Product2 from "./SellerProducts/Product2";
import Product3 from "./SellerProducts/Product3";
import Product1 from "./SellerProducts/Products1";
const Product = ({ id }) => {
  console.log(id)
  switch (id) {
    case 1:
      return <Product1 />;
    case 2:
      return <Product2 />;
    case 3:
      return <Product3 />;
    default:
      return <Product1 />;
  }
};
const SellerProducts = () => {
  const [id, setId] = useState(1);
  return (
    <div style={{ margin: "10%" }}>
      <h1 style={{ textAlign: "center", padding: 10 }}>
        {" "}
        Best Sellers Product
      </h1>
      <div>
        <Navbar
          expand="sm"
          className="nav-bar"
          style={{ backgroundColor: "white" }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link
                onClick={() => {
                  setId(1);
                }}
                style={{color:id==1?'black':''}}
              >
                Dried Products
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setId(2);
                }}
                style={{color:id==2?'black':''}}
              >
                Fruits
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setId(3);
                }}
                style={{color:id==3?'black':''}}

              >
                Juice
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {<Product id={id} />}
    </div>
  );
};
export default SellerProducts;
