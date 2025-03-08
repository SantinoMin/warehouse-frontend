// src/pages/index/components/ProductSearch.tsx
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar';
import './ProductSearch.scss';

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // 검색 로직 구현
    console.log('검색:', searchTerm);
  };

  return (
    <Layout>
      <div className="page__contents">
        <div className="page__contents__introbox">
          <div className="page__contents__wrapper">
            <span className="wrapper__title">상품 검색</span>
            <span className="wrapper__desc">
              상품명을 검색하세요.
              <br />
              상품의 정보와 위치를 보여줍니다.
            </span>
            <CommonSearchBar />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>검색</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductSearch;