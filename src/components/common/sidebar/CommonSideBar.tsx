import WarehouseIcon from '@mui/icons-material/Warehouse';
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';
import styles from "./CommonSideBar.module.scss";

interface NavigationItem {
  index: number;
  label: string;
  children?: {
    index: number; // children 내부 index를 선택적 속성으로 변경
    label: string;
    path: string;
  }[];
}

const CommonSideBar = () => {
  const width = 320;
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number[]>([]); // 배열로 변경
  const side = useRef<HTMLDivElement | null>(null);

  // {}는 객체인데 키-값 쌍 저장, 동적 속성 관리, 구조화된 데이터 표현, React 상태 관리, 크기 유연성 등 다양한 장점을 제공
  const [isClick, setIsClick] = useState({});

  // 사이드바 메뉴 
  const menuItems: NavigationItem[] = [
    {
      index: 0,
      label: "상품 관리",
      children: [
        { index: 0, label: "상품 조회", path: "/product/search" },
        { index: 1, label: "상품 등록", path: "/product/register" },
      ],
    },
    {
      index: 1,
      label: "로케이션 관리",
      children: [
        { index: 0, label: "로케이션 조회", path: "/location/search" },
        { index: 1, label: "로케이션 등록", path: "/location/register" }
      ],
    },
  ];


  const toggleSubMenu = (index) => {
    // 이미 열려있는 메뉴인지 확인
    if (openSubMenuIndex.includes(index)) {
      // 열려있으면 닫기
      setOpenSubMenuIndex(openSubMenuIndex.filter((i) => i !== index));
      setIsClick({ ...isClick, [index]: false }); // 해당 인덱스의 클릭 여부 변경
    
    } else {
      // 닫혀있으면 열기
      setOpenSubMenuIndex([...openSubMenuIndex, index]);

      setIsClick({ ...isClick, [index]: true }); // 해당 인덱스의 클릭 여부 변경
    }
  };
  
  // button 클릭 시 토글
  const toggleMenu = () => {

    console.log('Toggle clicked, current isOpen:', isOpen);
    
    if (xPosition > 0) {
      console.log(width)
      setX(0);
      setIsOpen(true);
      console.log("toggle on")
    } else {
      console.log(width)
      setX(width);
      setIsOpen(false);
      console.log("toggle off")
    }
  };
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e:any) => {
    if (!side.current) return; 

    let sideArea = side.current;
    let sideChildren = sideArea.contains(e.target);
    if (isOpen && (!sideChildren)) {
      console.log(width)
       setX(width); 
       setIsOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })

  return (
    <div className={styles.container}>
      <div ref={side}  className={styles.container__sidebar} style={{ transform: `translateX(${-xPosition}px)`}}>


         {/* 버튼 열고 닫기 */}
          <button onClick={toggleMenu} className={styles.container__sidebar__button} style={{left: isOpen ? '300px' : '340px' }}>
            {isOpen ? 
            <span className={styles.container__sidebar__button__xbutton}>X</span> : 
            <img src="src/assets/images/frog.png" alt="contact open button" className={styles.container__sidebar__button__openBtn} 
            onClick={(e) => {
              e.stopPropagation(); // 이벤트 버블링 방지
              toggleMenu();
            }}
            />
            }
          </button>
        
        {/* 사이드바 메뉴 */}
        <div className={styles.container__sidebar__content}>
          
          <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', textAlign:'center', width: '100%',paddingRight: '20px'}}>
          <img src="/src/assets/images/safety-icon.png" alt="" style={{width:'60px', height:'60px', margin: '0 auto'}} />
          <h3 style={{color:'grey'}}>상품을 조회하고 <br/> 위치를 지정해보세요!</h3>

          </div> 

          {/* menuItems에 저장해둔 사이드바 메뉴를 각각 보여주기 */}
          {menuItems.map((item) => (

          // 메뉴의 index, 0 또는 1를 key로 설정한 div
            <div key={item.index}>

          {/*  메뉴의 label(상품 관리)를 보여주기 */}
              <div className={styles.container__sidebar__content__sidebar__menu__item}
                onClick={() => toggleSubMenu(item.index)}>
              
              {/* > 버튼 클릭 시, Arrow right -> bottom 변경되도록 */}
                <span>
                { isClick[item.index] ? ( 
                <>  {item.label} <IoMdArrowDropdown/> </>)  : 
                (
                  <>
                {item.label}<IoMdArrowDropright />
                </>
                )}
                </span>
                
                </div>
              
              {openSubMenuIndex.includes(item.index) && item.children && (
              <div className={styles.submenu}>
                {item.children.map((child) => (
                  <Link
                    key={child.index}
                    to={child.path}
                    className={styles.container__sidebar__content__sidebar__menu__item__childItem}
                  >
                   <WarehouseIcon></WarehouseIcon>
                    <span>{child.label}</span>
                    
                  </Link>
                  ))}
                </div>
              )}
          
              </div>
          ))}
        </div>

    </div>

        </div>
  );
};


export default CommonSideBar;