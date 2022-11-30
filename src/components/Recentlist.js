import styled from "styled-components";
import FacilityList from "./FacilityList";
import { Grid } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";

const StyledDiv = styled.div({
  position: "relative",
  marginBottom: "60px",
  marginTop: "60px",
});

const StyledRecentlist = styled(Grid)({
  //메인 페이지 최근 본 시설 css
});

export const StyledInfo = styled.div({
  //최근 본 시설 소개 문구 css
  height: "100%",
  width: "80%",
  display: "inline-block",
  float: "left",
  marginTop: "10%",
  marginLeft: "50%",
});

export const InfoH1 = styled.h1({
  fontFamily: "NanumEB",
  fontWeight: "bold",
  paddingTop: "10px",
  color: "#496ACE",
});
export const InfoH3 = styled.h6({
  fontFamily: "NanumB",
  margin: "0px",
  fontSize: "20px",
  fontWeight: "normal",
  color: "#444444",
});

export const StyledBox = styled.div({
  height: "5px",
  width: "40px",
  backgroundColor: "#496ACE",
});

function RecentInfo({ listLen, listCount, isMobile }) {
  //최근 본 시설 소개 문구 컴포넌트
  if (isMobile) {
    return (
      <StyledInfo style={{ marginLeft: "10%", marginTop: "0%" }}>
        <StyledBox />
        <InfoH1>최근 본 시설</InfoH1>
        <InfoH3>고객님께서 최근 본 시설입니다.</InfoH3>
      </StyledInfo>
    );
  } else {
    return (
      <StyledInfo>
        <StyledBox />
        <InfoH1>최근 본 시설</InfoH1>
        <InfoH3>고객님께서 </InfoH3>
        <InfoH3>최근 본 시설입니다.</InfoH3>
        <InfoH3 style={{ marginTop: "10%", fontSize: "18px" }}>
          {"<"} {listCount}
          {"/"}
          {listLen} {">"}
        </InfoH3>
      </StyledInfo>
    );
  }
}

function Recentlist({ arr, isMobile }) {
  const listLen = arr.length;
  const [listCount, setListCount] = useState(0);
  useEffect(() => {
    if (listLen > 4) setListCount(4);
    else setListCount(listLen);
  }, []);
  if (isMobile) {
    return (
      <StyledDiv>
        <StyledRecentlist>
          <RecentInfo
            isMobile={isMobile}
            listLen={listLen}
            listCount={listCount}
          />
          <FacilityList
            size={4}
            arr={arr}
            id="recentlist"
            listLen={listLen}
            listCount={listCount}
            setListCount={setListCount}
            isMobile={isMobile}
          />
        </StyledRecentlist>
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <StyledRecentlist>
          <Grid.Column width={4} floated="left">
            <RecentInfo
              listLen={listLen}
              listCount={listCount}
              isMobile={isMobile}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <FacilityList
              size={4}
              arr={arr}
              id="recentlist"
              listLen={listLen}
              listCount={listCount}
              setListCount={setListCount}
              isMobile={isMobile}
            />
          </Grid.Column>
        </StyledRecentlist>
      </StyledDiv>
    );
  }
}

export default Recentlist;
