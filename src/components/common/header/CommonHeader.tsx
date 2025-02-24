import { useNavigate } from 'react-router-dom';
import styles from './CommonHeader.module.scss';

function CommonHeader() {

  const navigate = useNavigate()

  const moveToPage = () => {
    navigate('/bookmark')

  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img src="../public/assets/images/image-logo.png" alt="" className={styles.header__logoBox__logo} />
        <span className={styles.header__logoBox__title}>Warehouse-location</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>사진제출</button>
        <button className={styles.header__profileBox__button} onClick = {moveToPage}>북마크</button>
        <span className={styles.header__profileBox__userName}>
          santino | santinomin
        </span>
      </div>
    </header>
  );
}

export default CommonHeader;
