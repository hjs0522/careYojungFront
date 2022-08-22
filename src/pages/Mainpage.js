import Recentlist from "../components/Recentlist";
import Popularlist from "../components/Popularlist";
import Themelist from "../components/Themelist";
import Pageup from "../components/Pageup";
import styled from "styled-components";
import { Loader,Segment,Dimmer,Image } from 'semantic-ui-react';


const arr = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  key : 0,
  name : "서울요양시설",
  ShortLoc : "서울 마포구",
  img : "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3cOIl6j5vMO6uMzxWnyMYrggmG7KlGUIZKAJNHyLZrqOBcw4x1_ai-L3WTggTGif-Z8EcjWSNXEuZXbr4HPuL9RZgyA7IOZZ8KYk1S9lXu1ADflotD9pJq7Mx8oMno_1jj3t2YWnp-x5EL4GUnARoKhDnKSDNs-UXmLUcH_hgck6MQf&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY"

},{
  key : 1,
  name : "부산요양시설",
  ShortLoc : "",
  img : "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3cayxFQm6v8cfU5Hr9NlKD8ako-T8qf13jypcV20NjKrLFaKdfarP39wqQDdj1Do1PVbmcGeXMdxum-fc4Ho8BIwOws4asxlyBk5waI4Dfwu0HnlnJg9EkKGsd-ZfdG9o0_iVEPSz-6GgZ6CZyiSekLGAoi1xmdHWal4kKtzzrpnMzx&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY"
},{
  key : 2,
  name : "강릉요양시설",
  ShortLoc : "강원도 강릉시",
  img : "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMjJfNTIg/MDAxNjE2MzkxMzA0NDc4.RCSz6incoT1YQqMFLw56c-S7YrB5_tgIchXWEiL3qrcg.RE8SV1h8C4FSAFh4271numvCyPmspekAFg2oivqGdf4g.JPEG.samson1278/batch_프리미엄요양원11.jpg?type=w800"
},{
  key : 3,
  name : "저런 ",
  ShortLoc : "서울 마포구",
  img : "https://cdn.docdocdoc.co.kr/news/photo/201411/164531_56485_0530.jpg"
},{
  key : 4,
  name : "배고프다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 5,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 6,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 7,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
}]

const arr1 = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  key : 0,
  name : "서울요양시설",
  ShortLoc : "서울 마포구",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgD6oZRl8LFmTsecrXbocSOvOaeXheB50PtAS9Hfnjsiy_FYkZ_oc7_xUqD5cx3wJfjO4&usqp=CAU"

},{
  key : 1,
  name : "부산요양시설",
  ShortLoc : "",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzWYxCJCcHB1rVb_LlxOU9yTf4eizP7MwPJgRHp2uyY_f451YtuhapXzcXzza6y4r9yc&usqp=CAU"
},{
  key : 2,
  name : "강릉요양시설",
  ShortLoc : "강원도 강릉시",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YcX7nbMEQfcZYM6Ur8EaXlKmo_8nQh462A&usqp=CAU"
},{
  key : 3,
  name : "저런 ",
  ShortLoc : "서울 마포구",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZOorVYRbIQDQ5Bq3osKP9SOxDqUIC1KQTs19J2pesZYpkDzLFGzXuMGB9RplQhWtkp8&usqp=CAU"
},{
  key : 4,
  name : "배고프다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 5,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 6,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 7,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
}]

const arr2 = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  key : 0,
  name : "서울요양시설",
  ShortLoc : "서울 마포구",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr4MyaNSJNNLUpXBFdXwYo1gApDKfS0bKWQ&usqp=CAU"

},{
  key : 1,
  name : "부산요양시설",
  ShortLoc : "",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYSwwIviStNi_5og0-J6lWnuLe70cu7XfuA&usqp=CAU"
},{
  key : 2,
  name : "강릉요양시설",
  ShortLoc : "강원도 강릉시",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAULsQdX4LIfRCSE43QvEYf1sUMTdhVYdAvg&usqp=CAU"
}]

const StyledMainpage = styled.div`
  padding-top:120px;
  padding-bottom:100px;
  overflow-y:auto;
`

function Mainpage(){
  return (    
    <StyledMainpage>
      <Recentlist arr={arr}/>
      <Popularlist arr={arr1}/>
      <Themelist arr={arr2} />
      <Pageup />
    </StyledMainpage>
  )
}

export default Mainpage;

