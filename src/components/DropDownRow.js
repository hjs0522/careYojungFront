import styled from "styled-components"
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & *{padding: 0px 10px;}
    
    & a{
        border: solid;
    }
    
`

const serviceOptions = [
    {key:"all",text:"전체",value:"all"},
    {key:"ho", text:"요양원", value:"ho"},
    {key:"hs", text:"요양병원", value:"hs"},
]

const gradeOptions = [
    {key:"all",text:"전체",value:"all"},
    {key:"a",text:"A",value:"a"},
    {key:"b",text:"B",value:"b"},
    {key:"c",text:"C",value:"c"},
    {key:"d",text:"D",value:"d"},
    {key:"e",text:"E",value:"e"},
]

const orderOptions = [
    {key:"ac",text:"정확도순",value:"ac"},
    {key:"re",text:"최신순",value:"re"},
    {key:"gr",text:"평점순",value:"gr"},
    {key:"it",text:"관심순",value:"it"},
]
const DropDownRow = ()=>{
    const [service,setService] =useState(serviceOptions[0].value);
    const [grade,setGrade] = useState(gradeOptions[0].value);
    const [order,setOrder] = useState(orderOptions[0].value);
    
    const handleServiceChange = (e,{value:service})=>{
        setService(service);
        console.log(service);
    }
    
    const handleGradeChange = (e,{value:grade})=>{
        setGrade(grade);
        console.log(grade);
    }
    
    const handleOrderChange = (e,{value:order})=>{
        setOrder(order);
        console.log(order);
    }
    return(
        <DropdownContainer>
            <span>서비스</span>
            <Dropdown options={serviceOptions} onChange={handleServiceChange} value = {service} selection></Dropdown>
            <span>등급</span>
            <Dropdown options={gradeOptions} onChange={handleGradeChange} value ={grade}  selection></Dropdown>
            <span>순서</span>
            <Dropdown options={orderOptions} onChange={handleOrderChange} value={order} selection></Dropdown>
            <Link to ={"Mappage"}>지도로 보기</Link>
        </DropdownContainer>
    );
};

export default DropDownRow;

