import styled from "styled-components";
import FacilityList from "./FacilityList";
import {Grid} from 'semantic-ui-react'

const StyledDiv = styled.div({
    position:'relative',
    marginBottom:"120px",
})


const StyledRecentlist = styled(Grid)({ //메인 페이지 최근 본 시설 css
    
})

export const StyledInfo = styled.div({ //최근 본 시설 소개 문구 css
    height:"100%",
    width:'80%',
    display:'inline-block',
    float:'left',
    marginTop:"10%",
    marginLeft:"50%",
})

export const InfoH1=styled.h1({
    paddingTop:'10px',
    color:'#496ACE',
})
export const InfoH3=styled.h6({
    margin:'0px',
    fontSize:'20px',
    fontWeight:'normal',
    color:'#444444',
})

export const StyledBox = styled.div({
    height:'5px',
    width:"40px",
    backgroundColor:'#496ACE',
})

function RecentInfo(){ //최근 본 시설 소개 문구 컴포넌트
    return(
        <StyledInfo>
            <StyledBox />
            <InfoH1>최근 본 시설</InfoH1>
            <InfoH3>고객님께서 </InfoH3>
            <InfoH3>최근 본 시설입니다.</InfoH3>
        </StyledInfo>
    )
}




function Recentlist({arr}){
    return (
        <StyledDiv>
            <StyledRecentlist>
                <Grid.Column width={4} floated="left">
                    <RecentInfo />
                </Grid.Column>
                <Grid.Column width={12}>
                    <FacilityList size={4} arr={arr} />
                </Grid.Column>
            </StyledRecentlist>
        </StyledDiv>
    )
}


export default Recentlist;