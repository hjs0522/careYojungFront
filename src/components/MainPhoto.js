import styled from "styled-components";
import image from "./main.jpg";

const StyledMainPhoto = styled.div`
  height: 400px;
`;

const StyledMainImage = styled.div`
  height: 350px;
  width: 100%;
  objectfit: none;
  background-image: url(${image});
  background-position: center;
`;

const StyledMainbox = styled.div`
  width: 100%;
  height: 350px;
  background-color: #ffffff;
  background-color: rgba(120, 120, 120, 0.5);
  backdrop-filter: blur(3px);
  transition: all 1.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledTextBox = styled.div`
  padding-left: 25%;
  padding-top: 60px;
`;

const StyledH1 = styled.div`
  display: inline-block;
  font-size: 40px;
  font-family: Jalnan;
  color: #496ace;
`;
const StyledText = styled.div`
  margin-top: 40px;
  display: block;
  font-size: 30px;
  font-family: NanumB;
  color: white;
`;

function MainPhoto({ isMobile }) {
  if (isMobile) {
    return (
      <StyledMainPhoto style={{ height: "300px" }}>
        <StyledMainImage style={{ height: "250px" }}>
          <StyledMainbox style={{ height: "250px" }}>
            <StyledTextBox style={{ paddingLeft: "8%" }}>
              <StyledH1 style={{}}>케어요정</StyledH1>
              <br />
              <StyledText>"쉽고 빠르게</StyledText>
              <StyledText style={{ marginTop: "10px" }}>
                요양시설을 찾아보세요!"
              </StyledText>
            </StyledTextBox>
          </StyledMainbox>
        </StyledMainImage>
      </StyledMainPhoto>
    );
  } else {
    return (
      <StyledMainPhoto>
        <StyledMainImage>
          <StyledMainbox>
            <StyledTextBox>
              <br />
              <StyledH1>케어요정</StyledH1>
              <br />
              <StyledText>"쉽고 빠르게 우리 가족을 위한 요양시설을"</StyledText>
              <StyledText>
                당신의 소중한 가족이 머물 곳을 쉽게 알아보세요!
              </StyledText>
              {/* <div style={{ marginTop: "50px" }}>
                <button
                  style={{
                    width: "150px",
                    height: "40px",
                    background: "#5D79D0",
                    borderRadius: "15px",
                    border: "none",
                  }}
                >
                  로그인
                </button>
              </div> */}
              {/* <div style={{ marginTop: "50px", width: "60%", height: "200px" }}>
                <SearchBar />
              </div> */}
            </StyledTextBox>
          </StyledMainbox>
        </StyledMainImage>
      </StyledMainPhoto>
    );
  }
}
export default MainPhoto;
