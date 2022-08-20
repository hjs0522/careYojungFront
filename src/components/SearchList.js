import { useState } from "react";
import styled from "styled-components"
import SearchItem from "./SearchItem";
const ListContainer = styled.ul`
    padding-left: 15vw;
    padding-right: 15vw;
`

const SearchList = ({searchList,onAdd}) =>{
    return(
     <ListContainer>
        {searchList.map((it)=>(
        <SearchItem key={`item_${it.id}`} {...it} onAdd={onAdd}/>
        ))}
     </ListContainer>   
    );
};

export default SearchList;