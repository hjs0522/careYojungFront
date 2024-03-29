import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Container, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { loginState,serviceState,gradeState,orderState } from "../../atom";
import SearchBar from "../Search/SearchBar";
import { postLogout } from "../../api";
import { useMediaQuery } from "react-responsive";

const HeaderDiv = styled.div`
  &.ui.top.fixed.menu {
    background: linear-gradient(to bottom right, #496ace, #715deb);
  }
`;

const MobileHeaderDiv = styled.div`
  & {
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

const MobileFlexContainer = styled.div`
  display: flex;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  & > .ui.form {
    width: 80%;
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


const Header = () =>{
    const [login,setLogin] = useRecoilState(loginState);
    const [service,setService] = useRecoilState(serviceState);
    const [grade,setGrade] = useRecoilState(gradeState);
    const [order,setOrder] = useRecoilState(orderState);
    const logoutHandler = ()=>{
          setLogin(false)
          const refresh = localStorage.getItem('refresh-token');
          postLogout(refresh);
          localStorage.removeItem('user');
          localStorage.removeItem('access-token');
          localStorage.removeItem('refresh-token');
      
    }

    const isMobile = useMediaQuery({
      query : "(max-width:767px)"
    });
    
    if (isMobile){
      return(
        <MobileHeaderDiv >
          <Container>
            <MobileFlexContainer>
              <SearchBar></SearchBar>
              <HeaderButtonContainer>
                {login ? (
                  <>
                    <Icon name="sign-out"></Icon>
                    <HeaderButton onClick={logoutHandler}>로그아웃</HeaderButton>
                    <Icon name="heart outline"></Icon>
                    <HeaderLink to={`/wish?service=${service}&grade=${grade}&order=${order}`}>위시리스트</HeaderLink>
                    <Icon name="user outline"></Icon>
                    <HeaderLink to={"/mypage"}>마이페이지</HeaderLink>
                  </>
                ) : (
                  <>
                    <Icon name="sign in"></Icon>
                    <HeaderLink to={"/login"}>
                      로그인
                    </HeaderLink>
                  </>
                )}
              </HeaderButtonContainer>
            </MobileFlexContainer>
          </Container>
        </MobileHeaderDiv>
      );
    }
    
    return(

    <HeaderDiv className="ui top fixed menu">
      <Container>
        <FlexContainer>
          <div>
            <Logo to={"/"}>케어요정</Logo>
          </div>
          <SearchBar></SearchBar>
          <HeaderButtonContainer>
            {login ? (
              <>
                <Icon name="sign-out"></Icon>
                <HeaderButton onClick={logoutHandler}>로그아웃</HeaderButton>
                <Icon name="heart outline"></Icon>
                <HeaderLink to={`/wish?service=${service}&grade=${grade}&order=${order}`}>위시리스트</HeaderLink>
                <Icon name="user outline"></Icon>
                <HeaderLink to={"/mypage"}>마이페이지</HeaderLink>
              </>
            ) : (
              <>
                <Icon name="sign in"></Icon>
                <HeaderLink to={"/login"}>로그인</HeaderLink>
              </>
            )}
          </HeaderButtonContainer>
        </FlexContainer>
      </Container>
    </HeaderDiv>
  );
};

export default Header;
