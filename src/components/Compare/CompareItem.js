import styled from "styled-components";
import { Icon } from "semantic-ui-react";
const CompareItemContainer = styled.div`
    background-color: #E6EDFF;
    border-radius: 10%;
    color: #496ACE !important;
    border: solid !important;
    display: flex;
`

const CompareItem = ({nursingHome_id,name,onRemoveCompare}) =>{
    const handleOnRemove = () =>{
        onRemoveCompare(nursingHome_id);
    }
    return(
    <CompareItemContainer>
        <div>{name}</div>
        <div>{<Icon name="remove circle" color="white" onClick = {handleOnRemove}></Icon>}</div>
    </CompareItemContainer>);
}

export default CompareItem;