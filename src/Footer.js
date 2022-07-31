//풋터 컴포넌트
import styled from "styled-components";
import { Button, Grid, Image } from 'semantic-ui-react'

const StyledFooter = styled.div`
  height:150px;
  width:100%;  
  border-top : solid 1px black;
  background-color:white;
`;

const StyledGrid = styled(Grid)({
  height:'150px',
  width:'100%',
  borderTop : 'solid 1px #E1E1E1',
  backgroundColor:'white'
})
const StyledColumn = styled(Grid.Column)({
    display:"inline",
    marginRight:"50px",
    fontWeight:"bold"
})
const StyledGridRow = styled(Grid.Row)({
    marginBottom:'10px',
    marginTop:'10px'
})


function Footer(){
    return (
        <StyledGrid>
            <Grid.Column width={2}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
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
                    ydk9819@gmail.com
                </Grid.Row>
                <Grid.Row>
                    Copyrightⓒ2022 silver surfer All rights reserved.
                </Grid.Row>
            </Grid.Column>
        </StyledGrid>

    )
}

export default Footer;