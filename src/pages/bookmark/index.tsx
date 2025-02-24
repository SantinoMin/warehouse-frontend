import CommonHeader from '@/components/common/header/CommonHeader';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import styles from './styles/index.module.scss';

function index() {

const [date, setDate] = useState([]);
const getDate = () => {}


useEffect(() => {
  getDate()
},[])
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      <main className={styles.page__contents}>
        <Card />

      </main>
    </div>
  )
}

export default index