//rfce로 기본 세팅
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from '@pages/index'
import AboutPage from '@pages/about'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index path="/" element={<MainPage />}></Route>
    <Route index path="/about" element={<AboutPage />}></Route>

    //내용만 바뀌는 경우 이런식으로 설정 가능(id로)
    <Route index path="/about/:id" element={<AboutPage />}></Route>
  

    </Routes>

    </BrowserRouter>




  )
  
  
  
}

export default App;
