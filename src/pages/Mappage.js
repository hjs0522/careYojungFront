import styled from "styled-components";
import Map from "../components/Map";
import Maplist from "../components/Maplist";

const StyledMappage = styled.div`
    padding-top:100px;
`


function Mappage(){
    
    return(
        <StyledMappage>
            <Maplist />
            <Map />
        </StyledMappage>
    )
}

export default Mappage;