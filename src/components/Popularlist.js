import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import FacilityList from "./FacilityList";
import { StyledInfo, StyledBox, InfoH1, InfoH3 } from "./Recentlist";
import { useState, useEffect } from "react";

const StyledDiv = styled.div({
  marginBottom: "120px",
});

const StyledPopularlist = styled(Grid)({});

function PopularInfo({ listLen, listCount, isMobile }) {
  //최근 본 시설 소개 문구 컴포넌트
  if (isMobile) {
    return (
      <StyledInfo style={{ marginLeft: "10%", marginTop: "0%" }}>
        <StyledBox />
        <InfoH1>인기 있는 시설</InfoH1>
        <InfoH3>지역에서 가장 인기 있는 시설입니다.</InfoH3>
      </StyledInfo>
    );
  } else {
    return (
      <StyledInfo>
        <StyledBox />
        <InfoH1>인기 있는 시설</InfoH1>
        <InfoH3>지역에서 가장 </InfoH3>
        <InfoH3>인기 있는 시설입니다.</InfoH3>
        <InfoH3 style={{ marginTop: "10%", fontSize: "18px" }}>
          {"<"} {listCount}
          {"/"}
          {listLen} {">"}
        </InfoH3>
      </StyledInfo>
    );
  }
}

function Popularlist({ arr, isMobile }) {
  const listLen = arr.length;
  const [listCount, setListCount] = useState(0);
  useEffect(() => {
    if (listLen > 4) setListCount(4);
    else setListCount(listLen);
  }, []);
  if (isMobile) {
    return (
      <StyledDiv>
        <StyledPopularlist>
          <PopularInfo
            isMobile={isMobile}
            listLen={listLen}
            listCount={listCount}
          />
          <FacilityList
            size={4}
            arr={arr}
            id="popularlist"
            listLen={listLen}
            listCount={listCount}
            setListCount={setListCount}
            isMobile={isMobile}
          ></FacilityList>
        </StyledPopularlist>
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <StyledPopularlist>
          <Grid.Column width={4} floated="left">
            <PopularInfo
              isMobile={isMobile}
              listLen={listLen}
              listCount={listCount}
            />
          </Grid.Column>
          <Grid.Column width={12}>
            <FacilityList
              size={4}
              arr={arr}
              id="popularlist"
              listLen={listLen}
              listCount={listCount}
              setListCount={setListCount}
              isMobile={isMobile}
            ></FacilityList>
          </Grid.Column>
        </StyledPopularlist>
      </StyledDiv>
    );
  }
}
export default Popularlist;
