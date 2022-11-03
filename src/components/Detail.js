import React, { useState, useEffect } from "react";
import { Modal, Grid, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { photoarr } from "./photos";
import Review from "./Review";
import DetailCost from "./Detail/DetailCost";
import DetailAI from "./Detail/DatailAI";
import DetailPerson from "./Detail/DetailPerson";
import DetailFacility from "./Detail/DetailFacility";
import DetailReview from "./Detail/DatailReview";

const DetailPage = styled.div({
  marginLeft: "4%",
  marginRight: "4%",
  scrollBehavior: "smooth",
});

const DetailImage = styled.img({
  marginTop: "20px",
  height: "170px",
  borderRadius: "10px",
});

const ModalHeader = styled.div({
  display: "inline-block",
  fontSize: "28px",
  marginTop: "2%",
  marginBottom: "2%",
  fontFamily: "NanumEB",
});

const MenuBarBox = styled.div({
  width: "95%",
  fontSize: "20px",
  borderTop: "3px solid #706EE9",
});

const Menubar = styled.button({
  cursor: "pointer",
  textAlign: "center",
  width: "20%",
  height: "40px",
  fontSize: "17px",
  backgroundColor: "#F2F2FF",
  display: "inline",
  border: "1px solid #706EE9",
  outline: "0",
  color: "#706EE9",
  fontFamily: "NanumB",
});

const DetailBody = styled.div({
  width: "95%",
});

const DetailInfo = styled.div({
  fontSize: "20px",
  display: "inline",
  fontFamily: "NanumB",
});

const DetailTel = styled.div({
  color: "#0596FF",
  fontSize: "20px",
  display: "inline",
  marginLeft: "3%",
});

const DetailSummary = styled.div({
  width: "100%",
  backgroundColor: "#F4F4F4",
  borderRadius: "20px",
  padding: "2%",
  marginTop: "3%",
  textAlign: "center",
});

const DetailSummaryText = styled.div({
  fontSize: "20px",
  color: "#444444",
  fontFamily: "NanumB",
  display: "inline-block",
  padding: "1%",
});

const menuArr = {
  기본정보: "Detail-1",
  인력현황: "Detail-2",
  시설현황: "Detail-3",
  AI점수: "Detail-4",
  시설리뷰: "Detail-5",
};
const response = {
  nursingHome_id: 123, // 요양원 id
  name: "서울요양시설", // 요양원이름
  addrSiDo: 11, //시도코드
  addrSiGunGu: 500, // 시군구코드
  addrDong: 500, // 법정동코드
  addrRi: 123, // 리코드
  addrRoad: "서울시 상도로 22길", // 도로명주소
  addrDetail: "4층", // 상세주소
  phoneNumber: "010-1234-4567", // 전화번호
  headCount: 40, // 정원
  nowCount: 35, // 현원
  waitingCount: 23, // 대기
  doctor: 10, // 의사 수
  nurse: 13, // 간호사 수
  careGiver: 5, // 요양보호사 수
  singleRoom: 12, // 1인실
  doubleRoom: 21, // 2인실
  tripleRoom: 13, // 3인실
  quadrupleRoom: 12, // 4인실
  programRoom: 1, // 프로그램실
  trainingRoom: 1, // 작업 및 일상동작 훈련실
  cost: 210000, // 비용
  reviews: [
    {
      review_id: "abd", // 리뷰 id
      member_id: "vcdc", // 사용자 id
      nursingHome_id: "sdafasdf", // 요양원 id
      text: "별로예요!", // 리뷰
      score: 4, // 평점
      date: "2022.07.21", // 작성 날짜
    },
  ],
  // word 키워드 추가 예정
};

function Detail({ img, name, loc, id, detail_bool, setDetail_bool }) {
  const onMenuClick = (i) => {
    const item = document.getElementById(menuArr[i.target.innerText]);
    item.scrollIntoView({ behavior: "smooth" });
  };
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(detail_bool);
  }, [detail_bool]);
  useEffect(() => {
    setDetail_bool(open);
  }, [open]);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
    >
      <DetailPage>
        <ModalHeader>{name}</ModalHeader>
        <div
          onClick={() => setOpen(false)}
          style={{
            display: "inline-block",
            float: "right",
            marginTop: "1%",
            marginRight: "1%",
            cursor: "pointer",
          }}
        >
          <Icon size="huge" color="grey" name="x" />
        </div>
        <MenuBarBox>
          <Menubar onClick={onMenuClick}>기본정보</Menubar>
          <Menubar onClick={onMenuClick}>인력현황</Menubar>
          <Menubar onClick={onMenuClick}>시설현황</Menubar>
          <Menubar onClick={onMenuClick}>AI점수</Menubar>
          <Menubar onClick={onMenuClick}>시설리뷰</Menubar>
        </MenuBarBox>
        <Modal.Content scrolling>
          <DetailBody id="Detail-1">
            <Grid columns={2} relaxe>
              <Grid.Row stretched>
                <Grid.Column width={11}>
                  <DetailImage
                    src={photoarr[name] + process.env.REACT_APP_GOOGLEMAP_KEY}
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                  <DetailImage src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  <DetailImage src="https://react.semantic-ui.com/images/wireframe/image.png" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={11}>
                  <DetailInfo>{response.addrRoad}</DetailInfo>
                  <DetailTel>T : {response.phoneNumber}</DetailTel>
                  <DetailSummary>
                    <DetailSummaryText>시설정원</DetailSummaryText>
                    <DetailSummaryText style={{ color: "#496ACE" }}>
                      {response.headCount}
                    </DetailSummaryText>
                    <DetailSummaryText style={{ padding: "0" }}>
                      명{" "}
                    </DetailSummaryText>
                    <DetailSummaryText>현원</DetailSummaryText>
                    <DetailSummaryText style={{ color: "#496ACE" }}>
                      {response.nowCount}
                    </DetailSummaryText>
                    <DetailSummaryText style={{ padding: "0" }}>
                      명{" "}
                    </DetailSummaryText>
                    <DetailSummaryText>대기</DetailSummaryText>
                    <DetailSummaryText style={{ color: "#496ACE" }}>
                      {response.waitingCount}
                    </DetailSummaryText>
                    <DetailSummaryText style={{ padding: "0" }}>
                      명{" "}
                    </DetailSummaryText>
                  </DetailSummary>
                  <DetailPerson detailInfo={response} /> {/*인력현황 컴포넌트*/}
                  <DetailFacility detailInfo={response} />{" "}
                  {/*시설현황 컴포넌트*/}
                  <DetailAI /> {/*AI점수 컴포넌트*/}
                  <DetailReview detailInfo={response} />{" "}
                  {/* 시설리뷰 컴포넌트*/}
                </Grid.Column>
                <Grid.Column width={5}>
                  <div style={{ top: "5%", position: "sticky" }}>
                    {/* position:'sticky'를 사용하면 스크롤을 따라오게 할 수 있음. */}
                    <DetailCost />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </DetailBody>
        </Modal.Content>
      </DetailPage>
    </Modal>
  );
}

export default Detail;
