import Footer2Styles from "../../../styles/Footer2.module.css";
import { BsFillHouseDoorFill } from "react-icons/bs";
import {FaFacebook} from 'react-icons/fa'
const Footer2 = () => {
  return (
    <div className={Footer2Styles.container}>
      <div className={Footer2Styles.section1}>
        <div>
          <h5>About Us</h5>
          <img src="images/Footer/about.png" />
          <div style={{ fontSize: "12px", color: "#C2C2C2", padding: "3px" }}>
            Our products are freshly harvested, washed ready for box and finally{" "}
            <span style={{ color: "green" }}>[...]</span>
          </div>
        </div>
        <div>
          <h5> Information</h5>
          <li> New Products</li>
          <li> New Products</li>
          <li> New Products</li>
          <li> New Products</li>
          <li> New Products</li>
        </div>
        <div>
          <h5> Instagram</h5>
          <div className={Footer2Styles.section3}>
            {[1, 2, 3, 4, 5, 6].map((x) => {
              return (
                <img
                  src={`images/Footer/in${x}.png`}
                  style={{ padding: "5px" }}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h5>Contact Us</h5>
          <div style={{ display: "flex", color: "green", margin: "10px" }}>
            <BsFillHouseDoorFill />
            <div style={{ color: "#C2C2C2", paddingLeft: "10px" }}>
              {" "}
              Our business address is 1063 Freelon Street, San Francisco
            </div>
          </div>
          <div style={{ display: "flex", color: "green", margin: "10px" }}>
            <BsFillHouseDoorFill />
            <div style={{ color: "#C2C2C2", paddingLeft: "10px" }}>
              {" "}
              Our business address is 1063 Freelon Street, San Francisco
            </div>
          </div>
          <div style={{ display: "flex", color: "green", margin: "10px" }}>
            <BsFillHouseDoorFill />
            <div style={{ color: "#C2C2C2", paddingLeft: "10px" }}>
              {" "}
              Our business address is 1063 Freelon Street, San Francisco
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4>Follow US</h4>
          <FaFacebook size="2em"/>
          <FaFacebook size="2em"/>
          <FaFacebook size="2em"/>
          <FaFacebook size="2em"/>
          <FaFacebook size="2em"/>

        </div>
      </div>
    </div>
  );
};

export default Footer2;
