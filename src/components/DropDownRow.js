import styled from "styled-components"
import { Dropdown } from "semantic-ui-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { gradeState, orderState, serviceState } from "../atom";
import {serviceOptions,gradeOptions,orderOptions} from '../searchOptions.js';

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


const DropDownRow = (props)=>{
    
    console.log(props);
    
    const handleServiceChange = (e,{value:service})=>{
        props.setService(service);
    }
    
    const handleGradeChange = (e,{value:grade})=>{
        props.setGrade(grade);
    }
    
    const handleOrderChange = (e,{value:order})=>{
        props.setOrder(order);
    }

    return(
        <DropdownContainer>
            <div>
                <span>서비스</span>
                <Dropdown options={serviceOptions} onChange={handleServiceChange} value = {props.service} selection></Dropdown>
            </div>
            <div>
            <span>등급</span>
            <Dropdown options={gradeOptions} onChange={handleGradeChange} value ={props.grade}  selection></Dropdown>
            </div>
            <div>
            <span>순서</span>
            <Dropdown options={orderOptions} onChange={handleOrderChange} value={props.order} selection></Dropdown>
            </div>
            <Link to ={`/search/map?keyword=${props.keyword}&service=${props.service}&grade=${props.grade}&order=${props.order}`}>지도로 보기</Link>
        </DropdownContainer>
    );
};

export default DropDownRow;

