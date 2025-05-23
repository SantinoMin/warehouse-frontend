import React from 'react';
import ProductSearch from './components/ProductSearch';

const home: React.FC = () => {

  
  return (
    <div className="page">
      <div className="page__main__content">
        <div className="page__content__wrapper">
          <ProductSearch />
        </div>
      </div>
    </div>
  );
};

export default home;