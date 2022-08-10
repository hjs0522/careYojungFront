import styled from "styled-components";
import DropDownRow from "../components/DropDownRow";

const SearchPageContainer = styled.div`
    padding-top: 9vh;
    padding-bottom: 150px;
`

const ListContainer = styled.div`
    padding-left: 15vw;
    padding-right: 15vw;
`


const SearchPage = ()=>{
    return(
    <SearchPageContainer>
        <DropDownRow></DropDownRow>
        <ListContainer>
        
        </ListContainer>
    </SearchPageContainer>
    )
};

export default SearchPage;