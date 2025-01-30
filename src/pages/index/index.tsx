import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import { useEffect, useState } from 'react';
import CommonHeader from '../../components/common/header/CommonHeader';
import Card from './components/Card';
//CSS

import axios from 'axios';
import styles from './styles/index.module.scss';
import { CardDTO } from './types/card';

function index() {
  const [imgUrls, setImgUrls] = useState([]);
  const getData = async () => {
    // 오픈 API 호출
    const API_URL = 'https://api.unsplash.com/search/photos';
    const API_KEY = 'EwlkH-pqy26hHhLtU5hSQ_rooeWR9Z79Np69uCK4q8A';
    const PER_PAGE = 30;

    const searchValue = 'Korea';
    const pageValue = 100;

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );

      console.log(res);
      //res.data.result라는 배열을 활용할 예정

      if (res.status === 200) {
        setImgUrls(res.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 위의 API방법을 아래처럼 파라미터 객체를 사용하여 적용 가능
  // const getData = async () => {
  //   try {
  //     const response = await axios.get(API_URL, {
  //       params: {
  //         query: searchValue,       // 검색어
  //         client_id: API_KEY,       // API 키
  //         page: pageValue,          // 페이지 번호
  //         per_page: PER_PAGE        // 한 페이지당 항목 개수
  //       }
  //     });
  
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data from Unsplash:", error);
  //   }
  // };
  
  // fetchPhotos();

  const cardList = imgUrls.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />;
  });

  useEffect(() => {
    getData();
  }, []);

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
        <div className={styles.page__contents__imageBox}>{cardList}</div>
      </div>

      {/* 공통 푸터 UI 부분 */}
      <CommonFooter />
    </div>
  );
}
export default index;
