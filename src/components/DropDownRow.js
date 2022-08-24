import styled from "styled-components"
import { Button,Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & *{padding: 0px 10px;}
    
    & a{
        border: solid;
    }
    
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
            <Link to ={"/map"}>지도로 보기</Link>
        </DropdownContainer>
    );
};

export default DropDownRow;

