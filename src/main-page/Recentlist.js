import styled from "styled-components";
import FacilityList from "./FacilityList";


const StyledRecentlist = styled.div({
    height:"350px"
})

const RecentH1 = styled.h1({
    fontSize:'20px',
    marginLeft:"7.5%"
})


function Recentlist(){
    return (<StyledRecentlist>
        <RecentH1>최근본시설</RecentH1>
        <FacilityList />
    </StyledRecentlist>)
}


export default Recentlist;