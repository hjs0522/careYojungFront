import { Button,Image } from "semantic-ui-react";
import styled from "styled-components";

const ItemContainer = styled.div`
    display: flex;
    flex-basis: auto;
    margin: 3vh 0px;
    align-items: center;
    border: 1px solid #F1C644;
    border-radius: 15px;
    & .ui.image{
        margin: 1vh;
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

const SearchItem = ({id,img,name,type,grade,reviewScore,reviewNum,location,phoneNumber})=>
{
    return(
        <ItemContainer>
            <Image src={img} alt = "요양원 사진" size="small"></Image>
            <InfoContainer>
                <div>
                    <span>{name}</span>
                    <span>{type}</span>
                    <span>{grade}</span>
                </div>
                <div>
                    <span>{reviewScore}</span>
                    <span>{reviewNum}</span>
                </div>
                <div>{location}</div>
                <div>{phoneNumber}</div>
            </InfoContainer>
            <LinkContainer>
                <Button size="small">상세보기</Button>
                <Button size="small">리뷰하기</Button>
            </LinkContainer>
        </ItemContainer>
        
    );
};

export default SearchItem;