import styled from "styled-components";
import { Container, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { useState } from "react";

const StyledGrid = styled(Grid)({
  height: "160px",
  width: "100%",
});
const StyledColumn = styled(Grid.Column)({
  display: "inline",
  marginRight: "50px",
  fontWeight: "bold",
  fontSize: "17px",
});
const StyledGridRow = styled(Grid.Row)({
  marginBottom: "20px",
  marginTop: "10px",
});

const Logo = styled(Link)`
  font-family: "Jalnan";
  font-size: x-large;
  color: #cccccc;
`;

const StyledP = styled.p({
  height: "25px",
  fontSize: "15px",
});

function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  if (isMobile) {
    return (
      <div
        style={{
          backgroundColor: "#fafafa",
          borderTop: "solid 1px #E1E1E1",
          paddingTop: "30px",
        }}
      >
        <Container>
          <Logo to={"/"}>케어요정</Logo>
          <StyledGridRow>
            <div
              style={{
                display: "inline-block",
                width: "50%",
                textAlign: "right",
                marginRight: "0",
              }}
            >
              <StyledColumn width={2}>개인정보처리방침</StyledColumn>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "50%",
                textAlign: "right",
                marginRight: "0",
              }}
            >
              <StyledColumn>시설정보수정</StyledColumn>
            </div>

            <div
              style={{
                display: "inline-block",
                width: "50%",
                textAlign: "right",
                marginRight: "0",
              }}
            >
              <StyledColumn>공지사항</StyledColumn>
            </div>
            <div
              style={{
                display: "inline-block",
                width: "50%",
                textAlign: "right",
                marginRight: "0",
              }}
            >
              <StyledColumn>이용약관</StyledColumn>
            </div>
          </StyledGridRow>
          <Grid.Row>
            <StyledP>ydk9819@gmail.com</StyledP>
          </Grid.Row>
          <Grid.Row>
            <StyledP>Copyrightⓒ2022 silver surfer All rights reserved.</StyledP>
          </Grid.Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "#fafafa",
          borderTop: "solid 1px #E1E1E1",
          paddingTop: "30px",
        }}
      >
        <Container>
          <StyledGrid>
            <Grid.Column width={3}>
              <Logo to={"/"}>케어요정</Logo>
            </Grid.Column>
            <Grid.Column width={12} style={{ marginLeft: "5%" }}>
              <StyledGridRow>
                <StyledColumn>개인정보처리방침</StyledColumn>
                <div style={{ display: "inline" }}>
                  <StyledColumn>시설정보수정</StyledColumn>
                </div>
                <StyledColumn>
                  <Link to={"/info"}>공지사항</Link>
                </StyledColumn>
                <StyledColumn>이용약관</StyledColumn>
              </StyledGridRow>
              <Grid.Row>
                <StyledP>ydk9819@gmail.com</StyledP>
              </Grid.Row>
              <Grid.Row>
                <StyledP>
                  Copyrightⓒ2022 silver surfer All rights reserved.
                </StyledP>
              </Grid.Row>
            </Grid.Column>
          </StyledGrid>
        </Container>
      </div>
    );
  }
}

export default Footer;
