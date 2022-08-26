import styled from "styled-components";
import CompareItem from "./CompareItem";
import { Icon } from "semantic-ui-react";
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

const CompareList = ({compareList,onRemoveCompare})=>{


    const getCompare = ()=> {
        const result = []
        for(let i=0;i<3;i++){
          if (compareList.length < i+1){
            result.push(<div><Icon name="plus"></Icon></div>);
          }
          else{
            result.push(<CompareItem key={compareList[i].nursingHome_id} {...compareList[i]} onRemoveCompare = {onRemoveCompare}></CompareItem>)
          }
        }
        return result;
    }
    
    /*
    {compareList.map((it)=>(
                <CompareItem key={it.nursingHome_id} {...it} onRemoveCompare = {onRemoveCompare}></CompareItem>))}
    */
    return(
        <CompareListContainer>
            {getCompare()}
        </CompareListContainer>
    );
}

export default CompareList;