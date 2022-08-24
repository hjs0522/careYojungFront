import { Button,Icon} from "semantic-ui-react";
import styled from "styled-components";
import Compare from "./Compare";
import CompareList from "./CompareList";

const CompareAddBarContainer = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    height: 10vh;
    width: 100%;
    border-top: solid;
    background-color: white;
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


const CompareAddBarOpen = ({toggleIsBarOpen,compareList,onRemoveCompare})=>  {
    
    
    
    
    return(
    <CompareAddBarContainer>
        <TextContainer>
            <h2>시설비교</h2>
            <p>비교할 시설을 선택해주세요.</p>
        </TextContainer>
        <CompareList compareList={compareList} onRemoveCompare = {onRemoveCompare}></CompareList>
        <ButtonContainer>
            <Compare></Compare>
            <Button onClick={toggleIsBarOpen}>닫기<Icon name="angle down"></Icon></Button>
        </ButtonContainer>
    </CompareAddBarContainer>
    );
}

export default CompareAddBarOpen;