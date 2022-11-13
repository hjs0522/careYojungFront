import styled from "styled-components";
import CompareItem from "./CompareItem";
import { Container, Icon } from "semantic-ui-react";
const CompareListContainer = styled.div`
    display: flex;
    & >div{
        width: 150px;
        height: 100%;
        margin: 0px 10px;
        border: dotted;
        color: #E1E1E1;
        border-radius: 10%;
        overflow-wrap: break-word;
    }
`

const CompareDiv = styled.div`
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CompareList = ({compareList,onRemoveCompare})=>{


    const getCompare = ()=> {
        const result = []
        for(let i=0;i<3;i++){
          if (compareList.length < i+1){
            result.push(<CompareDiv><Icon name="plus"></Icon></CompareDiv>);
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
