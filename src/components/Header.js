import { Link } from "react-router-dom";
import {Icon } from "semantic-ui-react";
import styled from "styled-components";
import SearchExampleStandard from "./Search";


const HeaderDiv = styled.div`
    background: linear-gradient(to bottom right,#496ace,#715deb);
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    padding: 1% 0px;
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



const Header = () =>{

    return(
        <HeaderDiv>
            <Logo to={"/"}>케어요정</Logo>
            <SearchExampleStandard ></SearchExampleStandard>
            <HeaderButtonContainer>
                <div>
                    <Icon name="sign-out"></Icon>
                    <button>로그아웃</button> 
                </div>
                <div>
                    <Icon name="heart outline"></Icon>
                    <Link to={"/wish"}>위시리스트</Link>
                </div>
                <div>
                    <Icon name="user outline"></Icon>
                    <Link to={"/mypage"}>마이페이지</Link>
                </div>
            </HeaderButtonContainer>
        </HeaderDiv>
    )
}

export default Header;
