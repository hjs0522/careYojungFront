import { Button,Image } from "semantic-ui-react";
import styled from "styled-components";

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1vh 0px;
    border: 1px solid #F1C644;
    margin: 3vh 0px;
    border-radius: 15px;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3vw;
    padding-right: 30vw;
`
const LinkContainer = styled.div`
    display: flex;
    height: 8vh;
    flex-direction: column;
    justify-content: space-between;
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
                <Button>상세보기</Button>
                <Button>리뷰하기</Button>
            </LinkContainer>
        </ItemContainer>
        
    );
};

export default SearchItem;