// src/pages/index/index.tsx
import DetailDialog from '@/components/common/dialog/DetailDialog';
import Layout from '@/components/layout/Layout';
import { imageData } from '@/recoil/selectors/imageSelector';
import React, { useMemo, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import Card from './components/Card';
import Loading from './components/Loading';
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