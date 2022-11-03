import styled from "styled-components";
import { Icon, Popup } from "semantic-ui-react";

const DetailTitle = styled.h2({
  fontWeight: "normal",
  fontSize: "24px",
  display: "inline-block",
});

const StyledPopup = styled.div({
  display: "inline-block",
  marginLeft: "5px",
  fontSize: "24px",
});

const StyledDetailBox = styled.div({
  marginTop: "4%",
});

const StyledDetailAI = styled.div({
  backgroundColor: "#FAFAFA",
  border: "1px solid #e1e1e1",
  borderRadius: "10px",
});

const DetailAIElement = styled.div({
  display: "inline-block",
  width: "50%",
  padding: "2%",
});

const DetailAIText = styled.div({
  display: "inline-block",
  fontSize: "16px",
  width: "80px",
});

const DetailAIGraph = styled.div({
  display: "inline-block",
  width: "60%",
  height: "10px",
  backgroundColor: "#e1e1e1",

  borderRadius: "15px",
});
// #a3a1fd
const DetailAIInnerGraph = styled.div`
  position: absolute;
  display: inline-block;
  height: 10px;
  background: linear-gradient(270deg, #496ace 0%, #a3a1fd 100%);
  border-radius: 15px;
  width: ${(prop) => (prop.width * 100) / 3.8 + "%" || "20%"};
`;
const AIarr = [
  { name: "긍정도", value: 0.8 },
  { name: "부정도", value: 0.1 },
  { name: "혼합도", value: 0.08 },
];

function DetailAI() {
  return (
    <StyledDetailBox id="Detail-4">
      <DetailTitle>AI점수</DetailTitle>
      <StyledPopup>
        <Popup
          content={
            "케어요정의 리뷰와 여러 인터넷상의 소셜 데이터를 종합, 분석하여 각 시설의 평가를 나타냅니다."
          }
          key={"explain"}
          header={"AI점수란?"}
          trigger={<Icon name="question" size="small" color="red" />}
        />
      </StyledPopup>
      <StyledDetailAI>
        {AIarr.map((i) => (
          <DetailAIElement>
            <DetailAIText>{i.name}</DetailAIText>
            <DetailAIGraph>
              <DetailAIInnerGraph width={i.value}></DetailAIInnerGraph>
            </DetailAIGraph>
            <DetailAIText
              style={{ width: "0", color: "#496ace", marginLeft: "3%" }}
            >
              {i.value * 100}%
            </DetailAIText>
          </DetailAIElement>
        ))}
      </StyledDetailAI>
    </StyledDetailBox>
  );
}

export default DetailAI;
