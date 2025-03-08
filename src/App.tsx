//rfce로 기본 세팅
import MainPage from '@/pages/index/index.tsx';
import BookmarkPage from '@pages/bookmark/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LocationRegister from './pages/index/components/LocationRegister';
import LocationSearch from './pages/index/components/LocationSearch';
import ProductRegister from './pages/index/components/ProductRegister';
import ProductSearch from './pages/index/components/ProductSearch';

function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
    
      <Routes>
    {/* Main 페이지 */}
        <Route index path="/" element={<MainPage />}></Route>
        
        <Route index path="/bookmark" element={<BookmarkPage />}></Route>

    {/* 상품 조회 및 등록 */}
        <Route index path="/product/search" element={<ProductSearch />}></Route>
        <Route index path="/product/register" element={<ProductRegister />}></Route>

    {/* 위치 조회 및 등록 */}
        <Route index path="/location/search" element={<LocationSearch />}></Route>
        <Route index path="/location/register" element={<LocationRegister />}></Route>

      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
