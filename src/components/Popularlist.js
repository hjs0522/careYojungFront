import styled from "styled-components";
import {  Grid, Image } from 'semantic-ui-react'
import FacilityList from "./FacilityList";
import { StyledInfo,StyledBox, InfoH1, InfoH3 } from "./Recentlist";

const StyledDiv = styled.div({
    marginBottom:"120px",
})

const StyledPopularlist = styled(Grid)({
    height:"100%"
})

const StyledPopularInfo = styled.div({ //최근 본 시설 소개 문구 css
    height:"100%",
    width:'80%',
    display:'inline-block',
    float:'left',
    marginTop:"10%",
    marginLeft:"50%",
})

function PopularInfo({size}){ //최근 본 시설 소개 문구 컴포넌트
    console.log(size);
    return(
        <StyledInfo>
            <StyledBox />
            <InfoH1>인기 있는 시설</InfoH1>
            <InfoH3>지역에서 가장 </InfoH3>
            <InfoH3>인기 있는 시설입니다.</InfoH3>
        </StyledInfo>
    )
}


function Popularlist({arr}){
    return (
        <StyledDiv>
            <StyledPopularlist>
                <Grid.Column width={3} floated="left">
                    <PopularInfo size={arr.size} />
                </Grid.Column>
                <Grid.Column width={13}>
                    <FacilityList size={4} arr={arr} ></FacilityList>
                </Grid.Column>
            </StyledPopularlist>
        </StyledDiv>
    )
}
export default Popularlist;