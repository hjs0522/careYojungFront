import Recentlist from "../components/Recentlist";
import Popularlist from "../components/Popularlist";
import Themelist from "../components/Themelist";
import Pageup from "../components/Pageup";
import styled from "styled-components";
import MainPhoto from "../components/MainPhoto";
import { useRecoilValue } from "recoil";
import { loginState } from "../atom";
import { useMediaQuery } from "react-responsive";
import MyPage from "./MyPage";
import { useState } from "react";
import Tos from "../components/Tos";
import { useEffect } from "react";
import { getPopularList } from "../api";

const arr2 = [
  {
    //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
    key: 20,
    keyword: "ch",
    name: "치매 관련 시설",
    ShortLoc: "치매 환자 수용 가능 시설들",
    img: "https://img.sbs.co.kr/newimg/news/20181001/201233540_1280.jpg",
  },
  {
    key: 21,
    name: "여성전용시설",
    keyword: "wo",
    ShortLoc: "여성만을 위한 시설들",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPHuyVzrCwt2mIGdHWiDi-axGf_FU2IjZ2ovsQJX-T3fL_Ebc5",
  },
  {
    key: 22,
    name: "재활치료에 특화된",
    ShortLoc: "특별한 치료를 받을 수 있는 시설들",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-sBZLBOHPVSzzcQmbUzQgfnQKmDOz0ThScNaWJ-T0pxwsiECw",
  },
];

const StyledMainpage = styled.div`
  padding-top: 70px;
  padding-bottom: 100px;
`;

function Mainpage() {
  const login = useRecoilValue(loginState);
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("recent")));
  const isMobile = useMediaQuery({
    query: "(max-width:935px)",
  });

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularList().then((data) => {
      setPopular(data);
    });
  }, []);

  if (isMobile) {
    return (
      <StyledMainpage style={{ paddingTop: "0px" }}>
        {login ? (
          arr ? (
            <Recentlist isMobile={isMobile} arr={arr} />
          ) : (
            <MainPhoto isMobile={isMobile}></MainPhoto>
          )
        ) : (
          <MainPhoto isMobile={isMobile}></MainPhoto>
        )}

        <Popularlist arr={popular} isMobile={isMobile} />
        <Themelist arr={arr2} isMobile={isMobile} />

        <Pageup />
      </StyledMainpage>
    );
  } else {
    return (
      <StyledMainpage>
        {login ? (
          arr ? (
            <Recentlist arr={arr} />
          ) : (
            <MainPhoto></MainPhoto>
          )
        ) : (
          <MainPhoto />
        )}
        <Popularlist arr={popular} />
        <Themelist arr={arr2} />

        <Pageup />
      </StyledMainpage>
    );
  }
}

export default Mainpage;
