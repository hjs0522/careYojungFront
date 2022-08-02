import styled from "styled-components";
import FacilityList from "./FacilityList";


const StyledThemelist = styled.div({
    textAlign:'center',
    height:"100%",
    backgroundColor:'#F5F7FA',
    paddingBottom:'100px',
    marginBottom:'100px',
})

const ThemeH1 = styled.h1({
    paddingTop:'50px',
    height:'80px',
    fontSize:'25px',
    textAlign:'center',
    marginBottom:'50px'
})


function Themelist({arr}){
    return (<StyledThemelist>
        <ThemeH1>테마별 시설 둘러 보기</ThemeH1>
        <FacilityList size={5} arr={arr} />
    </StyledThemelist>)

}
export default Themelist;
