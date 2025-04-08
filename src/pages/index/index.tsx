// src/pages/index/index.tsx
import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSideBar from '@/components/common/sidebar/CommonSideBar';
import { imageData } from '@/recoil/selectors/imageSelector';
import React, { useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import ProductSearch from './components/ProductSearch';
import './index.scss';
import { CardDTO } from './types/card';

const Index: React.FC = () => {
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false);

  // const cardList = useMemo(() => {
  //   if (imgSelector.state === 'hasValue') {
  //     return imgSelector.contents.results.map((card: CardDTO) => (
  //       <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />
  //     ));
  //   } else {
  //     return <Loading />;
  //   }
  // }, [imgSelector]);

  return (
    <div className="page">
      <CommonHeader />

      <div className="main-content">
        <CommonSideBar />
        <div className="content-wrapper">
          <ProductSearch />
          {/* {open && <DetailDialog data={imgData} handleDialog={setOpen} />} */}
        </div>
      </div>
      
      <CommonFooter />
    </div>
  );
};

export default Index;