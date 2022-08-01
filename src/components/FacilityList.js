import styled from "styled-components";
import {  Grid, Image } from 'semantic-ui-react'
import ListArg from "./ListArg";

const HorizontalScroll = styled.div({
    whiteSpace:'nowrap',
    overflow:"auto",
    height:'105%',
    paddingBottom:'20px',
    width:"80%",
    marginLeft:"5%",
    display:'inline-block',
})

const StyledGrid = styled(Grid)({
  
})

const StyledGridCol = styled(Grid.Column)({
  
})



const GridExampleRelaxedVery = ({size, arr}) => {  //넘겨받는 count는 semantic-ui-react의 grid에서 출력 크기 (값이 클수록 커짐)
  return(<StyledGrid>
    <Grid.Row>
      <StyledGridCol width={size} >
        
        {arr.map( (i) => <ListArg name={i.name} img={i.img} loc={i.ShortLoc} /> )}
        {/* <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
      </StyledGridCol>
    </Grid.Row>
    
  </StyledGrid>)
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