import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './Layout.scss';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div className="page">
            <Header />
            <div className="page__main">
                <div className="page__main__sidebar">
                    <Sidebar />
                </div>
                <div className="page__main__content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout; 