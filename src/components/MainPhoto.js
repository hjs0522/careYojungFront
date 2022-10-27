import styled from "styled-components";
import SearchBar from "./Search/SearchBar";

const StyledMainPhoto = styled.div({
  height: "450px",
});

const StyledMainImage = styled.div`
  height: 400px;
  width: 100%;
  objectfit: none;
  background-image: url("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd97cdf4-c749-4373-8641-0b4249d8d456/스크린샷_2022-10-25_오후_2.58.21.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221025T055835Z&X-Amz-Expires=86400&X-Amz-Signature=3fa1c55ec6cf9ebd7166fbdb953f3729bd6319d8fb84a46fe64ab67465655bf3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-25%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25202.58.21.png%22&x-id=GetObject");
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
