import styled from "styled-components";
import { Icon, Grid } from "semantic-ui-react";
import ListArg from "./ListArg";

const HorizontalScroll = styled.div`
  white-space: nowrap;
  overflow: ${(prop) =>
    prop.isMobile === true
      ? "auto"
      : prop.id === "Themelist"
      ? "auto"
      : "auto"};
  height: ${(prop) =>
    prop.id === "Themelist"
      ? "40vh"
      : prop.isMobile === true
      ? "100%"
      : "100%"};
  padding-bottom: 20px;
  width: 80%;
  display: inline-block;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: #706ee9;
    border-radius: 6px;
  }
`;
const GridExampleRelaxedVery = ({ size, arr, id }) => {
  //넘겨받는 count는 semantic-ui-react의 grid에서 출력 크기 (값이 클수록 커짐)
  let index = 0;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          {arr.map((i) => {
            index += 1;
            return (
              <ListArg
                index={index}
                id={id}
                nursingHome_id={i.nursingHome_id}
                name={i.name}
                img={i.img}
                loc={i.addrFront}
                key={i.key}
                keyword={i.keyword}
              />
            );
          })}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

function FacilityList({
  size,
  arr,
  id,
  listCount,
  setListCount,
  listLen,
  isMobile,
}) {
  const onClick = () => {
    if (listCount >= listLen) {
      return;
    }
    const item = document.getElementById(id + (listCount + 1));
    item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setListCount((cur) => cur + 1);
  };
  const onClick2 = () => {
    if (listCount < 2) {
      const item = document.getElementById(id + 1);
      item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    setListCount((cur) => cur - 1);
    const item = document.getElementById(id + (listCount - 1));
    item.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  if (isMobile) {
    return (
      <>
        <HorizontalScroll
          id={id}
          isMobile={isMobile}
          style={{ marginLeft: "10%", marginTop: "30px" }}
          onTouchMove
        >
          <GridExampleRelaxedVery size={size} arr={arr} id={id} />
        </HorizontalScroll>
      </>
    );
  } else {
    return (
      <>
        <div style={{ display: "inline-block", height: "100%" }}>
          {id === "Themelist" ? null : (
            <Icon
              name="angle left"
              size="huge"
              style={{ height: "100%", marginTop: "-100%", cursor: "pointer" }}
              onClick={onClick2}
            />
          )}
        </div>
        <HorizontalScroll id={id} onTouchMove>
          <GridExampleRelaxedVery size={size} arr={arr} id={id} />
        </HorizontalScroll>
        <div style={{ display: "inline-block", height: "100%" }}>
          {id === "Themelist" ? null : (
            <Icon
              name="angle right"
              size="huge"
              style={{ height: "100%", marginTop: "-100%", cursor: "pointer" }}
              onClick={onClick}
            />
          )}
        </div>
      </>
    );
  }
}

export default FacilityList;
