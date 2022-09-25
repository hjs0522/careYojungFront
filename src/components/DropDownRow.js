import styled from "styled-components"
import { Dropdown,Container} from "semantic-ui-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { gradeState, orderState, serviceState } from "../atom";
import {serviceOptions,gradeOptions,orderOptions} from '../searchOptions.js';

const DropdownBack = styled.div`
    background-color: white;
`

const DropdownContainer = styled(Container)`
    &.ui.container{
        padding-top: 10vh;
        padding-bottom: 2vh;
    }
`

const DropdownNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a{
        border: solid;
    }

`

const DropdownDiv = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
`



const DropDownRow = (props)=>{
    
    
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
        <DropdownBack>
            <DropdownContainer>
                <DropdownNav>
                    <DropdownDiv>
                        <span>서비스</span>
                        <Dropdown options={serviceOptions} onChange={handleServiceChange} value = {props.service} selection></Dropdown>
                    </DropdownDiv>
                    <DropdownDiv>
                        <span>등급</span>
                        <Dropdown options={gradeOptions} onChange={handleGradeChange} value ={props.grade}  selection></Dropdown>
                    </DropdownDiv>
                    <DropdownDiv>
                        <span>순서</span>
                     <Dropdown options={orderOptions} onChange={handleOrderChange} value={props.order} selection></Dropdown>
                    </DropdownDiv>
                    <DropdownDiv>
                        <Link to ={`/search/map?keyword=${props.keyword}&service=${props.service}&grade=${props.grade}&order=${props.order}`}>지도로 보기</Link>
                    </DropdownDiv>
                </DropdownNav>
            </DropdownContainer>
        </DropdownBack>
    );
};

export default DropDownRow;

