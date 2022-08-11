import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import WishPage from "./pages/WishPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage></Mainpage>}></Route>
        <Route path="search" element={<SearchPage></SearchPage>}></Route>
        <Route path="wish" element = {<WishPage></WishPage>}></Route>
        <Route path="mypage" element = {<MyPage></MyPage>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
