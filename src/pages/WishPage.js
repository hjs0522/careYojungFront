import styled from "styled-components";
import DropDownRow from "../components/DropDownRow";
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
    },
];

const SearchPageContainer = styled.div`
    padding-top: 9vh;
    padding-bottom: 150px;
`



const WishPage = ()=>{
    return(
    <SearchPageContainer>
        <DropDownRow></DropDownRow>
        <SearchList searchList={dummyList}></SearchList>
    </SearchPageContainer>
    )
};

export default WishPage;