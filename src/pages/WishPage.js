import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import styled from "styled-components";
import CompareAddBarClose from "../components/Compare/CompareAddBarClose";
import CompareAddBarOpen from "../components/Compare/CompareAddBarOpen";
import SearchList from "../components/Search/SearchList";

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
        
        fetch(`http://15.164.184.243:8080/wish-list?memberId=user2`)
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
            <SearchList searchList={searchList} onAdd = {onAdd} onEditWish={onEditWish} onRemoveWish={onRemoveWish} compareList = {compareList} isWishPage = {true}></SearchList>
        </WishContainer>
        {barOpen?<CompareAddBarOpen toggleIsBarOpen={toggleIsBarOpen} compareList={compareList} onRemoveCompare = {onRemoveCompare}></CompareAddBarOpen>:<CompareAddBarClose toggleIsBarOpen={toggleIsBarOpen} compareList={compareList}></CompareAddBarClose>}
    </PageContainer>
    )
};

export default WishPage;