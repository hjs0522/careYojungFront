import styled from "styled-components";
import SearchExampleStandard from "./Search";


const HeaderDiv = styled.div`
    background: linear-gradient(to bottom right,#496ace,#715deb);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 2% 0px;
    width: 100%;
    z-index: 3;
`

const Logo = styled.div`
    font-family: 'Jalnan';
    font-size: x-large;
    padding: 0px 2%;
    color: white;
`

const Header = () =>{
    return(
        <HeaderDiv>
            <Logo>케어요정</Logo>
            <SearchExampleStandard></SearchExampleStandard>
            <div>
                <span>로그아웃</span>
                <span>위시리스트</span>
                <span>마이페이지</span>
            </div>
        </HeaderDiv>
    )
}

export default Header;
