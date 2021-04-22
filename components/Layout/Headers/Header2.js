import Header2Styles from '../../../styles/Header2.module.css'
import {FiSearch} from 'react-icons/fi'
const Header2 = () => {
  return (
    <div className={Header2Styles.container}>
      <div className={Header2Styles.inputContainer}>  
      <input placeholder="search" className={Header2Styles.textBox} />
      <FiSearch className={Header2Styles.icon}/>
      </div>
    </div>
  );
};

export default Header2