import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Container, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { loginState } from "../../atom";
import SearchBar from "../Search/SearchBar";
import { postLogout } from "../../api";

const HeaderDiv = styled.div`
  &.ui.top.fixed.menu {
    background: linear-gradient(to bottom right, #496ace, #715deb);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  align-items: center;
  & > * {
    width: 33%;
  }
`;

const Logo = styled(Link)`
  font-family: "Jalnan";
  font-size: x-large;
  color: white;
`;

const HeaderButton = styled.button`
  border: none;
  color: white;
  background-color: inherit;
`;
const HeaderLink = styled(Link)`
  border: none;
  color: white;
  background-color: inherit;
`;

const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = ({service,grade,order}) =>{
    const [login,setLogin] = useRecoilState(loginState);
    const loginHandler = ()=>{
        if (login !== false){
            setLogin(!login)
        }
        else{
            setLogin(!login)
            postLogout();
        }
    }
    console.log(service,grade,order)
    return(
    <HeaderDiv className="ui top fixed menu">
      <Container>
        <FlexContainer>
          <div>
            <Logo to={"/"}>케어요정</Logo>
          </div>
          <SearchBar service={service} grade={grade} order={order}></SearchBar>
          <HeaderButtonContainer>
            {login ? (
              <>
                <Icon name="sign-out"></Icon>
                <HeaderButton onClick={loginHandler}>로그아웃</HeaderButton>
                <Icon name="heart outline"></Icon>
                <HeaderLink to={"/wish"}>위시리스트</HeaderLink>
                <Icon name="user outline"></Icon>
                <HeaderLink to={"/mypage"}>마이페이지</HeaderLink>
              </>
            ) : (
              <>
                <Icon name="sign in"></Icon>
                <HeaderLink to={"/login"} onClick={loginHandler}>
                  로그인
                </HeaderLink>
              </>
            )}
          </HeaderButtonContainer>
        </FlexContainer>
      </Container>
    </HeaderDiv>
  );
};

export default Header;
