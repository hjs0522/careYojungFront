import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";

export const ManagerText = styled.div({
  fontSize: "18px",
  color: "#444444",
  whiteSpace: "pre-wrap",
});

function ManagerDetail({
  nursingHome_id,
  svcName,
  reviewId,
  memberId,
  text,
  score,
  date,
  photo,
}) {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      trigger={<button>리뷰 확인</button>}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      actions={["Snooze", { key: "done", content: "Done", positive: true }]}
    >
      <Modal.Header>
        <ManagerText style={{ marginBottom: "2%", fontSize: "24px" }}>
          {svcName}
        </ManagerText>
        <ManagerText style={{ color: "#999999" }}>{date}</ManagerText>
        <ManagerText style={{ color: "#999999" }}>
          리뷰 id : {reviewId}
        </ManagerText>
        <ManagerText style={{ color: "#999999" }}>
          사용자 id : {memberId}
        </ManagerText>
      </Modal.Header>
      <div style={{ padding: "2%", marginTop: "40px" }}>
        <ManagerText style={{ color: "#999999" }}>{text}</ManagerText>
        <ManagerText style={{ color: "#999999" }}>{photo}</ManagerText>
      </div>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          onClick={() => {
            fetch(`https://api.care-yojung.com/review/accept`, {
              method: "POST", // *GET, POST, PUT, DELETE 등
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
              },
              credentials: "include",
              body: JSON.stringify({
                score: score,
                svcId: memberId,
              }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
            });
            return setOpen(false);
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ManagerDetail;
