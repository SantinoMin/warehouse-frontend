//rfce로 기본 세팅
import BookmarkPage from '@pages/bookmark/index';
import MainPage from '@pages/index/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
    
      <Routes>
        <Route index path="/" element={<MainPage />}></Route>
        <Route index path="/search/:id" element={<MainPage />}></Route>
        <Route index path="/bookmark" element={<BookmarkPage />}></Route>
        {/* <Route index path="/product" element={<Product />}></Route>
        <Route index path="/location" element={<Location />}></Route> */}

      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
