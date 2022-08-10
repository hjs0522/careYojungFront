import { Button } from "semantic-ui-react";
import styled from "styled-components";
import SearchExampleStandard from "./Search";


const HeaderDiv = styled.div`
    background: linear-gradient(to bottom right,#496ace,#715deb);
    display: flex;
    justify-content: space-between;
    position: fixed;
    align-items: center;
    padding: 2% 0px;
    width: 100%;
    height: 8vh;
    z-index: 3;
`

const Logo = styled.div`
    font-family: 'Jalnan';
    font-size: x-large;
    padding: 0px 2%;
    color: white;
`

const HeaderButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    button{
        margin: 0px 1vw;
        border:none;
        color: white;
        background-color: inherit;
        padding: 8px 8px;
    }
`

const MyButton = styled(Button)`
    &.ui.button{background-color: red};
`

const MyButton2 = styled(Button)`
    background-color: red;
`


const Header = () =>{
    return(
        <HeaderDiv>
            <Logo>케어요정</Logo>
            <SearchExampleStandard></SearchExampleStandard>
            <HeaderButtonContainer>
                <button>로그아웃</button>
                <button>위시리스트</button>
                <button>마이페이지</button>
            </HeaderButtonContainer>
        </HeaderDiv>
    )
}

export default Header;
