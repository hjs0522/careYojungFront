import styled from "styled-components";
import FacilityList from "./FacilityList";


const StyledThemelist = styled.div({
    height:"500px",
    backgroundColor:'#F5F7FA'
})

const ThemeH1 = styled.h1({
    paddingTop:'50px',
    height:'80px',
    fontSize:'20px',
    textAlign:'center'
})


function Themelist(){
    return (<StyledThemelist>
        <ThemeH1>테마별 시설 둘러 보기</ThemeH1>
        <FacilityList />
    </StyledThemelist>)

}
export default Themelist;
