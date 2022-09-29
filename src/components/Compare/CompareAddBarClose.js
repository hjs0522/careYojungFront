import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

const CompareAddBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0px;
    height: 7vh;
    width: 100%;
    background-color: #496ace;
`   

const CompareAddBarClose = ({toggleIsBarOpen,compareList})=>
{
    return(
        <CompareAddBarContainer>
            <div>시설비교함에 {compareList.length}개의 시설이 담겨있습니다.</div>
            <Button onClick={toggleIsBarOpen}>열기 <Icon name="angle up"></Icon></Button>
        </CompareAddBarContainer>
    );
}

export default CompareAddBarClose;