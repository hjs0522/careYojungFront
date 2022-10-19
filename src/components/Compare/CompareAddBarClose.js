import { Button, Container, Icon } from "semantic-ui-react";
import styled from "styled-components";

const CompaerBack = styled.div`
    background-color: #496ace;
    position: sticky;
    display: flex;
    bottom: 0px;
    height: 7vh;
    justify-content: center;
    align-items: center;
`

const CompareAddBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #496ace;
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
const CompareAddBarClose = ({toggleIsBarOpen,compareList})=>
{
    return(
        <CompaerBack>
            <Container>
                <CompareAddBarContainer>
                    <div></div>
                    <TextDiv>시설비교함에 <texct>{compareList.length}</texct>개의 시설이 담겨있습니다.</TextDiv>
                    <OpenButton onClick={toggleIsBarOpen}>열기 <Icon name="angle up"></Icon></OpenButton>
                </CompareAddBarContainer>
            </Container>
        </CompaerBack>
    );
}

export default CompareAddBarClose;