import DetailDialog from '@/components/common/dialog/DetailDialog';
import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import { useState } from 'react';
import CommonHeader from '../../components/common/header/CommonHeader';
import Card from './components/Card';
//CSS

import { imageData } from '@/recoil/selectors/imageSelector';
import { useRecoilValue } from 'recoil';
import styles from './styles/index.module.scss';
import { CardDTO } from './types/card';

function index() {
  const imgSelector = useRecoilValue(imageData); // imageData부분 불러오기 //<<< useRecoilValue에서 ImageDate에서 가져온 데이터를 넣는거 맞는지
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false); // 이미지 상세 다이얼로그 발생(관리) state 

  // const cardList = imgData.map((card:CardDTO) => {
  //     return <Card data={card} key={card.id} handleDialog={setOpen} ></Card>

  // })

  const CARD_LIST = imgSelector.data.results.map((card: CardDTO) => {
    return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>;
  });

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      {/* 공통 네비게이션 UI 부분 */}
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introbox}>
          <div className={styles.page__contents__wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>

      {/* 공통 푸터 UI 부분 */}
      <CommonFooter />
      {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
      
    </div>
  );
}
export default index;
