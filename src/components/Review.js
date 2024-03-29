import { Icon, Modal, Grid } from "semantic-ui-react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { photoarr } from "./photos";

const StyledModal = styled.div({
  padding: "50px 70px 30px 70px",
});

const StyledHeader = styled.div({
  display: "block",
  height: "70px",
});

const StyledHeaderText = styled.div({
  fontSize: "28px",
  display: "inline-block",
  textAlign: "center",
  width: "100%",
});
const StyledText = styled.div({
  fontSize: "20px",
  display: "inline-block",
  textAlign: "center",
});

const StyledImg = styled.img({
  height: "100px",
  width: "100px",
  borderRadius: "50px",
  display: "inline-block",
});

const StarBox = styled.div({
  height: "80px",
  width: "100%",
  backgroundColor: "#f5f7fa",
  border: "1px solid #e1e1e1",
  borderRadius: "10px",
  textAlign: "center",
  paddingTop: "5%",
});

const InputText = styled.input({
  height: "300px",
  width: "100%",
  textAlign: "left",
  marginBottom: "15px",
  fontSize: "20px",
});

const EndButton = styled.button({
  padding: "10px",
  borderRadius: "50px",
  width: "40%",
  backgroundColor: "#496ace",
  color: "white",
  marginLeft: "30%",
  cursor: "pointer",
});

function Review({
  nursingHome_id,
  review_bool,
  setReview_bool,
  name,
  addRoad,
}) {
  const [starlength, setStarlength] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [real_review, setReal_review] = useState("");

  function getStar(num) {
    const starArr = [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ];
    for (let i = 0; i < num; i++) {
      starArr[i].value = 1;
    }
    const result = [];
    let index = 0;
    starArr.forEach((i) => {
      if (i.value === 1)
        result.push(
          <li
            onClick={() => {
              setStarlength(i.id);
            }}
            style={{ display: "inline-block" }}
          >
            <Icon size="large" name="star" color="yellow" />
          </li>
        );
      else
        result.push(
          <li
            onClick={() => {
              setStarlength(i.id);
            }}
            style={{ display: "inline-block" }}
          >
            <Icon size="large" name="star" color="grey" />
          </li>
        );
      index += 1;
    });
    return result;
  }
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(review_bool);
  }, [review_bool]);
  useEffect(() => {
    setReview_bool(open);
  }, [open]);

  return (
    <Modal
      onClose={() => {
        setStarlength(0);
        return setOpen(false);
      }}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
    >
      <StyledModal>
        <StyledHeader>
          <StyledHeaderText>리뷰작성</StyledHeaderText>
          <div
            style={{
              display: "inline-block",
              float: "right",
              cursor: "pointer",
              marginTop: "-40px",
            }}
          >
            <Modal.Actions>
              <Icon
                size="huge"
                color="grey"
                name="x"
                onClick={() => {
                  setStarlength(0);
                  return setOpen(false);
                }}
              />
            </Modal.Actions>
          </div>
        </StyledHeader>
        <div
          style={{ borderBottom: "1px solid #e1e1e1", paddingBottom: "30px" }}
        >
          <Grid columns={2}>
            <Grid.Column width={2}>
              <StyledImg src={photoarr[name]} />
            </Grid.Column>
            <Grid.Column width={13}>
              <div style={{ padding: "20px", marginLeft: "50px" }}>
                <StyledText style={{ fontSize: "24px", marginBottom: "15px" }}>
                  {name}
                </StyledText>
                <StyledText style={{ color: "#444444" }}>{addRoad}</StyledText>
              </div>
            </Grid.Column>
          </Grid>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <StyledText style={{ fontSize: "24px", margin: "10px 0 10px 0" }}>
            시설 만족도
          </StyledText>
          <StyledText
            style={{ fontSize: "18px", color: "#999999", marginLeft: "20px" }}
          >
            별점을 눌러 평가 해주세요
          </StyledText>
          <StarBox>{getStar(starlength)}</StarBox>
        </div>
        <form style={{ marginBottom: "15px" }}>
          <InputText
            onChange={(event) => {
              setReviewText(event.target.value);
              console.log(reviewText);
            }}
            placeholder="시설을 이용하면서 느낀점을 상세하게 작성해주세요."
            type="textbox"
          />
          <EndButton
            onClick={(event) => {
              event.preventDefault();
              if (reviewText === "" || starlength === 0) {
                alert("별점과 후기를 입력해주세요!");
              } else {
                if (window.confirm("리뷰를 작성하시겠습니까?") === true) {
                  // setReal_review(reviewText);
                  fetch(`https://api.care-yojung.com/review`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                      )}`,
                      "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                      score: 3,
                      svcId: nursingHome_id,
                      svcType: "aaastring",
                      text: reviewText,
                    }),
                  }).then((res) => console.log(res));
                  console.log(reviewText);
                  // setReviewText("");
                  alert("리뷰가 작성되었습니다!");
                  return setOpen(false);
                }
              }
            }}
          >
            <StyledText>후기작성완료</StyledText>
          </EndButton>
        </form>
      </StyledModal>
    </Modal>
  );
}

export default Review;
