import styled from "styled-components";
import Maplist from "../components/Maplist";

const StyledMappage = styled.div`
    padding-top:100px;
`


function Mappage(){
    
    return(
        <StyledMappage>
            <Maplist />
        </StyledMappage>
    )
}

export default Mappage;