import Recentlist from "../components/Recentlist";
import Popularlist from "../components/Popularlist";
import Themelist from "../components/Themelist";
import Pageup from "../components/Pageup";
import styled from "styled-components";

const arr = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  name : "서울요양시설",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"

},{
  name : "부산요양시설",
  ShortLoc : "",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  name : "강릉요양시설",
  ShortLoc : "강원도 강릉시",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  name : "저런 ",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  name : "배고프다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
}]

const StyledMainpage = styled.div`
  padding-top:150px;
  padding-bottom:150px;
`

function Mainpage(){
  return (    
    <StyledMainpage>
      <Recentlist arr={arr}/>
      <Popularlist arr={arr}/>
      <Themelist arr={arr} />
      <Pageup />
    </StyledMainpage>
  )
}

export default Mainpage;

