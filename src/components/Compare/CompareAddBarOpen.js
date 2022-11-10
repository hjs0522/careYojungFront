import { Button,Icon,Container} from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import CompareList from "./CompareList";
import Compare from './Compare'

const ChildAppearing = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const CompareAddBarContainer = styled(Container)`
    &.ui.container{
        display: flex;
        justify-content: space-between;
        animation: ${ChildAppearing} 300ms ease-in-out 1;
        transition: opacity ease-in-out 100ms;
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


const CompareAddBarOpen = ({handleOnclick,compareList,onRemoveCompare})=>  {
    return(
        <CompareAddBarContainer>
            <TextContainer>
                <h2>시설비교</h2>
                <p>비교할 시설을 선택해주세요.</p>
            </TextContainer>
            <CompareList compareList={compareList} onRemoveCompare = {onRemoveCompare}></CompareList>
            <ButtonContainer>
                <Compare compareList={compareList} ></Compare>
                <CloseButton onClick={handleOnclick}>닫기<Icon name="angle down"></Icon></CloseButton>
            </ButtonContainer>
        </CompareAddBarContainer>
    );
}

export default CompareAddBarOpen;