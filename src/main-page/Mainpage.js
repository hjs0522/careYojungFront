import styled from "styled-components";
import { Button, Divider, Grid, Image } from 'semantic-ui-react'
import Footer from "../Footer";

const HorizontalScroll = styled.div({
    height:'150px',
    margin : '40px',
    whiteSpace:'nowrap',
    overflowX:'scroll'

})


const GridExampleRelaxedVery = () => (
  <Grid columns={8}>
    <StyledGridCol>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </StyledGridCol>
    <StyledGridCol>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </StyledGridCol>
    <StyledGridCol>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </StyledGridCol>
    <StyledGridCol>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </StyledGridCol>
    <StyledGridCol>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </StyledGridCol>
    <StyledGridCol>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </StyledGridCol>
  </Grid>
)

const Aaa = styled(GridExampleRelaxedVery)({
    width:'2000px',
    height:'500px',
    whiteSpace:'nowrap',
    overflowX:'scroll'
})

const StyledGridCol = styled(Grid.Column)({
    position:"ablsolute",
    width:'340px',
    height:'305px',

})


function Mainpage(){
    return (
        <div>
            <Footer />
        </div>
    )
}

export default Mainpage;