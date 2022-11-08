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
    transition: all ease-in-out 2s;
`

const CompareBar = ({barOpen,toggleIsBarOpen,compareList,onRemoveCompare})=>{
    
    
    const handleOnclick = ()=>{
        toggleIsBarOpen();
        if (barOpen === false){
            document.getElementById("comparebar").style.height = "12vh";
            document.getElementById("comparebar").style.boxShadow = "-5px 0px 5px 0px #66666"
            document.getElementById("comparebar").style.backgroundColor = "white";
        }
        else{
            document.getElementById("comparebar").style.height = "7vh";
            document.getElementById("comparebar").style.boxShadow = "none";
            document.getElementById("comparebar").style.backgroundColor = "#496ace";
        }
    }
    return(
    <CompareBarBack id="comparebar">
        {barOpen?
        <CompareAddBarOpen
        id = "comparebarOpen"
        handleOnclick = {handleOnclick}
        compareList={compareList}
        onRemoveCompare={onRemoveCompare}></CompareAddBarOpen>
        :
        <CompareAddBarClose
        id = "comparebarClose"
        handleOnclick = {handleOnclick}
        compareList={compareList}>
        </CompareAddBarClose>
        }
    </CompareBarBack>
    );
}

export default CompareBar;