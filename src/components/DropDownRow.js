import styled from "styled-components"
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const DropdownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & a{
        border: solid;
    }
    & span{
        padding-right: 2vw;
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
    {key:"0",text:"정확도순",value:"0"},
    {key:"1",text:"평점순",value:"1"},
    {key:"2",text:"관심순",value:"2"},
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
            <div>
                <span>서비스</span>
                <Dropdown options={serviceOptions} onChange={handleServiceChange} value = {service} selection></Dropdown>
            </div>
            <div>
            <span>등급</span>
            <Dropdown options={gradeOptions} onChange={handleGradeChange} value ={grade}  selection></Dropdown>
            </div>
            <div>
            <span>순서</span>
            <Dropdown options={orderOptions} onChange={handleOrderChange} value={order} selection></Dropdown>
            </div>
            <Link to ={"/map"}>지도로 보기</Link>
        </DropdownContainer>
    );
};

export default DropDownRow;

