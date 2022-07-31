import styled from "styled-components";
import {  Grid, Image } from 'semantic-ui-react'
import FacilityList from "./FacilityList";

const StyledPopularlist = styled.div({
    height:"350px"
})

const PopularH1 = styled.h1({
    fontSize:'20px',
    marginLeft:"7.5%"
})





function Popularlist(){
    return (
        <StyledPopularlist>
            <PopularH1>가장 인기있는 시설</PopularH1>
            <FacilityList ></FacilityList>
        </StyledPopularlist>
    )
}
export default Popularlist;