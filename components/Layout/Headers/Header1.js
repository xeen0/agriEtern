import HeaderStyles from "../../../styles/Header1.module.css";
import  {BsFillPersonFill } from 'react-icons/bs'
const Header1 = () => {
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.context}>
        <div className={HeaderStyles.content}>Language <spam>&#8964; </spam>&#x7C;</div>
        <div className={HeaderStyles.content}>Language &#8964; &#x7C;</div>
      </div>
      <div className={HeaderStyles.context}>
      <div className={HeaderStyles.content}><spam style={{color:"#66CC33"}}>
        <BsFillPersonFill/>
        </spam> My Account &#x7C;</div>
        <div className={HeaderStyles.content}><spam style={{color:"#66CC33"}}>
        <BsFillPersonFill/>
        </spam> My Account &#x7C;</div>
        <div className={HeaderStyles.content}><spam style={{color:"#66CC33"}}>
        <BsFillPersonFill/>
        </spam> My Account &#x7C;</div>

      </div>
    </div>
  );
};

export default Header1;
