import { Action } from "history";
import { useEffect, useReducer, useState,useCallback } from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import CompareAddBarClose from "../components/CompareAddBarClose";
import CompareAddBarOpen from "../components/CompareAddBarOpen";
import CompareAddBar from "../components/CompareAddBarOpen";
import DropDownRow from "../components/DropDownRow";
import SearchList from "../components/SearchList";

const dummyList = [
    {
        id:1,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강남 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:5,
        reviewNum:"10개",
        location:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:true,
    },
    {
        id:2,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:4,
        reviewNum:"10개",
        location:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:true,
    },
    {
        id:3,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        reviewScore:5,
        reviewNum:"10개",
        location:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:true,
    },
];


const WishContainer = styled(Container)`
    &{
        padding-top:100px;
    }
`


const WishPage = ()=>{
    const [barOpen,setBarOpen] = useState(false);
    const [compareList,setCompareList] = useState([]);
    const [searchList,setSearchList] = useState([]);
    
    useEffect(()=>{
        setSearchList(dummyList);
    },[])
    
    const toggleIsBarOpen = ()=>{
        setBarOpen(!barOpen)
    }
    
    const onAdd = (id,name) =>{
        if(compareList.length<3){
            const newItem = {
                id,
                name,
            };
            setCompareList([...compareList,newItem])
        }
        else
        {
            alert("비교하기는 최대 3개까지 가능합니다")
        }
    }
    
    const onRemoveCompare = (targetId)=>{
        const newCompareList = compareList.filter((it)=>it.id !== targetId);
        setCompareList(newCompareList);
    }
    
    const onRemoveWish = (targetId) =>{
        const newSearchList = searchList.filter((it)=>it.id !== targetId);
        setSearchList(newSearchList);
    }
    
    const onEditWish = (targetId, newWish)=>{
        setSearchList(
            searchList.map((it)=>
                it.id ===targetId ? {...it,wish:newWish} : it
            )
        );
    };
    
    return(
    <WishContainer fluid>
        <DropDownRow></DropDownRow>
        <SearchList searchList={searchList} onAdd = {onAdd} onEditWish={onEditWish} onRemoveWish={onRemoveWish} compareList = {compareList} isWishPage = {true}></SearchList>
        {barOpen?<CompareAddBarOpen toggleIsBarOpen={toggleIsBarOpen} compareList={compareList} onRemove = {onRemoveCompare}></CompareAddBarOpen>:<CompareAddBarClose toggleIsBarOpen={toggleIsBarOpen} compareList={compareList}></CompareAddBarClose>}
    </WishContainer>
    )
};

export default WishPage;