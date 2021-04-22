import FooterStyles from "../../../styles/Header1.module.css";

const Footer1 = () => {
  return (
    <div className={FooterStyles.container} style={{padding:"25px" ,backgroundColor:"#1E1E1E"}}>
      <div className={FooterStyles.context}>
        <div>Copyright © 2017 Fruit Store - All Rights Reserved.</div>
      </div>
      <div className={FooterStyles.context}>
        <div>Privacy Policy &#x7C; Term and Conditions</div>
      </div>
    </div>
  );
};
export default Footer1;
