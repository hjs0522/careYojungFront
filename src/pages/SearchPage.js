import { useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";
import { Container} from "semantic-ui-react";
import styled from "styled-components";
import DropDownRow from "../components/DropDownRow";
import Pagination from '../components/Pagination'
import SearchList from "../components/SearchList";

const dummyList = [
    {
        nursingHome_id:1,
        img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3da-q2IzbDghh36ty1EQfK9pZTXfzMqpGcQmv0cnQ5eqCtFF0hg6hbFdtcv9EHdssG4OxF3979rqt3luWRF3uXoqzuWM1RuIgp5jBLSI3m2by3zyuN1iT1aFNGMZqb445k5i3veSoNSdzTMEcySx7Hn0k8YErIEgKm4bD1Bb_4OVu65&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
        name:"강서미소요양원",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울 강서구 화곡로 225 두산빌딩 3층",
        phoneNumber:"02-3662-3247",
        wish:false,
    },
    {
        nursingHome_id:2,
        img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3dtt3q8WNifDIih2_XTn1uLbPJnAVisiGxSyr8-eGTHYERgQnVxr3QQL_KgZcFhm6VYZijSEb_RFnqjNwClK2Xqcg_O-hvmg0APJ9vrN8hajvS9WQEEyGa1M9z5U5tJYdOkxTElNFgbEufRR9JVIh5Ws7-fJv6-Fo3wdCBqPefGwegC&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
        name:"(주)롱라이프그린케어 강서재가노인복지센터",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울 강서구 양천로 100-1 4층",
        phoneNumber:"02-2665-6512",
        wish:false,
    },
    {
        nursingHome_id:3,
        img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3cFOwQtncajlbdVcUqhKGm9AxmHwzoxCwYILGNhUaLzisk42yWCOwqS4_3pl2zYWyGHuKyQzPgvVz9t2TmzC7xzOjKvwzQXLQ6-J29IE6nmtNuQDOQAsR11YRcB0-C60_tLTS5fbcC-DziBXVFC-9MGU1GpYJ7bFHL2jMAFTi4uYy8&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
        name:"화곡본동성당데이케어센터",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울 강서구 까치산로2길 43 5층 데이케어센터",
        phoneNumber:"02-2606-4123",
        wish:false,
    },
    {
        nursingHome_id:4,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강서중앙데이케어센터",
        type:"요양원",
        grade:"등급 A",
        score:3,
        reviewNum:"10개",
        addRoad:"서울 강서구 양천로 132",
        phoneNumber:"02-2661-4594",
        wish:false,
    },
    {
        nursingHome_id:5,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강서재활전문데이케어센터",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:6,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"A+효담라이프케어 강서데이케어센터",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:7,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강서참마음재가노인복지센터",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:8,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"아리아케어 방문요양 강서 방화센터",
        type:"요양원",
        grade:"등급 A",
        score:2,
        reviewNum:"10개",
        addRoad:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:9,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강서스마일재가센터",
        type:"요양원",
        grade:"등급 A",
        score:3,
        reviewNum:"10개",
        addRoad:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:10,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강서마곡맑은복지재가센터",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:11,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강서샘물재가복지센터",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:12,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:13,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:14,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:15,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:16,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:17,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:18,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
];

const PageContainer = styled.div`
    background-color: #F5F7FA;
`

const SearchContainer = styled(Container)`
    &.ui.container{
        padding-top: 10vh;
    }
`

const SearchPage = ()=>{

    const [searchList,setSearchList] = useState([]);
    const [page,setPage] = useState(1);
    const [searchParams,setSearchParams] = useSearchParams();
    searchParams.get("keyword");
    const offset = (page-1) * 5;
    
        useEffect(() =>{
        /*
            fetch('localhost:8080/search?${searchParms}')
                .then((res) => res.json())
                .then((data)=> setSearchList(data));
        */
            setSearchList(dummyList);
        },[]);
    
    const onEditWish = (targetId, newWish)=>{
        setSearchList(
            searchList.map((it)=>
                it.nursingHome_id ===targetId ? {...it,wish:newWish} : it
            )
        );
    };
    return(
    <PageContainer>
        <SearchContainer>
            <DropDownRow></DropDownRow>
            <SearchList searchList={searchList.slice(offset,offset+5)} onEditWish={onEditWish}></SearchList>
            <Pagination
                total = {searchList.length}
                page = {page}
                setPage = {setPage}
            ></Pagination>
        </SearchContainer>
    </PageContainer>
    )
};

export default SearchPage;