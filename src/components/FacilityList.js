import styled from "styled-components";
import {  Grid, Image } from 'semantic-ui-react'
import ListArg from "./ListArg";
import Detail from "./Detail";

const HorizontalScroll = styled.div`
    white-space:nowrap;
    overflow:auto;
    height:100%;
    padding-bottom:20px;
    width:80%;
    margin-Left:5%;
    display:inline-block;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background: #706EE9;
      border-radius: 6px;
    }
`;


const GridExampleRelaxedVery = ({size, arr}) => {  //넘겨받는 count는 semantic-ui-react의 grid에서 출력 크기 (값이 클수록 커짐)
  return(<Grid>
    <Grid.Row>
      <Grid.Column width={size} >
        {arr.map( (i) => <ListArg name={i.name} img={i.img} loc={i.ShortLoc} /> )}
      </Grid.Column>
    </Grid.Row>
  </Grid>)
}

function FacilityList({size,arr}){
    return (
      <>
        <HorizontalScroll>
            <GridExampleRelaxedVery size={size} arr={arr} />
        </HorizontalScroll>
      </>
    )
}

export default FacilityList;