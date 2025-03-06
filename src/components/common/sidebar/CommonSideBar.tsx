import { useEffect, useRef, useState } from "react";
import styles from "./CommonSideBar.module.scss";


const CommonSideBar = ({ width=280, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setX] = useState(width);
  const side = useRef<HTMLDivElement | null>(null);
  
  // button 클릭 시 토글
  const toggleMenu = () => {

    console.log('Toggle clicked, current isOpen:', isOpen);
    
    if (xPosition > 0) {
      setX(0);
      setIsOpen(true);
      console.log("toggle on")
    } else {
      setX(width);
      setIsOpen(false);
      console.log("toggle off")
    }
  };
  
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    if (!side.current) return; 

    let sideArea = side.current;
    let sideChildren = sideArea.contains(e.target);
    if (isOpen && (!sideChildren)) {
       setX(width); 
       setIsOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  },[isOpen])

  useEffect(() => {
    console.log('xPosition changed:', xPosition);
  }, [xPosition]);


  return (
    <div className={styles.container}>
      <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translateX(${-xPosition}px)`}}>

          <button onClick={toggleMenu} className={styles.button1} >
            {isOpen ? 
            <span>X</span> : 
            <img src="src/assets/images/frog.png" alt="contact open button" className={styles.openBtn}/>
            }
          </button>
        
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};


export default CommonSideBar;