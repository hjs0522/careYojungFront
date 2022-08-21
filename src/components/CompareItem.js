import styled from "styled-components";
import { Icon } from "semantic-ui-react";
const CompareItemContainer = styled.div`
    background-color: #496ace;
    border-radius: 10%;
    border: solid;
`

const CompareItem = ({id,name,onRemove}) =>{
    const handleOnRemove = () =>{
        onRemove(id);
    }
    return(
    <CompareItemContainer>
        {name}{<Icon name="remove circle" color="white" onClick = {handleOnRemove}></Icon>}
    </CompareItemContainer>);
}

export default CompareItem;