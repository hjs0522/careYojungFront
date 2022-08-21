import { useState } from "react";
import styled from "styled-components"
import SearchItem from "./SearchItem";
const ListContainer = styled.ul`
    padding-left: 15vw;
    padding-right: 15vw;
`

const SearchList = ({searchList,onAdd,onEditWish,isWishPage,onRemoveWish}) =>{
    return(
     <ListContainer>
        {searchList.map((it)=>(
        <SearchItem key={it.nursingHome_id} {...it} onAdd={onAdd} onEditWish = {onEditWish} isWishPage={isWishPage} onRemoveWish={onRemoveWish}/>
        ))}
     </ListContainer>   
    );
};

export default SearchList;