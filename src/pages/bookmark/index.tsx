import CommonHeader from '@/components/common/header/CommonHeader';
import { useEffect, useState } from 'react';
import { CardDTO } from '../index/types/card';
import Card from './components/Card';
import styles from './styles/index.module.scss';

function index() {

const [data, setData] = useState([]);
const getDate = () => {
  const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

  if(getLocalStorage || getLocalStorage !== null) {
    setData(getLocalStorage)
  } else {
    setData([])
  }

}


useEffect(() => {
  getDate()
},[])
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      <main className={styles.page__contents}>
        {/* //만약 데이터가 없을 때 */}
        {data.length === 0 ? 
      <div className={styles.page__contents__noData}>조회 가능한 데이터가 없습니다.</div> 
      : ( 
      data.map((item: CardDTO) => {
        return <Card key={item.id} prop={item}/>
      })
    )}    
      </main>
    </div>
  )
}

export default index