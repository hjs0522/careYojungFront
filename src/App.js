import Header from "./components/Header/Header";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import WishPage from "./pages/WishPage";
import MyPage from "./pages/MyPage";
import Mappage from "./pages/Mappage"
import { RecoilRoot } from "recoil";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Kakao from "./pages/kakao";
import { serviceOptions,gradeOptions,orderOptions } from "./searchOptions";

import PersonInfo from "./pages/PersonInfo";
import Information from "./pages/Information";
import InfoDetail from "./pages/InfoDetail";


function App() {
  const [service,setService] =useState(serviceOptions[0].key);
  const [grade,setGrade] = useState(gradeOptions[0].key);
  const [order,setOrder] = useState(orderOptions[0].key);
  return (
  <RecoilRoot>
    <BrowserRouter>
      <Header service={service} setService={setService} grade={grade} setGrade={setGrade} order={order} setOrder={setOrder}/>
      <Routes>
        <Route path="/*" element={<Mainpage></Mainpage>}></Route>
        <Route path="/search/list" element={<SearchPage service={service} setService={setService} grade={grade} setGrade={setGrade} order={order} setOrder={setOrder}></SearchPage>}></Route>
        <Route path="/search/map" element= {<Mappage service={service} setService={setService} grade={grade} setGrade={setGrade} order={order} setOrder={setOrder}></Mappage>}></Route>
        <Route path="/wish" element = {<WishPage service={service} setService={setService} grade={grade} setGrade={setGrade} order={order} setOrder={setOrder}></WishPage>}></Route>
        <Route path="/mypage" element = {<MyPage></MyPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/oauth/callback/kakao" element={<Kakao></Kakao>}></Route>
        <Route path="/map" element= {<Mappage></Mappage>}></Route>
        <Route path="/personInfo" element = {<PersonInfo></PersonInfo>}></Route>
        <Route path="/info" element = {<Information></Information>}></Route>
        <Route path="/infoDetail" element = {<InfoDetail></InfoDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </RecoilRoot>
  );
}

export default App;
