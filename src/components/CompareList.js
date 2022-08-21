import styled from "styled-components";
import CompareItem from "./CompareItem";
const CompareListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & >div{
        padding: 20px 50px;
        margin: 10px;
        border: dotted;
        border-radius: 10%;
    }
`

const CompareList = ({compareList,onRemove})=>{
    return(
        <CompareListContainer>
            {compareList.map((it)=>
            (<CompareItem key={it.id} {...it} onRemove = {onRemove}></CompareItem>))}
        </CompareListContainer>
    );
}

export default CompareList;