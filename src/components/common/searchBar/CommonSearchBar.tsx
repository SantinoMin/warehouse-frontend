// import { pageState } from '@/recoil/atoms/pageState';
// import { searchState } from '@/recoil/atoms/searchState';
// import { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import styles from './CommonSearchBar.module.scss';

// function CommonSearchBar() {
//   const [search, setSearch] = useRecoilState(searchState);
//   const [page,setPage] = useRecoilState(pageState);
//   const [text, setText] = useState("");

//   const onChange = (event) => {
//     console.log(event.target.value);
//     setText(event.target.value)
//   }
//   const onSearch = () => {
//     if(text===""){  
//       // input 태그 안에 빈 값을 검색 하였을 때 => default Searching
//       setSearch('Korea');
//       setPage(1)
//     } else {
//       setSearch(text); // 작성한 input value 값 전달
//       setPage(1)
//     }
//   }

//   const handleKeyDown = (event: React.KeyboardEvent) => {
//     if(event.key ==="Enter"){
//       if(text===""){
//         // input 태그 안에 빈 값을 검색 하였을 때 => default Searching
//         setSearch('Korea');
//         setPage(1)
//       } else {
//         setSearch(text); // 작성한 input value 값 전달
//         setPage(1)
//       }
//     }
//   }

//   return (
//     <div className={styles.searchBar}>
//       <div className={styles.searchBar__search}>
//         <input
//           type="text"
//           placeholder="찾으실 상품을 검색하세요"
//           className={styles.searchBar__search__input}
//           value ={text}
//           onChange={onChange}
//           onKeyDown={handleKeyDown}
//         />
//         <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch}/>
//       </div>
//     </div>
//   );
// }

// export default CommonSearchBar;
