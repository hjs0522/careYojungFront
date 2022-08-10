import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage></Mainpage>}></Route>
        <Route path="search" element={<SearchPage></SearchPage>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
