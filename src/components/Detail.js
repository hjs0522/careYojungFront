import React, { useState, useEffect } from "react";
import { Modal, Grid, Icon, Container, Button } from "semantic-ui-react";

import styled from "styled-components";
import DetailCost from "./Detail/DetailCost";

import DetailAI from "./Detail/DatailAI";
import DetailPerson from "./Detail/DetailPerson";
import DetailFacility from "./Detail/DetailFacility";
import DetailReview from "./Detail/DatailReview";
import { useMediaQuery } from "react-responsive";
import FixRequest from "../pages/FixRequest";

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

const menuArr = {
  기본정보: "Detail-1",
  인력현황: "Detail-2",
  시설현황: "Detail-3",
  AI점수: "Detail-4",
  시설리뷰: "Detail-5",
};

function Detail({ nursingHome_id, detail_bool, setDetail_bool }) {
  const [response, setResponse] = useState({
    addrDetail: "",
    addrFront: "",
    addrRoad: "",
    buildingMainNum: "",
    buildingSubNum: "",
    careGiver: 0,
    cost: 0,
    doctor: 0,
    doubleRoom: 0,
    floor: "",
    grade: 0,
    headCount: 0,
    name: "",
    nowCount: 0,
    positive: 0,
    negative: 0,
    mixed: 0,
    nurse: 0,
    nursingHome_id: 0,
    phoneNumber: "",
    programRoom: 0,
    quadrupleRoom: 0,
    reviews: [
      {
        dateTime: "",
        memberId: "",
        score: 0,
        text: "",
      },
    ],
    score: 0,
    singleRoom: 0,
    trainingRoom: 0,
    tripleRoom: 0,
    waitingCount: 0,
    wish: true,
  });
  const onMenuClick = (i) => {
    const item = document.getElementById(menuArr[i.target.innerText]);
    item.scrollIntoView({ behavior: "smooth" });
  };
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.care-yojung.com/search/detail?id=${nursingHome_id}&service=ho`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setResponse(res);
        let recent = JSON.parse(localStorage.getItem("recent"));
        if (recent === null) {
          recent = [];
        }
        const obj = {
          nursingHome_id: res.nursingHome_id,
          name: res.name,
          addrFront: res.addrFront,
        };
        if (
          recent.some(
            (element) => element.nursingHome_id === obj.nursingHome_id
          )
        ) {
          recent = recent.filter(
            (element) => element.nursingHome_id !== obj.nursingHome_id
          );
          recent.push(obj);
        } else {
          if (recent.length === 10) {
            recent.shift();
          }
          recent.push(obj);
        }
        localStorage.setItem("recent", JSON.stringify(recent));
      });
  }, []);
  useEffect(() => {
    setOpen(detail_bool);
  }, [detail_bool]);
  useEffect(() => {
    setDetail_bool(open);
  }, [open]);

  const isMobile = useMediaQuery({
    query: "(max-width:1000px)",
  });
  console.log(response.positive);
  const [fixopen, setFixopen] = useState(false);
  if (isMobile) {
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => {
          return setOpen(true);
        }}
        open={open}
        size="large"
      >
        <DetailPage>
          <div style={{ backgroundColor: "#e1e1e1" }}>
            <ModalHeader>{response.name}</ModalHeader>
            <ModalHeader style={{ marginLeft: "20px", fontSize: "24px" }}>
              ・ 요양원 ・ {response.grade === 0 ? "신설" : response.grade} 등급
              <button>정보수정요청</button>
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
                src={`https://api.care-yojung.com/image/thumbnail?id=${nursingHome_id}`}
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
        <FixRequest fixopen={fixopen} setFixopen={setFixopen} />
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
        <ModalHeader>{response.name}</ModalHeader>
        <ModalHeader style={{ marginLeft: "20px", fontSize: "24px" }}>
          ・ 요양원 ・ {response.grade === 0 ? "신설" : response.grade} 등급
          <Button
            style={{
              marginLeft: "30px",
              width: "130px",
              fontSize: "16px",
              padding: "2%",
            }}
            onClick={() => {
              setFixopen(true);
            }}
          >
            정보수정요청
          </Button>
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
                    src={`https://api.care-yojung.com/image/detail?fileName=1.jpg&id=${nursingHome_id}`}
                  />
                </Grid.Column>

                <Grid.Column width={5}>
                  <DetailImage
                    src={`https://api.care-yojung.com/image/detail?fileName=2.jpg&id=${nursingHome_id}`}
                  />
                  <DetailImage
                    src={`https://api.care-yojung.com/image/detail?fileName=3.jpg&id=${nursingHome_id}`}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={11}>
                  <DetailInfo>
                    <span>{response.addrFront + " "}</span>
                    <span>{response.addrRoad + " "}</span>
                    <span>
                      {response.buildingSubNum
                        ? response.buildingMainNum +
                          "-" +
                          response.buildingSubNum +
                          " "
                        : response.buildingMainNum + " "}
                    </span>
                    <span>
                      {response.addrDetail
                        ? response.addrDetail
                        : response.floor
                        ? response.floor + "층"
                        : null}
                    </span>
                  </DetailInfo>
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
                  <DetailAI isMobile={isMobile} detailInfo={response} />{" "}
                  {/*AI점수 컴포넌트*/}
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
      <FixRequest
        nursingHome_id={response.nursingHome_id}
        name={response.name}
        fixopen={fixopen}
        setFixopen={setFixopen}
      />
    </Modal>
  );
}

export default Detail;
