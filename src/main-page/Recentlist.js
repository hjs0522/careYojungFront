import styled from "styled-components";
import FacilityList from "./FacilityList";
import {Grid} from 'semantic-ui-react'

const StyledDiv = styled.div({
    marginBottom:"120px",
})


const StyledRecentlist = styled(Grid)({ //메인 페이지 최근 본 시설 css
    height:"100%",
    
})

const StyledRecentInfo = styled.div({ //최근 본 시설 소개 문구 css
    height:"100%",
    width:'80%',
    display:'inline-block',
    float:'left',
    marginTop:"10%",
    marginLeft:"50%",
})

const RecentH1=styled.h1({
    paddingTop:'30px',
    color:'#496ACE',
})
const RecentH3=styled.h6({
    margin:'0px',
    fontSize:'20px',
    fontWeight:'normal',
    color:'#444444',
})

function RecentInfo(){ //최근 본 시설 소개 문구 컴포넌트
    return(
        <StyledRecentInfo>
            <RecentH1>최근 본 시설</RecentH1>
            <RecentH3>고객님께서 </RecentH3>
            <RecentH3>최근 본 시설입니다.</RecentH3>
        </StyledRecentInfo>
    )
}




function Recentlist({arr}){
    return (
        <StyledDiv>
            <StyledRecentlist>
                <Grid.Column width={3} floated="left">
                    <RecentInfo />
                </Grid.Column>
                <Grid.Column width={13}>
                    <FacilityList size={4} arr={arr} />
                </Grid.Column>
            </StyledRecentlist>
        </StyledDiv>
    )
}


export default Recentlist;