import { useState } from "react";
import { Button,Image,Icon } from "semantic-ui-react";
import styled from "styled-components";
import Detail from "./Detail";
import {photoarr} from './photos';

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




const SearchItem = ({nursingHome_id,img,name,type,grade,score,reviewNum,addRoad,phoneNumber,wish,onAdd,onEditWish,isWishPage,onRemoveWish})=>
{  
    const [detail_bool,setDetail_bool] = useState(false);

    
    const handleOnClick = () =>{
        onEditWish(nursingHome_id,!wish);
    }
    
    const handleOnAdd = () =>{
        onAdd(nursingHome_id,name);
        /*
        fetch("localhost:8080/wish",{
            method:'PUT',
            body:{
                "nursingHome_id": nursingHome_id,
            }
        })
        */
    }
    
    const handleRemoveWish = ()=>{
        if(window.confirm(`${name}을 위시리스트에서 삭제하시겠습니까?`)){
            onRemoveWish(nursingHome_id);
            window.scrollTo(0, 0);
            
            /*
        fetch("localhost:8080/wish",{
            method:'PUT',
            body:{
                "nursingHome_id": nursingHome_id,
                "name": name,
            }
        })
        */
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
        <ItemContainer onClick={()=>{setDetail_bool(true)}}>
            <img  style={{width:'150px',height:'150px'}} src={photoarr[name]} alt = "요양원 사진" />
            {isWishPage
            ?
            (wish
            ?<Icon name='heart' color="red" size="large" onClick = {handleRemoveWish}></Icon>:
            <Icon name='heart outline' size="large" onClick = {handleOnClick}></Icon>)
            :wish
            ? <Icon name='heart' color="red" size="large" onClick = {handleOnClick}></Icon>:
            <Icon name='heart outline' size="large" onClick = {handleOnClick}></Icon>}
            <InfoContainer>
                <div>
                    <span>{name}</span>
                    <span>{type}</span>
                    <span>{grade}</span>
                </div>
                <div>
                    <div>{getStar(score)}</div>
                    <span>{reviewNum}</span>
                </div>
                <div>{addRoad}</div>
                <div>{phoneNumber}</div>
            </InfoContainer>
            <LinkContainer>
                <Button size="small">상세보기</Button>
                <Button size="small">리뷰하기</Button>
                {isWishPage?
                <Button size="samll" onClick={handleOnAdd}>비교담기</Button>:
                null}
            </LinkContainer>
            <Detail detail_bool={detail_bool} setDetail_bool={setDetail_bool} name={name}/>
        </ItemContainer>
        
    );
};

export default SearchItem;