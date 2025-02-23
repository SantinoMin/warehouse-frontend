import { pageState } from '@/recoil/atoms/pageState';
import { searchState } from '@/recoil/atoms/searchState';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styles from './CommonNav.module.scss';
import navJson from './nav.json';

// Navigation 타입 설정
interface Navigation {
  index: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

function CommonNav() {
  const location = useLocation();
  const [navigation, setNavigaion] = useState<Navigation[]>(navJson);
  // useRecoilState 읽기 쓰기 둘 다 가능한 hook  
  const [page,setPage] = useRecoilState(pageState)  // 초기값을 pageState설정된 값인 1로 설정
  const [search, setSearch] = useRecoilState(searchState)

  useEffect( () => {
    console.log(location.pathname)
    navigation.forEach((nav:Navigation)=> {
      nav.isActive = false
      
      if(nav.path === location.pathname || location.pathname.includes(nav.path)){
        nav.isActive = true
        setSearch(nav.searchValue)
        setPage(1)
      }
    })
    setNavigaion([...navigation])

  },[location.pathname])

   // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복 호출
   const navLinks = navigation.map((item: Navigation) => {
    return (
      // Link 태그 사용 시, key값 필수!!
      <Link to={item.path} className={item.isActive ? `${styles.navigation__menu} ${styles.active}` : `${styles.navigation__menu} ${styles.inactive}`} key={item.path}>
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    );
  });

  return <nav className={styles.navigation}>{navLinks}</nav>;
}

export default CommonNav;
