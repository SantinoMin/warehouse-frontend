//rfce로 기본 세팅
// 페이지 가져오기
import MainPage from '@/pages/index/index.tsx';
import BookmarkPage from '@pages/bookmark/index';
import CommonHeader from './components/common/header/CommonHeader';
import LocationRegister from './pages/index/components/LocationRegister';
import LocationSearch from './pages/index/components/LocationSearch';
import ProductRegister from './pages/index/components/ProductRegister';

// Brouwer 전체 설정
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// atom 설정
import { useAtom } from "jotai/react";
import { useLocation } from "react-router";
import { userAtom } from "./recoil/atoms/atom";

function App() {

  const [path, setPath] = useState(false);
  const [user, setUser] = useAtom(userAtom);
  const {pathname} = useLocation();
  

  // 로그인 페이지는 헤더 안 보이게 하기 (보류)
  console.log(location.pathname);
   if (location.pathname === "loginBranch") setPath(false);
   else if (location.pathname !== "loginBranch") setPath(true);

   useEffect(()=>{
    // route에 의해서, pathname이 바뀔 때마다 실행
    if (pathname === "/findPassword") {
      setPath(false);
    }
    else if (pathname.includes("newPassword")) {
      setPath(false);
      console.log("pathname includes newPassword, setPath -> false") ;
    }
    else if (pathname !== "/findPassword") setPath(true);
  }, [pathname])

  return (
    <RecoilRoot>

    <BrowserRouter>
    // 로그인한 조건에 따라서 페이지를 다르게 보여주기 (쿠팡 본사, 지점 진행 시, 나누기)
    // 우선 나누지 않고 commonHeader로 설정
    {user.roles === "" && (path === true ? <CommonHeader /> : null)}

      <Routes>
    {/* Main 페이지 */}
        <Route index path="/" element={<MainPage />}></Route>
        <Route index path="/bookmark" element={<BookmarkPage />}></Route>

    {/* 상품 조회 및 등록 */}
        {/* <Route index path="/product/search" element={<ProductSearch />}></Route> */}
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

