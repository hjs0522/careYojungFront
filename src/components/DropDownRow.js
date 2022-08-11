import styled from "styled-components"
import { Button,Dropdown } from "semantic-ui-react";
const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & *{padding: 0px 10px;}
`

const DropDownRow = ()=>{
    return(
        <DropdownContainer>
            <span>서비스</span>
            <Dropdown></Dropdown>
            <span>등급</span>
            <Dropdown></Dropdown>
            <span>순서</span>
            <Dropdown></Dropdown>
            <Button>지도로 보기</Button>
        </DropdownContainer>
    );
};

export default DropDownRow;

