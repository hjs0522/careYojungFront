import styled from "styled-components";
import Detail from "./Detail";
import { useState } from "react";
import { photoarr } from "./photos";

// const StyledImage = styled.img({
//     borderRadius:'10px',
//     marginLeft:'20px',
//     marginRight:'20px',
//     filter:'drop-shadow(4px 4px 20px rgba(25,32,60,0.35))',
//     display:'inline-block',
//     cursor:'pointer',
// })

const StyledImage = styled.img`
  border-radius: 10px;
  margin-left: 20px;
  filter: drop-shadow(1px 1px 5px rgba(25, 32, 60, 1));
  height: ${(prop) => (prop.id === "Themelist" ? "250px" : "220px")};
  width: ${(prop) => (prop.id === "Themelist" ? "330px" : "200px")};
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
`;

const StyleName = styled.div({
  position: "absolute",
  top: "10px",
  marginLeft: "15px",
  zIndex: "1",
  color: (prop) => (prop.id === "Themelist" ? "black" : "white"),
  fontSize: (prop) => (prop.id === "Themelist" ? "22px" : "18px"),
  display: "block",
  cursor: "pointer",
});
const StyleLoc = styled.div({
  position: "absolute",
  marginLeft: "14px",
  top: "30px",
  zIndex: "1",
  color: (prop) => (prop.id === "Themelist" ? "black" : "white"),
  fontSize: (prop) => (prop.id === "Themelist" ? "18px" : "16px"),
  display: "block",
  cursor: "pointer",
});

const StyledListArg = styled.div({
  display: "inline-block",
  cursor: "pointer",
});

function ListArg({ index, name, img, loc, id }) {
  const [detail_bool, setDetail_bool] = useState(false);
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
        id={id}
        src={
          id === "Themelist"
            ? img
            : photoarr[name] + process.env.REACT_APP_GOOGLEMAP_KEY
        }
      />
      <Detail
        img={img}
        name={name}
        loc={loc}
        id={id}
        detail_bool={detail_bool}
        setDetail_bool={setDetail_bool}
      />
    </StyledListArg>
  );
}

export default ListArg;
