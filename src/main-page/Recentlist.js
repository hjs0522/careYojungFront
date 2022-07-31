import styled from "styled-components";
import FacilityList from "./FacilityList";


const StyledRecentlist = styled.div({
    height:"350px"
})

const RecentH1 = styled.h1({
    fontSize:'20px',
    marginLeft:"7.5%"
})

const Aaa = styled.div({
    height:"350px",
    overflow:"scroll",
})


function Recentlist(){
    return (<StyledRecentlist>
        <RecentH1>최근 본 시설</RecentH1>
        <FacilityList count={4}/>
    </StyledRecentlist>)
}


export default Recentlist;