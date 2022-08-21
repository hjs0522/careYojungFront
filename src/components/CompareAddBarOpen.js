import { useState } from "react";
import { Button, Container, Icon} from "semantic-ui-react";
import styled from "styled-components";
import CompareList from "./CompareList";

const CompareAddBarContainer = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100%;
    border-top: solid;
`


const CompareItem = styled.div`
    background-color: #496ace;
    border-radius: 10%;
    border: solid;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    justify-content: space-around;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 20px;
`


const CompareAddBarOpen = ({toggleIsBarOpen,compareList,onRemove})=>  {
    
    
    
    return(
    <CompareAddBarContainer>
        <TextContainer>
            <h2>시설비교</h2>
            <p>비교할 시설을 선택해주세요.</p>
        </TextContainer>
        <CompareList compareList={compareList} onRemove = {onRemove}></CompareList>
        <ButtonContainer>
            <Button>비교하기</Button>
            <Button onClick={toggleIsBarOpen}>닫기<Icon name="angle down"></Icon></Button>
        </ButtonContainer>
    </CompareAddBarContainer>
    );
}

export default CompareAddBarOpen;