import { Link } from "react-router-dom";
import {Container, Icon } from "semantic-ui-react";
import styled from "styled-components";
import SearchBar from "./SearchBar";


const HeaderDiv = styled.div`
    background: linear-gradient(to bottom right,#496ace,#715deb);
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    width: 100%;
    height: 8vh;
    z-index: 3;
    & >*{
        width: 33%;
    }
    
`

const Logo = styled(Link)`
    font-family: 'Jalnan';
    font-size: x-large;
    margin-left: 2vw;
    color: white;
`

const HeaderButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    button, a{
        border:none;
        color: white;
        background-color: inherit;
    }

    
    div{
        padding: 8px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

const StyledContainer = styled(Container)({
    paddingLeft:'100px',
})


const Header = () =>{

    return(
        <HeaderDiv>
            <div>
                <Logo to={"/"}>케어요정</Logo>
            </div>
            <SearchBar></SearchBar>
            <HeaderButtonContainer>
                <nav>
                    <Icon name="sign-out"></Icon>
                    <button onClick={()=>{console.log("logout")}}>로그아웃</button> 
                    <Icon name="heart outline"></Icon>
                    <Link to={"/wish"}>위시리스트</Link>
                    <Icon name="user outline"></Icon>
                    <Link to={"/mypage"}>마이페이지</Link>
                </nav>
            </HeaderButtonContainer>
        </HeaderDiv>
    )
}

export default Header;
