import styled from "styled-components";

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

function DetailPerson({ detailInfo, isMobile }) {
  if (isMobile) {
    return (
      <StyledDetailBox id="Detail-2">
        <MobileDetailTitle>인력현황</MobileDetailTitle>
        <DetailPersonBox
          style={{
            marginLeft: "0",
            display: "block",
            width: "100%",
            height: "50px",
          }}
        >
          <div
            style={{
              display: "inline",
              padding: "5%",
            }}
          >
            <MobileDetailPersonText
              style={{
                fontSize: "20px",
                marginTop: "10px",
                float: "left",
                marginLeft: "20px",
              }}
            >
              의사
            </MobileDetailPersonText>
            <MobileDetailPersonText
              style={{
                color: "#E9539b",
                display: "inline",
                float: "right",
                fontSize: "20px",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              {detailInfo.doctor}명
            </MobileDetailPersonText>
          </div>
        </DetailPersonBox>
        <DetailPersonBox
          style={{
            marginLeft: "0",
            display: "block",
            width: "100%",
            height: "50px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "inline",
              padding: "5%",
            }}
          >
            <MobileDetailPersonText
              style={{
                fontSize: "20px",
                marginTop: "10px",
                float: "left",
                marginLeft: "20px",
              }}
            >
              간호사
            </MobileDetailPersonText>
            <MobileDetailPersonText
              style={{
                color: "#E9539b",
                display: "inline",
                float: "right",
                fontSize: "20px",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              {detailInfo.nurse}명
            </MobileDetailPersonText>
          </div>
        </DetailPersonBox>
        <DetailPersonBox
          style={{
            marginLeft: "0",
            display: "block",
            width: "100%",
            height: "50px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "inline",
              padding: "5%",
            }}
          >
            <MobileDetailPersonText
              style={{
                fontSize: "20px",
                marginTop: "10px",
                float: "left",
                marginLeft: "20px",
              }}
            >
              요양보호사
            </MobileDetailPersonText>
            <MobileDetailPersonText
              style={{
                color: "#E9539b",
                display: "inline",
                float: "right",
                fontSize: "20px",
                marginTop: "10px",
                marginRight: "20px",
              }}
            >
              {detailInfo.careGiver}명
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
            전국 평균 0.7명
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
            전국 평균 1.3명
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
            전국 평균 10.0명
          </DetailPersonText>
        </div>
      </DetailPersonBox>
    </StyledDetailBox>
  );
}

export default DetailPerson;
