import styled from "styled-components";

const MobileDiv = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MobilePage = ()=>{
    return(
        <MobileDiv>
            <h3>컴퓨터 또는 태블릿으로 접속해주세요</h3>
        </MobileDiv>
    );
}

export default MobilePage;