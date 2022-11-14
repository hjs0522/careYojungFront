import { useEffect } from "react";
import styled from "styled-components"
import CompareAddBarClose from "./CompareAddBarClose";
import CompareAddBarOpen from "./CompareAddBarOpen";

const CompareBarBack = styled.div`
    background-color: #496ace;
    position: sticky;
    display: flex;
    bottom: 0px;
    height: 7vh;
    justify-content: center;
    align-items: center;
    transition: height ease-in-out 300ms;
`

const CompareBar = ({barOpen,setBarOpen,compareList,onRemoveCompare})=>{
    
    const handleOnClick = ()=>{
        setBarOpen(!barOpen);
    }
    useEffect(()=>{
        if (barOpen){
            document.getElementById("comparebar").style.height = "12vh";
            document.getElementById("comparebar").style.boxShadow = "-5px 0px 5px 0px #66666"
            document.getElementById("comparebar").style.backgroundColor = "white";
        }
        else{
            document.getElementById("comparebar").style.height = "7vh";
            document.getElementById("comparebar").style.boxShadow = "none";
            document.getElementById("comparebar").style.backgroundColor = "#496ace";
        }
    },[barOpen])
    return(
    <CompareBarBack id="comparebar">
        {barOpen?
        <CompareAddBarOpen
        id = "comparebarOpen"
        handleOnclick = {handleOnClick}
        compareList={compareList}
        onRemoveCompare={onRemoveCompare}></CompareAddBarOpen>
        :
        <CompareAddBarClose
        id = "comparebarClose"
        handleOnclick = {handleOnClick}
        compareList={compareList}>
        </CompareAddBarClose>
        }
    </CompareBarBack>
    );
}

export default CompareBar;
