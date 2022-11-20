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


const arr1 = [
  {
    //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
    key: 10,
    name: "관양1동 행정복지센터",
    ShortLoc: "경기도 안양시 동안구 ",
    img: "https://api.care-yojung.com/image/thumbnail?id=11111000033",
  },
  {
    key: 11,
    name: "참햇살요양원",
    ShortLoc: "경기도 안양시 동안구 ",
    img: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3cpRxKbr_ea0ERf_sqdnXFKdF0QKx_EE5tTiFSy6GiyOaJd2-Pk4zRCcru-vJs1ajIpfEJVjSjkMq377uNOYyP9JN2KKTjHzO783QX9H1vbPeiRJVr3Z0FO-BQPADwGBk6ihl50fimasIU2upw7RzwY0QgrJQ5jiGnBOx3a6dp1j99w&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
  },
  {
    key: 12,
    name: "도봉은빛요양원",
    ShortLoc: "서울특별시 도봉구",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YcX7nbMEQfcZYM6Ur8EaXlKmo_8nQh462A&usqp=CAU",
  },
  {
    key: 13,
    name: "청운실버센터",
    ShortLoc: "서울특별시 종로구",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZOorVYRbIQDQ5Bq3osKP9SOxDqUIC1KQTs19J2pesZYpkDzLFGzXuMGB9RplQhWtkp8&usqp=CAU",
  },
  {
    key: 14,
    name: "구립용산노인전문요양원",
    ShortLoc: "서울특별시 용산구",
    img: "https://react.semantic-ui.com/images/wireframe/image.png",
  },
];

const arr2 = [
  {
    //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
    key: 20,
    name: "자연속에서 함께하는",
    ShortLoc: "건강 회복에 더 신경쓸 수 있는 시설들",
    img: "https://img.freepik.com/premium-photo/rural-landscape-in-sunny-day-green-forest-and-sky-with-clouds_105596-498.jpg?w=2000",
  },
  {
    key: 21,
    name: "도심에서 가까운",
    ShortLoc: "도시의 인프라를 누릴 수 있는 시설들",
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
  
  const [popular,setPopular] = useState([]);
  
  useEffect(()=>{
    getPopularList().then(
    (data)=>{
      setPopular(data);
    })
  },[])
  
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
