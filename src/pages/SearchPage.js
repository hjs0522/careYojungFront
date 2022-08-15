import { useEffect, useState } from "react";
import styled from "styled-components";
import DropDownRow from "../components/DropDownRow";
import Pagination from '../components/Pagination'
import SearchList from "../components/SearchList";

const dummyList = [
    {
        id:1,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:2,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:3,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:4,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:5,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:6,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:7,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:8,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:9,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:10,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:11,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:12,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:13,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:14,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:15,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:16,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:17,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:false,
    },
    {
        id:18,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:"5점",
        reviewNum:"10개",
        location:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:false,
    },
];

const SearchPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 9vh;
    padding-bottom: 150px;
`



const SearchPage = ()=>{

    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const offset = (page-1) * 5;
    
    /*
        useEffect(() =>{
            fetch("")
                .then((res) => res.json())
                .then((data)=> setPosts(data));
        },[]);
    */
    useEffect(()=>{
        setPosts(dummyList);
    },[])
    return(
    <SearchPageContainer>
        <DropDownRow></DropDownRow>
        <SearchList searchList={posts.slice(offset,offset+5)}></SearchList>
        <Pagination
            total = {posts.length}
            page = {page}
            setPage = {setPage}
        ></Pagination>
    </SearchPageContainer>
    )
};

export default SearchPage;