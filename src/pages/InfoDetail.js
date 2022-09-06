import styled from "styled-components";

const StyledInfoDetail = styled.div({
    paddingTop:'150px',
    paddingBottom:'150px',
    backgroundColor:'#F5F7FA'
})

const InfoBody = styled.div({
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
    width:'70%',
    height:'600px',
    backgroundColor:'#FFFFFF',
    marginLeft:'15%',
    borderRadius:'30px',
    paddingLeft:'3%',
    paddingRight:'3%',

})

const infoarr=[{
    name:'케어요정 웹 내 신청서 날짜변경 오류 수정 공지',
    date:'2022.07.01',
    body : '이용약관 개정에 따른 생활돌봄 서비스 범위 및 요금변경 안내\n 케어요정 이용약관 계정에 따라 약간의 변동사항이 있습니다.'
},]

const InfoHeadText = styled.div({
    textAlign:'center',
    fontSize:'26px',
    color:'#444444'

})
const InfoText = styled.div({
    fontSize:'18px',
    color:'#444444'
})

function InfoDetail(){
    
    return(
        <StyledInfoDetail>
            <InfoBody>
                <InfoHeadText style={{paddingTop:'30px',paddingBottom:'30px',borderBottom:'1px solid black'}}>공지사항</InfoHeadText>
                <div style={{padding:'2%',borderBottom:'1px solid #e1e1e1'}}>
                    <InfoText style={{marginBottom:'2%'}}>{infoarr[0].name}</InfoText>
                    <InfoText style={{color:'#999999'}}>{infoarr[0].date}</InfoText>
                </div>
                <div style={{marginTop:'40px'}}>
                    <InfoText style={{color:'#999999'}}>{infoarr[0].body}</InfoText>
                </div>
            </InfoBody>
        </StyledInfoDetail>
    )
}

export default InfoDetail;