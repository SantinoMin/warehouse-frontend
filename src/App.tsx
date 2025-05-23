//rfce로 기본 세팅

// 전역 scss 설정
import './App.scss';

// 페이지 가져오기
import MainPage from '@/pages/index/home';
import CommonHeader from './components/common/header/CommonHeader';
import LocationRegister from './pages/index/components/LocationRegister';
import LocationSearch from './pages/index/components/LocationSearch';
import ProductRegister from './pages/index/components/ProductRegister';

// Brouwer 전체 설정
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// atom 설정
import CommonFooter from "./components/common/footer/CommonFooter";
import CommonSideBar from './components/common/sidebar/CommonSideBar';
function App() {

  // const [path, setPath] = useState(false);
  // const [user, setUser] = useAtom(userAtom);
  

  // 로그인 페이지는 헤더 안 보이게 하기 (보류)
  // console.log(location.pathname);
  //  if (location.pathname === "loginBranch") setPath(false);
  //  else if (location.pathname !== "loginBranch") setPath(true);

  //  useEffect(()=>{
  //   // route에 의해서, pathname이 바뀔 때마다 실행
  //   if (pathname === "/findPassword") {
  //     setPath(false);
  //   }
  //   else if (pathname.includes("newPassword")) {
  //     setPath(false);
  //     console.log("pathname includes newPassword, setPath -> false") ;
  //   }
  //   else if (pathname !== "/findPassword") setPath(true);
  // }, [pathname])

  return (
    <RecoilRoot>
    <BrowserRouter>
    <div className="page">
      <header className="page_header">
      <CommonHeader />
      </header>
      
      <div className="page_main">
        <aside className="page_sidebar">
      <CommonSideBar />
      </aside>

    <main className="page_content">
      <Routes>  
    {/* Main 페이지 */}
        <Route index path="/" element={<MainPage />}></Route>
        {/* <Route index path="/bookmark" element={<BookmarkPage />}></Route> */}

    {/* 상품 조회 및 등록 */}
        <Route index path="/product/register" element={<ProductRegister />}></Route>

    {/* 위치 조회 및 등록 */}
        <Route index path="/location/search" element={<LocationSearch />}></Route>
        <Route index path="/location/register" element={<LocationRegister />}></Route>

      </Routes>
      </main>
      </div>

      <footer className="page_footer">
    <CommonFooter />
    </footer>
    </div>
    </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

