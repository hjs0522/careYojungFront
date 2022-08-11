import styled from "styled-components"
import SearchItem from "./SearchItem";
const ListContainer = styled.div`
    padding-left: 15vw;
    padding-right: 15vw;
`

const SearchList = ({searchList}) =>{

    return(
     <ListContainer>
        {searchList.map((it)=>(
        <SearchItem key={`item_${it.id}`} {...it}/>
        ))}
     </ListContainer>   
    );
};

export default SearchList;