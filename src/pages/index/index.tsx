import DetailDialog from '@/components/common/dialog/DetailDialog';
import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import { useMemo, useState } from 'react';
import CommonHeader from '../../components/common/header/CommonHeader';
import Loading from './components/Loading';
//CSS

import { imageData } from '@/recoil/selectors/imageSelector';
import { useRecoilValueLoadable } from 'recoil';
import Card from './components/Card';
import styles from './styles/index.module.scss';
import { CardDTO } from './types/card';

function index() {
  // const imgSelector = useRecoilValue(imageData); // imageData부분 불러오기
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false); // 이미지 상세 다이얼로그 발생(관리) state 

  const CARD_LIST = useMemo( () => {  // useMemo : 반복적으로 사용되는 로직은, 실행될 때 마다 가져와서 사용하는게 아니라 
                                      // 그 데이터를 어딘가에 저장해놓고, 거기 저장되어 있는 데이터를 사용 (데이터 변경되지 않는한 사용)
    // imgSelector.state = hasValue or loading                                  
    if(imgSelector.state === 'hasValue'){
      const result = imgSelector.contents.results.map((card: CardDTO) => {
          return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>;
    })  
    return result 
  } else {
        return <Loading />
          
        // path통해서 imgSelector의 state가 hasValue를 가지기 전에 loading...텍스트 출력됨 
        // 만약 hasValue를 가지는데에 3초가 걸린다면, 3초 전까지는 loading... 메시지가 보임
      }
    
  },[imgSelector])

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      {/* 공통 네비게이션 UI 부분 */}
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introbox}>
          <div className={styles.page__contents__wrapper}>
            <span className={styles.wrapper__title}>Product Search</span>
            <span className={styles.wrapper__desc}>
              상품명을 검색하세요 <br />
              상품의 정보와 위치를 보여줍니다.
            </span>
            {/* 검색창 UI 부분 */}
            <CommonSearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>

      {/* 공통 푸터 UI 부분 */}
      {/* <CommonFooter /> */}

      {/* Suspense 비동기 작업이 완료될 때까지 로딩 상태를 표시 */}
      {/* <Suspense fallback={<div>로딩 중...</div>}> */}
      <CommonFooter />
      {/* </Suspense> */}
      {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
      
    </div>
  );
}
export default index;
