//rfce로 기본 세팅
import MainPage from '@pages/index/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
