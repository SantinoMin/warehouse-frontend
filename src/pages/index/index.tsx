// src/pages/index/index.tsx
import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSideBar from '@/components/common/sidebar/CommonSideBar';
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductRegister from './components/ProductRegister';
import ProductSearch from './components/ProductSearch';
import './index.scss';

// 메인 페이지 컴포넌트
const MainContent: React.FC = () => {
  return (
    <div className="main__content">
      <h1>창고 관리 시스템에 오신 것을 환영합니다</h1>
      <p>왼쪽 사이드바에서 원하는 메뉴를 선택하세요.</p>
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <Router>
      <div className="page">
        <CommonHeader />

        <div className="page__main__content">
          <div className="page__sidebar">
            <CommonSideBar />
          </div>
          
          <div className="page__content__wrapper">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/products" element={<ProductSearch />} />
              <Route path="/product/register" element={<ProductRegister />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        
        <CommonFooter />
      </div>
    </Router>
  );
};

export default Index;