import styled from "styled-components";


const StyledPersonInfo = styled.div({
    backgroundColor:'#F5f7fa',
    height:'1000px',
})
const StyledBody = styled.div({
    backgroundColor:'white',
    marginTop:'75px',
    marginLeft:'150px',
    marginRight:'150px',
    paddingLeft:'150px',
    paddingRight:'150px'
})
const StyledText = styled.div({
    fontSize:'22px',
    display:'inline-block'
})

const StyledButton = styled.div({
    height:'30px',
    width:'100px',
    display:'inline-block',
    border:'1px solid #cccccc',
    textAlign:'center',
    borderRadius:'10px',
})

function PersonInfo(){
    return(
        <StyledPersonInfo>
            <StyledBody>
                <StyledText style={{display:'block',fontSize:'24px',padding:'40px',textAlign:'center'}}>모시는 분의 정보를 입력해주세요.</StyledText>
                <div style={{marginBottom:'10px'}}>
                    <StyledText style={{width:'50%'}}>이름</StyledText>
                    <StyledText style={{width:'50%'}}>성별</StyledText>
                </div>
                <input style={{width:'45%',height:'30px'}} />
                <div style={{ marginLeft:'5%',display:'inline-block'}}>
                    <StyledButton >남자</StyledButton>
                    <StyledButton  style={{marginLeft:'20px'}}>여자</StyledButton>
                    <StyledButton style={{marginLeft:'20px'}}>상관없음</StyledButton>
                </div>
                


            </StyledBody>
        </StyledPersonInfo>
    )

}
export default PersonInfo;