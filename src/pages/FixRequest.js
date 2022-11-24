import styled from "styled-components";
import { Button, Modal, Grid, Icon } from "semantic-ui-react";
import { useEffect, useState } from "react";

const FixBody = styled.div({
  width: "80%",
  backgroundColor: "#FFFFFF",
  marginLeft: "10%",
  borderRadius: "30px",
  paddingBottom: "10%",
  height: "55vh",
});

const FixH1 = styled.h1({
  paddingTop: "30px",
  paddingBottom: "30px",
  textAlign: "center",
});

function FixRequest({ fixopen, setFixopen, name, nursingHome_id }) {
  //   const [starlength, setStarlength] = useState(0);
  //   const [reviewText, setReviewText] = useState("");

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(fixopen);
  }, [fixopen]);
  useEffect(() => {
    setFixopen(open);
  }, [open]);

  const [fixtext, setFixtext] = useState("");
  return (
    <Modal
      onClose={() => {
        return setOpen(false);
      }}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
    >
      <FixH1>시설정보 수정요청</FixH1>
      <FixBody>
        <h3>수정요청사항을 적어주세요!</h3>
        <textarea
          style={{ width: "100%", height: "45vh", fontSize: "18px" }}
          onChange={(e) => {
            setFixtext(e.target.value);
          }}
        ></textarea>
        <p style={{ fontSize: "16px", color: "#999999" }}>
          수정요청은 각 시설의 상태가 정보와 다를때 요청할 수 있습니다.
          <br />
          요청이 오면 관리자가 확인 후 정보를 업데이트 합니다.
        </p>
      </FixBody>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          onClick={() => {
            if (
              window.confirm(
                "수정요청은 시설의 정보가 실제 시설과 다를때에만 요청해주시기 바랍니다.\n수정요청을 보내시겠습니까?"
              )
            ) {
              fetch(`https://api.care-yojung.com/nursing-home/modify`, {
                method: "POST", // *GET, POST, PUT, DELETE 등
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: name,
                  nursingHome_id: nursingHome_id,
                  text: fixtext,
                }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
              });
              return setOpen(false);
            } else {
              return setOpen(false);
            }
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default FixRequest;
