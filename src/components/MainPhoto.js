import styled from "styled-components";
import SearchBar from "./Search/SearchBar";
import image from "./main.jpg";

const StyledMainPhoto = styled.div({
  height: "450px",
});

const StyledMainImage = styled.div`
  height: 400px;
  width: 100%;
  objectfit: none;
  background-image: url(${image});
  background-position: center;
`;

const StyledMainbox = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffffff;
  background-color: rgba(120, 120, 120, 0.5);
  backdrop-filter: blur(3px);
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
  display: inline-block;
  font-size: 30px;
  font-family: NanumB;
  color: white;
`;

function MainPhoto() {
  return (
    <StyledMainPhoto>
      <StyledMainImage>
        <StyledMainbox>
          <StyledTextBox>
            <StyledH1>케어요정</StyledH1>
            <br />
            <StyledText>"쉽고 빠르게 우리 가족을 위한 요양시설을"</StyledText>
            {/* <div style={{ marginTop: "50px", width: "60%", height: "200px" }}>
              <SearchBar />
            </div> */}
          </StyledTextBox>
        </StyledMainbox>
      </StyledMainImage>
    </StyledMainPhoto>
  );
}
export default MainPhoto;
