import styled from "styled-components"
import { Dropdown,Container, Icon} from "semantic-ui-react";
import { Link} from "react-router-dom";
import { serviceOptions,gradeOptions,orderOptions } from "../../searchOptions";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
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
    width: 100%;
    & a{
        color: white;
        background-color: #496ace;
        padding: 8px;
        border-radius: 10%;
    }
    
    & text{
        margin-right: 10px;
    }
`

const DropdownDiv = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
`



const DropDownRow = (props)=>{
    
    const [searchParams,setSearchParams] = useSearchParams();
    useEffect(()=>{
        setSearchParams({service: props.service, grade: props.grade, order:props.order});
    },[setSearchParams,props.service,props.grade,props.order])
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
                        <text>서비스</text>
                        <Dropdown options={serviceOptions} onChange={handleServiceChange} value = {props.service} selection></Dropdown>
                    </DropdownDiv>
                    <DropdownDiv>
                        <text>등급</text>
                        <Dropdown options={gradeOptions} onChange={handleGradeChange} value ={props.grade}  selection></Dropdown>
                    </DropdownDiv>
                    <DropdownDiv>
                        <text>순서</text>
                     <Dropdown options={orderOptions} onChange={handleOrderChange} value={props.order} selection></Dropdown>
                    </DropdownDiv>
                    <DropdownDiv>
                        <Link to ={`/search/map?keyword=${props.keyword}&service=${props.service}&grade=${props.grade}&order=${props.order}`}>
                            <Icon name="map outline"></Icon>
                            지도로 보기
                        </Link>
                    </DropdownDiv>
                </DropdownNav>
            </DropdownContainer>
        </DropdownBack>
    );
};

export default DropDownRow;

