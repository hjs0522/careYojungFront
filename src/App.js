import Header from "./components/Header/Header";
import Mainpage from "./pages/Mainpage";

import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage.js";
import WishPage from "./pages/WishPage.js";
import MyPage from "./pages/MyPage.js";
import Mappage from "./pages/Mappage";

import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Kakao from "./pages/kakao";
import { serviceOptions, gradeOptions, orderOptions } from "./searchOptions";

import PersonInfo from "./pages/PersonInfo";
import Information from "./pages/Information";
import InfoDetail from "./pages/InfoDetail";
import { CookiesProvider } from "react-cookie";
import Manager from "./pages/Manager";
import PersonInfoSignUp from "./pages/PersonInfoSignUp";

function App() {
  const [service, setService] = useState(serviceOptions[0].key);
  const [grade, setGrade] = useState(gradeOptions[0].key);
  const [order, setOrder] = useState(orderOptions[0].key);
  const [keyword,setKeyword] = useState("");
  /*
  const [login,setLogin] = useRecoilState(loginState);
  function loadUser(){
    try{
      const user = localStorage.getItem('user');
      if(!user) return;
      else{
        setLogin(true);
      }
    }
    catch(e){
      console.log('localStorage is not working');
    }
  }
  loadUser();
  */
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/*" element={<Mainpage></Mainpage>}></Route>
          <Route
            path="/search/list"
            element={
              <SearchPage></SearchPage>
            }
          ></Route>
          <Route
            path="/search/map"
            element={
              <Mappage></Mappage>
            }
          ></Route>
          <Route
            path="/wish"
            element={
              <WishPage></WishPage>
            }
          ></Route>
          <Route path="/mypage" element={<MyPage></MyPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/oauth/callback/kakao" element={<Kakao></Kakao>}></Route>
          <Route path="/map" element={<Mappage></Mappage>}></Route>
          <Route path="/personInfo" element={<PersonInfo></PersonInfo>}></Route>
          <Route path="/personInfoSignUp" element={<PersonInfoSignUp></PersonInfoSignUp>}></Route>
          <Route path="/info" element={<Information></Information>}></Route>
          <Route path="/infoDetail" element={<InfoDetail></InfoDetail>}></Route>
          <Route path="/manager" element={<Manager />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
