import { useNavigate } from 'react-router-dom';
import styles from './CommonHeader.module.scss';

function CommonHeader() {

  const navigate = useNavigate()

  const moveToPage = (filter: string) => {
    if(filter === 'main') {
      navigate('/')
    } else if(filter==='bookmark'){
    navigate('/bookmark')
    }
  }


  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox} onClick ={() => {moveToPage('main')}}>
        <img src="src/assets/images/warehouse.png" alt="" className={styles.header__logoBox__logo} />
        <span className={styles.header__logoBox__title}>Lager Logistik</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>프로필</button>
        <button className={styles.header__profileBox__userName} onClick ={()=> {moveToPage('bookmark')}}>더보기</button>
        <span className={styles.header__profileBox__userName}>
          santino | 매니저
        </span>
        <img src="src/assets/images/workers.png" alt="no profile Image" className={styles.header__profileBox__profile}/>
      </div>
    </header>
  );
}

export default CommonHeader;
