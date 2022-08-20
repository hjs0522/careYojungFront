import { useState } from "react";
import { Button,Image,Icon } from "semantic-ui-react";
import styled from "styled-components";

const ItemContainer = styled.li`
    display: flex;
    flex-basis: auto;
    margin: 3vh 0px;
    align-items: center;
    border: 1px solid #F1C644;
    border-radius: 15px;
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




const SearchItem = ({id,img,name,type,grade,reviewScore,reviewNum,location,phoneNumber,wish,onAdd,compareList})=>
{
    
    const handleOnClick = () =>{
        console.log("heart clicked")
    }
    
    const handleOnAdd = () =>{
        onAdd(id,name);    
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
        <ItemContainer>
            <Image src={img} alt = "요양원 사진" size="small"></Image>
            {wish
            ? <Icon name='heart' color="red" size="large" onClick = {handleOnClick}></Icon>:
            <Icon name='heart outline' size="large" onClick = {handleOnClick}></Icon>}
            <InfoContainer>
                <div>
                    <span>{name}</span>
                    <span>{type}</span>
                    <span>{grade}</span>
                </div>
                <div>
                    <div>{getStar(reviewScore)}</div>
                    <span>{reviewNum}</span>
                </div>
                <div>{location}</div>
                <div>{phoneNumber}</div>
            </InfoContainer>
            <LinkContainer>
                <Button size="small">상세보기</Button>
                <Button size="small">리뷰하기</Button>
                {wish?
                <Button size="samll" onClick={handleOnAdd}>비교담기</Button>:
                null}
            </LinkContainer>
        </ItemContainer>
        
    );
};

export default SearchItem;