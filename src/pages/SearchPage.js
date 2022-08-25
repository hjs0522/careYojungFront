import { useEffect, useState } from "react";
import { Container,Header } from "semantic-ui-react";
import styled from "styled-components";
import DropDownRow from "../components/DropDownRow";
import Pagination from '../components/Pagination'
import SearchList from "../components/SearchList";

const dummyList = [
    {
        nursingHome_id:1,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울특별시 강남구 학동로 426",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:2,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울특별시 강남구 도곡로 408",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:3,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울특별시 강남구 삼성로 154",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:4,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        score:3,
        reviewNum:"10개",
        addRoad:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        nursingHome_id:5,
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
        nursingHome_id:6,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
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
        nursingHome_id:8,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
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
        name:"강동 요양원",
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
        nursingHome_id:11,
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


const SearchContainer = styled(Container)`
    &.ui.fluid.container{
        padding-top: 100px;
    }
`

const SearchPage = ()=>{

    const [searchList,setSearchList] = useState([]);
    const [page,setPage] = useState(1);
    const offset = (page-1) * 5;
    
    /*
        useEffect(() =>{
            fetch("")
                .then((res) => res.json())
                .then((data)=> setSearchList(data));
        },[]);
    */
    useEffect(()=>{
        setSearchList(dummyList);
    },[])
    
    const onEditWish = (targetId, newWish)=>{
        setSearchList(
            searchList.map((it)=>
                it.nursingHome_id ===targetId ? {...it,wish:newWish} : it
            )
        );
    };
    return(
    <SearchContainer fluid>
        <DropDownRow></DropDownRow>
        <SearchList searchList={searchList.slice(offset,offset+5)} onEditWish={onEditWish}></SearchList>
        <Pagination
            total = {searchList.length}
            page = {page}
            setPage = {setPage}
        ></Pagination>
    </SearchContainer>
    )
};

export default SearchPage;