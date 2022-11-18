import React, { useState, useEffect } from "react";
import { Modal, Grid, Icon, Container } from "semantic-ui-react";

import styled from "styled-components";
import DetailCost from "./Detail/DetailCost";

import DetailAI from "./Detail/DatailAI";
import DetailPerson from "./Detail/DetailPerson";
import DetailFacility from "./Detail/DetailFacility";
import DetailReview from "./Detail/DatailReview";
import { useMediaQuery } from "react-responsive";

import { photoarr } from "./photos";

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

const DetailPage = styled.div({
  marginLeft: "4%",
  marginRight: "4%",
  scrollBehavior: "smooth",
});

const StyledImage = styled.img`
  border-radius: 10px;
  margin-left: 20px;
  filter: drop-shadow(1px 1px 5px rgba(25, 32, 60, 0.3));
  height: ${(prop) => (prop.id === "Themelist" ? "320px" : "220px")};
  width: ${(prop) => (prop.id === "Themelist" ? "31.5%" : "22.5%")};
  display: inline-block;
  cursor: pointer;
`;

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
  fontFamily: "NanumB",
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
  display: "inline",
  fontFamily: "NanumB",
  padding: "1%",
});

const DetailTitle = styled.h2({
  fontWeight: "normal",
  fontSize: "24px",
});

const StyledDetailBox = styled.div({
  marginTop: "4%",
});

const DetailPersonBox = styled.div({
  width: "30%",
  border: "1px solid #e1e1e1",
  borderRadius: "20px",
  padding: "1%",
  display: "inline-block",
});
const DetailPersonText = styled.div({
  fontSize: "20px",
  display: "inline",
  textAlign: "center",
});

const menuArr = {
  기본정보: "Detail-1",
  인력현황: "Detail-2",
  시설현황: "Detail-3",
  AI점수: "Detail-4",
  시설리뷰: "Detail-5",
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

  const isMobile = useMediaQuery({
    query: "(max-width:1000px)",
  });

  if (isMobile) {
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="large"
      >
        <DetailPage>
          <div style={{ backgroundColor: "#e1e1e1" }}>
            <ModalHeader>{name}</ModalHeader>
            <ModalHeader style={{ marginLeft: "20px", fontSize: "24px" }}>
              요양원
            </ModalHeader>
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
              <Icon size="medium" color="grey" name="x" />
            </div>
          </div>
          <Modal.Content scrolling>
            <DetailBody id="Detail-1">
              <DetailImage
                src={photoarr[name] + process.env.REACT_APP_GOOGLEMAP_KEY}
              />
              <div style={{ marginTop: "10px" }}>
                <DetailInfo style={{ fontSize: "22px" }}>
                  {response.addrRoad}
                </DetailInfo>
              </div>
              <div style={{ marginTop: "10px" }}>
                <DetailTel style={{ marginLeft: "0" }}>
                  T : {response.phoneNumber}
                </DetailTel>
              </div>
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
                <div>
                  <DetailSummaryText>대기</DetailSummaryText>
                  <DetailSummaryText style={{ color: "#496ACE" }}>
                    {response.waitingCount}
                  </DetailSummaryText>
                  <DetailSummaryText style={{ padding: "0" }}>
                    명{" "}
                  </DetailSummaryText>
                </div>
              </DetailSummary>
              <DetailPerson detailInfo={response} isMobile={isMobile} />{" "}
              {/*인력현황 컴포넌트*/}
              <DetailFacility detailInfo={response} isMobile={isMobile} />{" "}
              {/*시설현황 컴포넌트*/}
              <DetailAI isMobile={isMobile} /> {/*AI점수 컴포넌트*/}
              <DetailReview detailInfo={response} isMobile={isMobile} />{" "}
              {/* 시설리뷰 컴포넌트*/}
            </DetailBody>
          </Modal.Content>
        </DetailPage>
      </Modal>
    );
  }
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
      // onClose={() => setOpen(false)}
      // onOpen={() => setOpen(true)}
      // open={open}
      // size='large'
      // trigger={<button>aa</button>}
      // trigger={
      //   <StyledImage id={id} src={img} />
      //   // <ListArg img={img} name={name} loc={loc} id={id}/>
      // }
    >
      <DetailPage>
        <ModalHeader>{name}</ModalHeader>

        <ModalHeader style={{ marginLeft: "20px", fontSize: "24px" }}>
          요양원
        </ModalHeader>
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
                  <Container>
                    <DetailFacility detailInfo={response} isMobile={isMobile} />{" "}
                  </Container>
                  {/*시설현황 컴포넌트*/}
                  <DetailAI isMobile={isMobile} /> {/*AI점수 컴포넌트*/}
                  <DetailReview
                    detailInfo={response}
                    isMobile={isMobile}
                  />{" "}
                  {/* 시설리뷰 컴포넌트*/}
                </Grid.Column>
                <Grid.Column width={5}>
                  <div style={{ top: "5%", position: "sticky" }}>
                    {/* position:'sticky'를 사용하면 스크롤을 따라오게 할 수 있음. */}
                    <DetailCost isMobile={isMobile} />
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
