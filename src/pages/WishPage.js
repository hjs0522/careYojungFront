import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import CompareAddBarClose from "../components/Compare/CompareAddBarClose";
import CompareAddBarOpen from "../components/Compare/CompareAddBarOpen";
import DropDownRow from "../components/Header/DropDownRow";
import SearchList from "../components/Search/SearchList";
import { getWishList } from "../api";

const PageContainer = styled.div`
    background-color: #F5F7FA;
`
const TextDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3vh;
`

const TitleText = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 1vw;
`

const WishPage = ({service, setService, grade, setGrade, order, setOrder})=>{
    const [barOpen,setBarOpen] = useState(false);
    const [compareList,setCompareList] = useState([]);
    const [searchList,setSearchList] = useState([]);
    
    useEffect(()=>{
        
        fetch(`https://4ed1-118-32-133-32.jp.ngrok.io/wish-list?memberId=user1`)
            .then((res)=>res.json())
            .then((data)=>{
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
        console.log(searchList);
        const newCompareList = compareList.filter((it)=>it.nursingHome_id !== targetId);
        for(let i=0;i<searchList.length;i++){
            if(searchList[i].nursingHome_id === targetId){
                console.log(searchList[i])
            }
        }
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
    <DropDownRow service={service} grade={grade} order={order} setService = {setService} setGrade = {setGrade} setOrder = {setOrder}></DropDownRow>
        <Container>
            <TextDiv>
                <TitleText>위시리스트</TitleText>
                <text>최대 3개의 시설을 비교 할 수 있습니다</text>
            </TextDiv>
            <SearchList searchList={searchList} onAdd = {onAdd} onEditWish={onEditWish} onRemoveWish={onRemoveWish} compareList = {compareList} isWishPage = {true} setBarOpen={setBarOpen}></SearchList>
        </Container>
        {barOpen?<CompareAddBarOpen toggleIsBarOpen={toggleIsBarOpen} compareList={compareList} onRemoveCompare = {onRemoveCompare}></CompareAddBarOpen>:<CompareAddBarClose toggleIsBarOpen={toggleIsBarOpen} compareList={compareList}></CompareAddBarClose>}
    </PageContainer>
    )
};

export default WishPage;