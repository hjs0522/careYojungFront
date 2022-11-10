import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../OAuth";
import kakaoimg from "../img/kakaoPng.png";

const PageContainer = styled.div`
  background-color: #f5f7fa;
  height: 80vh;
  padding-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginButtonContainer = styled.div`
  background-color: white;
  width: 35vw;
  height: 35vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 5vh;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LoginPage = () => {
  console.log(KAKAO_AUTH_URL);

  return (
    <PageContainer>
      <LoginButtonContainer>
        <div>
          <h3>간편 로그인</h3>
          <text>쉽고 빠르게 케어요정을 시작해보세요!</text>
        </div>
        <a href={KAKAO_AUTH_URL}>
          <img src={kakaoimg} alt="kakao"></img>
        </a>
        <Button>b</Button>
        <Button>c</Button>
      </LoginButtonContainer>
    </PageContainer>
  );
};
export default LoginPage;
