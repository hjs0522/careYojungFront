import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import WishPage from "./pages/WishPage";
import MyPage from "./pages/MyPage";
import { RecoilRoot } from "recoil";
import { Container } from "semantic-ui-react";
import Information from "./pages/Information";



function App() {
  return (
  <RecoilRoot>
    <BrowserRouter> 
      <Container fluid>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage></Mainpage>}></Route>
          <Route path="search" element={<SearchPage></SearchPage>}></Route>
          <Route path="wish" element = {<WishPage></WishPage>}></Route>
          <Route path="mypage" element = {<MyPage></MyPage>}></Route>
          <Route path="info" element = {<Information></Information>}></Route>
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  </RecoilRoot>
  );
}

export default App;
