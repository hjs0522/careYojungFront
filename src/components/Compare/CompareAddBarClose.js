import { Button, Container, Icon } from "semantic-ui-react";
import styled,{keyframes} from "styled-components";


const ChildAppearing = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const CompareAddBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #496ace;
    animation: ${ChildAppearing} 300ms ease-in-out 1;
    transition: opacity ease-in-out 100ms;
    
`
const TextDiv = styled.div`
    color: #ffffff;
    font-size: large;
    & .text{
        font-weight: bold;
    }
`
const OpenButton = styled(Button)`
    &.ui.button{
        background-color:#496ace;
        color: #ffffff;
        border: solid #ffffff;
    }
`
const CompareAddBarClose = ({handleOnclick,compareList})=>
{
    return(
            <Container>
                <CompareAddBarContainer>
                    <div></div>
                    <TextDiv>시설비교함에 <texct>{compareList.length}</texct>개의 시설이 담겨있습니다.</TextDiv>
                    <OpenButton onClick={handleOnclick}>열기 <Icon name="angle up"></Icon></OpenButton>
                </CompareAddBarContainer>
            </Container>
    );
}

export default CompareAddBarClose;