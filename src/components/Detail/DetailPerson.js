import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
const DetailPersonBox = styled.div({
  width: "30%",
  border: "1px solid #e1e1e1",
  borderRadius: "20px",
  padding: "1%",
  display: "inline-block",
});
const DetailPersonText = styled.div({
  fontSize: "19px",
  display: "inline",
  textAlign: "center",
  fontFamily: "NanumB",
});

const MobileDetailPersonText = styled.div({
  fontSize: "15px",
  display: "inline",
  textAlign: "center",
  fontFamily: "NanumB",
});


const DetailTitle = styled.h2({
  fontWeight: "normal",
  fontSize: "24px",
  fontFamily: "NanumB",
});

const MobileDetailTitle = styled.h2({
  fontWeight: "normal",
  fontSize: "20px",
  fontFamily: "NanumB",
});

const StyledDetailBox = styled.div({
  marginTop: "4%",
});

function DetailPerson({ detailInfo }) {

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });
  if (isMobile){
    return (
      <StyledDetailBox id="Detail-2">
        <MobileDetailTitle>인력현황</MobileDetailTitle>
        <DetailPersonBox style={{ marginLeft: "0" }}>
          <div style={{ padding: "7%", borderBottom: "1px solid #e1e1e1" }}>
            <MobileDetailPersonText>의사</MobileDetailPersonText>
            <MobileDetailPersonText style={{ float: "right", color: "#E9539b" }}>
              {detailInfo.doctor}명
            </MobileDetailPersonText>
          </div>
          <div style={{ padding: "7%" }}>
            <MobileDetailPersonText style={{ display: "block", marginBottom: "10px" }}>
              1명당 입소자 10명
            </MobileDetailPersonText>
            <MobileDetailPersonText
              style={{ display: "block", fontSize: "18px", color: "#999999" }}
            >
              평균 1명당 20명
            </MobileDetailPersonText>
          </div>
        </DetailPersonBox>
        <DetailPersonBox style={{ marginLeft: "5%" }}>
          <div style={{ padding: "7%", borderBottom: "1px solid #e1e1e1" }}>
            <MobileDetailPersonText>간호사</MobileDetailPersonText>
            <MobileDetailPersonText style={{ float: "right", color: "#E9539b" }}>
              {detailInfo.nurse}명
            </MobileDetailPersonText>
          </div>
          <div style={{ padding: "7%" }}>
            <MobileDetailPersonText style={{ display: "block", marginBottom: "10px" }}>
              1명당 입소자 20명
            </MobileDetailPersonText>
            <MobileDetailPersonText
              style={{ display: "block", fontSize: "18px", color: "#999999" }}
            >
              평균 1명당 20명
            </MobileDetailPersonText>
          </div>
        </DetailPersonBox>
        <DetailPersonBox style={{ float: "right" }}>
          <div style={{ padding: "7%", borderBottom: "1px solid #e1e1e1" }}>
            <MobileDetailPersonText>요양보호사</MobileDetailPersonText>
            <MobileDetailPersonText style={{ float: "right", color: "#E9539b" }}>
              {detailInfo.careGiver}명
            </MobileDetailPersonText>
          </div>
          <div style={{ padding: "7%" }}>
            <MobileDetailPersonText style={{ display: "block", marginBottom: "10px" }}>
              1명당 입소자 20명
            </MobileDetailPersonText>
            <MobileDetailPersonText
              style={{ display: "block", fontSize: "18px", color: "#999999" }}
            >
              평균 1명당 20명
            </MobileDetailPersonText>
          </div>
        </DetailPersonBox>
      </StyledDetailBox>
    );
  }
  return (
    <StyledDetailBox id="Detail-2">
      <DetailTitle>인력현황</DetailTitle>
      <DetailPersonBox style={{ marginLeft: "0" }}>
        <div style={{ padding: "7%", borderBottom: "1px solid #e1e1e1" }}>
          <DetailPersonText>의사</DetailPersonText>
          <DetailPersonText style={{ float: "right", color: "#E9539b" }}>
            {detailInfo.doctor}명
          </DetailPersonText>
        </div>
        <div style={{ padding: "7%" }}>
          <DetailPersonText style={{ display: "block", marginBottom: "10px" }}>
            1명당 입소자 10명
          </DetailPersonText>
          <DetailPersonText
            style={{ display: "block", fontSize: "18px", color: "#999999" }}
          >
            평균 1명당 20명
          </DetailPersonText>
        </div>
      </DetailPersonBox>
      <DetailPersonBox style={{ marginLeft: "5%" }}>
        <div style={{ padding: "7%", borderBottom: "1px solid #e1e1e1" }}>
          <DetailPersonText>간호사</DetailPersonText>
          <DetailPersonText style={{ float: "right", color: "#E9539b" }}>
            {detailInfo.nurse}명
          </DetailPersonText>
        </div>
        <div style={{ padding: "7%" }}>
          <DetailPersonText style={{ display: "block", marginBottom: "10px" }}>
            1명당 입소자 20명
          </DetailPersonText>
          <DetailPersonText
            style={{ display: "block", fontSize: "18px", color: "#999999" }}
          >
            평균 1명당 20명
          </DetailPersonText>
        </div>
      </DetailPersonBox>
      <DetailPersonBox style={{ float: "right" }}>
        <div style={{ padding: "7%", borderBottom: "1px solid #e1e1e1" }}>
          <DetailPersonText>요양보호사</DetailPersonText>
          <DetailPersonText style={{ float: "right", color: "#E9539b" }}>
            {detailInfo.careGiver}명
          </DetailPersonText>
        </div>
        <div style={{ padding: "7%" }}>
          <DetailPersonText style={{ display: "block", marginBottom: "10px" }}>
            1명당 입소자 20명
          </DetailPersonText>
          <DetailPersonText
            style={{ display: "block", fontSize: "18px", color: "#999999" }}
          >
            평균 1명당 20명
          </DetailPersonText>
        </div>
      </DetailPersonBox>
    </StyledDetailBox>
  );
}

export default DetailPerson;
