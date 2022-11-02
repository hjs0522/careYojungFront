import { Button,Icon,Container} from "semantic-ui-react";
import styled from "styled-components";
import CompareList from "./CompareList";
import Compare from './Compare'
const CompareAddBarBack = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 0px;
    height: 12vh;
    box-shadow: -5px 0px 5px 0px #666666;
    background-color: white;
`
const CompareAddBarContainer = styled(Container)`
    &.ui.container{
        display: flex;
        justify-content: space-between;
    }
`



const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;

`

const CloseButton = styled(Button)`
    
    &.ui.button{
    background-color: #ffffff;
    color: #496ace;
    border: solid #496ace;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;
`


const CompareAddBarOpen = ({toggleIsBarOpen,compareList,onRemoveCompare})=>  {
    return(
    <CompareAddBarBack>
        <CompareAddBarContainer>
            <TextContainer>
                <h2>시설비교</h2>
                <p>비교할 시설을 선택해주세요.</p>
            </TextContainer>
            <CompareList compareList={compareList} onRemoveCompare = {onRemoveCompare}></CompareList>
            <ButtonContainer>
                <Compare compareList={compareList} ></Compare>
                <CloseButton onClick={toggleIsBarOpen}>닫기<Icon name="angle down"></Icon></CloseButton>
            </ButtonContainer>
        </CompareAddBarContainer>
    </CompareAddBarBack>
    );
}

export default CompareAddBarOpen;