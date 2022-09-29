import { useEffect, useState } from "react";
import { Button,Image,Icon } from "semantic-ui-react";
import styled from "styled-components";
import Detail from "../Detail";
import {photoarr} from '../photos';
import Review from "../Review";

const ItemContainer = styled.li`
    display: flex;
    margin: 3vh 0px;
    align-items: center;
    border: 1px solid #F1C644;
    border-radius: 15px;
    background-color:white;
    position: relative;
    & .ui.image{
        margin: 1vh;
    }
    
    & >i{
        position: absolute;
        top: 20px;
        left: 120px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3vw;
`
const LinkContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 3vw;
    flex-direction: column;
    justify-content: space-between;
    & .ui.button{
        margin: 0.5vh 0px;
    }

`
const Text = styled.text`
    margin-right: 8px;
`




const SearchItem = ({nursingHome_id,img,name,type,grade,score,reviewNum,addrSiDo,addrSiGunGu,addrRoad,buildingMainNum,phoneNumber,wish,onAdd,onEditWish,isWishPage,onRemoveWish})=>
{  
    const [detail_bool,setDetail_bool] = useState(false); //상세정보 페이지 열려있는지 여부
    const [review_bool,setReview_bool] = useState(false); //리뷰페이지 열려있는지 여부
    
    const handleOnClick = () =>{
        onEditWish(nursingHome_id,!wish);
        fetch("http://15.164.184.243:8080/wish-list", {
            method: 'POST', // *GET, POST, PUT, DELETE 등
            headers: {
                'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "memberId": "user12",
                "svcId": nursingHome_id,
                "svcType": "ho"
            }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
            }).then(res=>console.log(res))
    }
    
    const handleOnAdd = () =>{
        onAdd(nursingHome_id,name);
    }
    
    const handleRemoveWish = ()=>{
        if(window.confirm(`${name}을 위시리스트에서 삭제하시겠습니까?`)){
            onRemoveWish(nursingHome_id);
            window.scrollTo(0, 0);
            
            fetch("http://15.164.184.243:8080/wish-list/compare", {
            method:'DELETE', // *GET, POST, PUT, DELETE 등
            headers: {
                'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "memberId": "user12",
                "svcId": nursingHome_id,
                "svcType": "ho",
            }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
            })
        }
    }
    
    function getStar(num){
        const starArr=[0,0,0,0,0];
        for(let i=0;i<num;i++){
          starArr[i]=1
        }
        const result=[]
        starArr.forEach((i)=>{
          if(i===1)
            result.push(<Icon key={i} size="large" name="star" color="yellow"/>)
          else
            result.push(<Icon key={i} size="large" name="star" color="grey"/>)
        })
        return result;
    }
    
    
    return(
        <ItemContainer >
            <img onClick={()=>{setDetail_bool(true)}} style={{width:'150px',height:'150px',cursor:'pointer'}} src={photoarr[name]} alt = "요양원 사진" />
            {isWishPage
            ?
            (wish
            ?<Icon name='heart' color="red" size="large" onClick = {event=>{
                    event.stopPropagation(); // onclick이벤트를 가지고 있는 블럭이 겹쳐잇을때 제일 위에 하나만 실행 되게 해줌.
                    handleRemoveWish()
                }
            }></Icon>:
            <Icon name='heart outline' size="large" onClick = {event=>{
                event.stopPropagation();
                handleOnClick()
            }}></Icon>)
            :wish
            ? <Icon name='heart' color="red" size="large" onClick = {event=>{
                event.stopPropagation();
                handleOnClick()
            }}></Icon>:
            <Icon name='heart outline' size="large" onClick = {event=>{
                event.stopPropagation();
                handleOnClick()
            }}></Icon>}
            <InfoContainer onClick={()=>{setDetail_bool(true)}} style={{cursor:'pointer'}}>
                <div>
                    <Text>{name}</Text>
                    <Text>{type}</Text>
                    <Text>{grade}</Text>
                </div>
                <div>
                    <div>{getStar(score)}</div>
                    <span>{reviewNum}</span>
                </div>
                <div>
                    <Text>{addrSiDo}</Text>
                    <Text>{addrSiGunGu}</Text>
                    <Text>{addrRoad}</Text>
                    <Text>{buildingMainNum}</Text>
                </div>
                <div>{phoneNumber}</div>
            </InfoContainer>
            <LinkContainer>
                <Button size="small" onClick={()=>{setDetail_bool(true)}}>
                <Icon name="plus square outline"></Icon>
                상세보기</Button>
                <Button size="small" onClick={(event)=>{
                    event.stopPropagation();
                    setReview_bool(true);
                    event.stopPropagation();
                    }}>
                    <Icon name="comment outline"></Icon>
                    리뷰하기</Button>
                {isWishPage?
                <Button size="samll" onClick={event=>{
                    event.stopPropagation();
                    handleOnAdd();
                }
                }>
                    <Icon name="shopping cart"></Icon>
                비교담기</Button>:
                null}
            </LinkContainer>
            <Review nursingHome_id={nursingHome_id} review_bool={review_bool} setReview_bool={setReview_bool} name={name} addrRoad={addrRoad}/>
            <Detail nursingHome_id = {nursingHome_id}detail_bool={detail_bool} setDetail_bool={setDetail_bool} name={name} />
            
        </ItemContainer>
        
    );
};

export default SearchItem;