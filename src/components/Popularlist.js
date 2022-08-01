import styled from "styled-components";
import {  Grid, Image } from 'semantic-ui-react'
import FacilityList from "./FacilityList";

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

const PopularH1=styled.h1({
    paddingTop:'30px',
    color:'#496ACE',
})
const PopularH3=styled.h6({
    margin:'0px',
    fontSize:'20px',
    fontWeight:'normal',
    color:'#444444',
})

function PopularInfo(){ //최근 본 시설 소개 문구 컴포넌트
    return(
        <StyledPopularInfo>
            <PopularH1>인기 있는 시설</PopularH1>
            <PopularH3>지역에서 가장 </PopularH3>
            <PopularH3>인기 있는 시설입니다.</PopularH3>
        </StyledPopularInfo>
    )
}


function Popularlist({arr}){
    return (
        <StyledDiv>
            <StyledPopularlist>
                <Grid.Column width={3} floated="left">
                    <PopularInfo />
                </Grid.Column>
                <Grid.Column width={13}>
                    <FacilityList size={4} arr={arr} ></FacilityList>
                </Grid.Column>
            </StyledPopularlist>
        </StyledDiv>
    )
}
export default Popularlist;