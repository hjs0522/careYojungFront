import styled from "styled-components";
import { Button, Divider, Grid, Image } from 'semantic-ui-react'
import Footer from "../Footer";
import Recentlist from "./Recentlist";
import Popularlist from "./Popularlist";
import Themelist from "./Themelist";

const arr = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  name : "안녕하세요",
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
},{
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
}]

function Mainpage(){
    return (
        <div >
          <Recentlist arr={arr}/>
          <Popularlist arr={arr}/>
          <Themelist arr={arr} />
          <Footer />
        </div>
    )
}

export default Mainpage;

