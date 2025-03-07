import WarehouseIcon from '@mui/icons-material/Warehouse';
import { useEffect, useRef, useState } from "react";
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
  const width = 300;
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number[]>([]); // 배열로 변경
  const side = useRef<HTMLDivElement | null>(null);

  // 사이드바 메뉴 
  const menuItems: NavigationItem[] = [
    {
      index: 0,
      label: "상품 관리",
      children: [
        { index: 0, label: "상품 등록", path: "/products/register" },
        { index: 1, label: "상품 수정/삭제", path: "/products/edit" },
      ],
    },
    {
      index: 1,
      label: "로케이션 관리",
      children: [
        { index: 0, label: "로케이션 등록", path: "/locations/add" },
      ],
    },
  ];


  const toggleSubMenu = (index) => {
    // 이미 열려있는 메뉴인지 확인
    if (openSubMenuIndex.includes(index)) {
      // 열려있으면 닫기
      setOpenSubMenuIndex(openSubMenuIndex.filter((i) => i !== index));
    } else {
      // 닫혀있으면 열기
      setOpenSubMenuIndex([...openSubMenuIndex, index]);
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
      <div ref={side}  className={styles.container__sidebar} 
      // style={
      //   { transform: `translateX(${-xPosition}px)`}
      //   }
        >


         {/* 버튼 열고 닫기 */}
          <button onClick={toggleMenu} className={styles.container__sidebar__button} >
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
          {menuItems.map((item) => (
            <div key={item.index}>
              <div
                className={styles.container__sidebar__content__sidebar__menu__item}
                onClick={() => toggleSubMenu(item.index)}
              >
                <span>{item.label}</span>
                <span><img src="/src/assets/icons/icon-arrowRight.svg" alt="" /></span>
                
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