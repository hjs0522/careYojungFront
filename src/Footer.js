//풋터 컴포넌트
import styled from "styled-components";
import { Button, Grid, Image } from 'semantic-ui-react'


const StyledGrid = styled(Grid)({
  height:'150px',
  width:'100%',
  borderTop : 'solid 1px #E1E1E1',
  backgroundColor:'white'
})
const StyledColumn = styled(Grid.Column)({
    display:"inline",
    marginRight:"50px",
    fontWeight:"bold",
    fontSize:"17px"
})
const StyledGridRow = styled(Grid.Row)({
    marginBottom:'20px',
    marginTop:'10px'
})

const StyledImage = styled(Image)({
    width:"160px", 
    marginLeft:"50px"
})

const StyledP = styled.p({
    height:"25px",
    fontSize:'15px'
})


function Footer(){
    return (
        <StyledGrid>
            <Grid.Column width={3}>
            <StyledImage src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={12}>
                <StyledGridRow >
                    <StyledColumn >
                        개인정보처리방침
                    </StyledColumn>
                    <StyledColumn >
                        자주묻는질문
                    </StyledColumn>
                    <StyledColumn >
                        공지사항
                    </StyledColumn>
                    <StyledColumn>
                        이용약관
                    </StyledColumn>
                </StyledGridRow>
                <Grid.Row>
                    <StyledP>
                        ydk9819@gmail.com
                    </StyledP>
                </Grid.Row>
                <Grid.Row>
                    <StyledP>
                        Copyrightⓒ2022 silver surfer All rights reserved.
                    </StyledP>
                </Grid.Row>
            </Grid.Column>
        </StyledGrid>

    )
}

export default Footer;