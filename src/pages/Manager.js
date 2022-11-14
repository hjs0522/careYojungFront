import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import ManagerDetail from "./ManagerDeatail";

const StyledManagermation = styled.div({
  paddingTop: "150px",
  paddingBottom: "150px",
  backgroundColor: "#F5F7FA",
});

const ManagerBody = styled.div({
  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
  width: "70%",
  backgroundColor: "#FFFFFF",
  marginLeft: "15%",
  borderRadius: "30px",
  paddingBottom: "10%",
});

const ManagerH1 = styled.h1({
  paddingTop: "30px",
  paddingBottom: "30px",
  textAlign: "center",
});

const One = styled.div({
  paddingTop: "1%",
  paddingBottom: "3%",
  marginLeft: "10%",
  width: "80%",
  height: "30px",
  borderBottom: "1px solid #E1E1E1",
});
const OneName = styled.div({
  fontSize: "18px",
  float: "left",
  marginRight: "40px",
});
const OneData = styled.div({
  color: "#444444",
  float: "right",
});

const arr = [
  {
    nursingHome_id: 1111111, // 요양원 id
    name: "서울요양시설", // 요양원이름
    review_id: "aaa", // 리뷰 id
    member_id: "vcdc", // 사용자 id
    text: "별로예요!", // 리뷰
    score: 4, // 평점
    date: "2022.07.21", // 작성 날짜
    photo: "영수중 사진.", //영수증 사진
  },
  {
    nursingHome_id: 2222, // 요양원 id
    name: "으어", // 요양원이름

    review_id: "bbb", // 리뷰 id
    member_id: "vcdc", // 사용자 id
    text: "별로예요!", // 리뷰
    score: 4, // 평점
    date: "2022.07.21", // 작성 날짜
    photo: "영수중 사진.", //영수증 사진
  },
];

function Manager() {
  return (
    <StyledManagermation>
      <ManagerBody>
        <ManagerH1>승인 대기중인 리뷰</ManagerH1>
        {arr.map((i) => (
          <One>
            <OneName>{i.name}</OneName>
            <OneData>{i.date}</OneData>
            <ManagerDetail {...i} />
          </One>
        ))}
      </ManagerBody>
    </StyledManagermation>
  );
}

export default Manager;
