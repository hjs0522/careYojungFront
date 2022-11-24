import styled from "styled-components";
import Detail from "./Detail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { wordsState,serviceState,gradeState,orderState, keywordState } from "../atom";
import { useRecoilState } from "recoil";
const StyledImage = styled.img`
  border-radius: 10px;
  margin-left: 20px;
  filter: drop-shadow(1px 1px 5px rgba(25, 32, 60, 1));
  height: ${(prop) => (prop.id === "Themelist" ? "230px" : "220px")};
  width: ${(prop) => (prop.id === "Themelist" ? "330px" : "200px")};
  object-fit: ${(prop) => (prop.id === "Themelist" ? "fill" : "none")};
  background-size: cover;
  display: inline-block;
  cursor: pointer;
  z-index: 0;
`;
const TextBox = styled.div`
  border-radius: 0 0 10px 10px;
  display: inline-block;
  width: ${(prop) => (prop.id === "Themelist" ? "330px" : "200px")};
  margin-bottom: ${(prop) => (prop.id === "Themelist" ? "-70px" : "0")};
  margin-left: 20px;
  bottom: 5px;
  height: 60px;
  background: ${(prop) =>
    prop.id === "Themelist" ? null : "rgba(0, 0, 0, 0.3)"};
  z-index: 1;
  position: absolute;
  overflow: hidden;
`;

const StyleName = styled.div({
  fontFamily: "NanumB",
  position: "absolute",
  top: "10px",
  marginLeft: "15px",
  zIndex: "1",
  color: (prop) => (prop.id === "Themelist" ? "black" : "white"),
  fontSize: (prop) => (prop.id === "Themelist" ? "22px" : "18px"),
  display: "block",
  cursor: "pointer",
  overflow: "hidden",
});
const StyleLoc = styled.div({
  fontFamily: "NanumR",
  position: "absolute",
  marginLeft: "14px",
  top: "30px",
  zIndex: "1",
  color: (prop) => (prop.id === "Themelist" ? "black" : "white"),
  fontSize: (prop) => (prop.id === "Themelist" ? "18px" : "16px"),
  display: "block",
  cursor: "pointer",
  overflow: "hidden",
});

const StyledListArg = styled.div({
  display: "inline-block",
  cursor: "pointer",
});

function ListArg({ index, name, img, loc, id, nursingHome_id, key, keyword }) {
  const [detail_bool, setDetail_bool] = useState(false);
  const navigate = useNavigate();
  const [searchKeyword,setSearchKeyword] = useRecoilState(keywordState);
  const [service,setService] = useRecoilState(serviceState);
  const [grade,setGrade] = useRecoilState(gradeState);
  const [order,setOrder] = useRecoilState(orderState);
  const [words,setWords] = useRecoilState(wordsState);
  return (
    <StyledListArg
      id={id + index}
      onClick={() => {
        setDetail_bool(true);
      }}
    >
      <TextBox id={id} style={{ color: "black" }}>
        <StyleName id={id}>{name}</StyleName>
        <StyleLoc id={id}>{loc}</StyleLoc>
      </TextBox>
      <StyledImage
        onClick={(i) => {
          if (id === "Themelist" && keyword === "ch") {
            setSearchKeyword("서울")
            setWords("ch")
            navigate(`search/list?keyword=서울&service=${service}&grade=${grade}&order=${order}&words=ch`)
          } else if (id === "Themelist" && keyword === "wo") {
            setSearchKeyword("서울")
            setWords("wo")
            navigate(`search/list?keyword=서울&service=${service}&grade=${grade}&order=${order}&words=wo`)
          }
        }}
        id={id}
        src={
          id === "Themelist"
            ? img
            : `https://api.care-yojung.com/image/thumbnail?id=${nursingHome_id}`
        }
      />
      {/* {console.log(key)} */}
      {id !== "Themelist" ? (
        <Detail
          img={img}
          name={name}
          loc={loc}
          id={id}
          nursingHome_id={nursingHome_id}
          detail_bool={detail_bool}
          setDetail_bool={setDetail_bool}
        />
      ) : null}
    </StyledListArg>
  );
}

export default ListArg;
