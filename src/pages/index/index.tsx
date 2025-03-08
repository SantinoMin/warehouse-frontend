// src/pages/index/index.tsx
import React, { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import DetailDialog from '@/components/common/dialog/DetailDialog';
import Loading from './components/Loading';
import { imageData } from '@/recoil/selectors/imageSelector';
import { useRecoilValueLoadable } from 'recoil';
import Card from './components/Card';
import { CardDTO } from './types/card';
import ProductSearch from './components/ProductSearch';


const Index: React.FC = () => {
  const imgSelector = useRecoilValueLoadable(imageData);
  const [imgData, setImgData] = useState<CardDTO>();
  const [open, setOpen] = useState<boolean>(false);

  const cardList = useMemo(() => {
    if (imgSelector.state === 'hasValue') {
      return imgSelector.contents.results.map((card: CardDTO) => (
        <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />
      ));
    } else {
      return <Loading />;
    }
  }, [imgSelector]);

  return (
    <Layout>
      <ProductSearch />
      {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
    </Layout>
  );
};

export default Index;