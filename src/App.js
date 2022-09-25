import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import WishPage from "./pages/WishPage";
import MyPage from "./pages/MyPage";
import Mappage from "./pages/Mappage"
import { RecoilRoot } from "recoil";

import LoginPage from "./pages/LoginPage";
import Kakao from "./pages/kakao";

import Review from "./components/Review";
import PersonInfo from "./pages/PersonInfo";
import Information from "./pages/Information";
import InfoDetail from "./pages/InfoDetail";


function App() {
  return (
  <RecoilRoot>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/*" element={<Mainpage></Mainpage>}></Route>
        <Route path="/search/list" element={<SearchPage></SearchPage>}></Route>
        <Route path="/search/map" element= {<Mappage></Mappage>}></Route>
        <Route path="/wish" element = {<WishPage></WishPage>}></Route>
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
