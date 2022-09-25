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
        img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3da-q2IzbDghh36ty1EQfK9pZTXfzMqpGcQmv0cnQ5eqCtFF0hg6hbFdtcv9EHdssG4OxF3979rqt3luWRF3uXoqzuWM1RuIgp5jBLSI3m2by3zyuN1iT1aFNGMZqb445k5i3veSoNSdzTMEcySx7Hn0k8YErIEgKm4bD1Bb_4OVu65&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
        name:"강서미소요양원",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울 강서구 화곡로 225 두산빌딩 3층",
        phoneNumber:"02-3662-3247",
        wish:true,
    },
    {
        nursingHome_id:2,
        img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3dtt3q8WNifDIih2_XTn1uLbPJnAVisiGxSyr8-eGTHYERgQnVxr3QQL_KgZcFhm6VYZijSEb_RFnqjNwClK2Xqcg_O-hvmg0APJ9vrN8hajvS9WQEEyGa1M9z5U5tJYdOkxTElNFgbEufRR9JVIh5Ws7-fJv6-Fo3wdCBqPefGwegC&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
        name:"강서재가노인복지센터",
        type:"요양원",
        grade:"등급 A",
        score:5,
        reviewNum:"10개",
        addRoad:"서울 강서구 양천로 100-1 4층",
        phoneNumber:"02-2665-6512",
        wish:true,
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
        wish:true,
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
        wish:true,
    },]


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