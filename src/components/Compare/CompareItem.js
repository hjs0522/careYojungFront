import styled from "styled-components";
import { Icon } from "semantic-ui-react";
const CompareItemContainer = styled.div`
    background-color: #496ace;
    border-radius: 10%;
    border: solid;
`

const CompareItem = ({nursingHome_id,name,onRemoveCompare}) =>{
    const handleOnRemove = () =>{
        onRemoveCompare(nursingHome_id);
    }
    return(
    <CompareItemContainer>
        {name}{<Icon name="remove circle" color="white" onClick = {handleOnRemove}></Icon>}
    </CompareItemContainer>);
}

export default CompareItem;