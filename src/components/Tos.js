import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledHeader = styled.div({
  textAlign: "center",
  fontSize: "24px",
});

const Styledbody = styled.div({
  overflow: "auto",
  width: "100%",
  height: "50vh",
});

function Tos() {
  const [open, setOpen] = useState(false);
  //   useEffect(() => {
  //     setOpen(review_bool);
  //   }, [review_bool]);
  //   useEffect(() => {
  //     setReview_bool(open);
  //   }, [open]);

  return (
    <Modal
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>
        <StyledHeader>개인정보 이용약관 동의</StyledHeader>
      </Modal.Header>
      <Modal.Content>
        <Styledbody readOnly>
          <div>
            <div>①개인정보의 수집·이용목적</div>
            <br /> 회원 정보를 기반으로 추천하기 위해{" "}
          </div>
          <div>
            <div>②수집하려는 개인정보의 항목</div>
            <br />성명, 성별, 연령, 장기노인요양등급, 가지고 있는 질병, 필요한 치료, 보험유형, 수급자 유형, 희망지역{" "}
          </div>
          <div>
            <div>개인정보의 보유 및 이용기간(근거법률)</div>
            <br />1년{" "}
          </div>
          <div>
            <div>④동의를 거부할 수 있으며, 예시)동의 거부시 ○○서비스가 제공되지 않습니다.</div>
            <br />{" "}
          </div>
        </Styledbody>
        <br />
        <input type="checkbox" name="Tos_check" id="tos_check" value="" />{" "}
        <span style={{ fontSize: "16px" }}> 위 약관 내용에 동의합니다.</span>
      </Modal.Content>
      <Modal.Actions>
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              const checkbox = document.getElementById("tos_check").checked;
              if (checkbox) {
                return setOpen(false);
              } else {
                alert("약관에 동의해 주세요!");
              }
            }}
          >
            확인
          </Button>
        </div>
      </Modal.Actions>
    </Modal>
  );
}

export default Tos;
