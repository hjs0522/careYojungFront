import styled from "styled-components";
import {  Grid, Image } from 'semantic-ui-react'

const HorizontalScroll = styled.div({
    height:'150px',
    width:"85%",
    marginLeft:"7.5%"
})

const StyledGrid = styled(Grid)({
  
})

const StyledGridCol = styled(Grid.Column)({
  
})

const StyledImage = styled(Image)({
  
})



const GridExampleRelaxedVery = () => (
  <StyledGrid >
    <Grid.Row>
      <StyledGridCol width={4}>
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </StyledGridCol>
      <StyledGridCol width={4}>
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </StyledGridCol>
      <StyledGridCol width={4}>
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </StyledGridCol>
      <StyledGridCol width={4}>
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png'/>
      </StyledGridCol>
    </Grid.Row>
  </StyledGrid>
)

function FacilityList(){
    return (
        <HorizontalScroll>
            <GridExampleRelaxedVery />
        </HorizontalScroll>
    )
}

export default FacilityList;