import CommonFooter from '@/components/common/footer/CommonFooter';
import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSideBar from '@/components/common/sidebar/CommonSideBar';
import React, { ReactNode } from 'react';
import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page">
      <CommonHeader />
      <CommonSideBar />
      {children}
      <CommonFooter />
    </div>
  );
};

export default Layout;