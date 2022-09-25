import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import CompareAddBarClose from "../components/CompareAddBarClose";
import CompareAddBarOpen from "../components/CompareAddBarOpen";
import DropDownRow from "../components/DropDownRow";
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
        addRoad:"서울시 강남구",
        phoneNumber:"010-****-****",
        wish:true,
    },
    {
        nursingHome_id:2,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강북 요양원",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울시 강북구",
        phoneNumber:"010-****-****",
        wish:true,
    },
    {
        nursingHome_id:3,
        img:"https://react.semantic-ui.com/images/wireframe/image.png",
        name:"강동 요양원",
        type:"요양원",
        grade:"등급 A",
        score:4,
        reviewNum:"10개",
        addRoad:"서울시 강동구",
        phoneNumber:"010-****-****",
        wish:true,
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
        wish:true,
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
        wish:true,
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
        wish:true,
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
        wish:true,
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
        wish:true,
    },

    
];


const WishContainer = styled(Container)`
    &.ui.container{
        padding-top:10vh;
        padding-bottom: 12vh;
    }
`

const PageContainer = styled.div`
    background-color: #F5F7FA;
`

const WishPage = ()=>{
    const [barOpen,setBarOpen] = useState(false);
    const [compareList,setCompareList] = useState([]);
    const [searchList,setSearchList] = useState([]);
    
    useEffect(()=>{
        
        fetch(`https://e2b6-221-148-248-129.jp.ngrok.io/wish-list?memberId="master"`)
            .then((res)=>{
                res.json()
                console.log(res)
            })
            .then((data)=>{
                console.log(data)
                setSearchList(data)});
        
    },[])
    
    const toggleIsBarOpen = ()=>{
        setBarOpen(!barOpen)
    }

    const onAdd = (nursingHome_id,name) =>{
    
        const newItem = {
            nursingHome_id,
            name,
        };
        
        let flag = false;
        for(let i=0;i<compareList.length;i++){
            if(compareList[i].nursingHome_id === nursingHome_id){
                flag = true;
            }
        }
        
        if (!flag){
            if(compareList.length<3){
                setCompareList([...compareList,newItem]);
            }
            else
            {
                alert("비교하기는 최대 3개까지 가능합니다");
            }
        }
        else{
            alert("이미 추가된 시설입니다");
        }
        
    }
    
    const onRemoveCompare = (targetId)=>{
        for(let i=0;i<compareList.length;i++){
            console.log(`compare id is ${compareList[i].nursingHome_id}`);
        }
        const newCompareList = compareList.filter((it)=>it.nursingHome_id !== targetId);
        setCompareList(newCompareList);
    }
    
    const onRemoveWish = (targetId) =>{
        const newSearchList = searchList.filter((it)=>it.nursingHome_id !== targetId);
        setSearchList(newSearchList);
    }
    
    const onEditWish = (targetId, newWish)=>{
        setSearchList(
            searchList.map((it)=>
                it.nursingHome_id ===targetId ? {...it,wish:newWish} : it
            )
        );
    };
    
    return(
    <PageContainer>
        <WishContainer>
            <DropDownRow></DropDownRow>
            <SearchList searchList={searchList} onAdd = {onAdd} onEditWish={onEditWish} onRemoveWish={onRemoveWish} compareList = {compareList} isWishPage = {true}></SearchList>
        </WishContainer>
        {barOpen?<CompareAddBarOpen toggleIsBarOpen={toggleIsBarOpen} compareList={compareList} onRemoveCompare = {onRemoveCompare}></CompareAddBarOpen>:<CompareAddBarClose toggleIsBarOpen={toggleIsBarOpen} compareList={compareList}></CompareAddBarClose>}
    </PageContainer>
    )
};

export default WishPage;