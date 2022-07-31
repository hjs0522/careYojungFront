import styled from "styled-components";
import {  Grid, Image } from 'semantic-ui-react'
import _ from 'lodash'

const HorizontalScroll = styled.div({
    whiteSpace:'nowrap',
    overflow:"auto",
    height:'80%',
    width:"85%",
    marginLeft:"7.5%"
})

const StyledGrid = styled(Grid)({
  
})

const StyledGridCol = styled(Grid.Column)({
  
})

const StyledImage = styled.img({
  //width:"260px",
  borderRadius:'10px',
  marginLeft:'20px',
  marginRight:'20px',
})


const GridExampleRelaxedVery = ({count}) => (
  <StyledGrid  >
    <Grid.Row>
      <StyledGridCol width={count} >
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
      </StyledGridCol>
    </Grid.Row>
    
  </StyledGrid>
)

function FacilityList({count}){
    return (
        <HorizontalScroll>
            {console.log(count)}
            <GridExampleRelaxedVery count={count} />
        </HorizontalScroll>
    )
}

export default FacilityList;