import styled from "styled-components";


const StyledInfomation = styled.div({
    paddingTop:'150px',
    paddingBottom:'150px',
    backgroundColor:'#F5F7FA'
})

const InfoBody = styled.div({
    width:'80%',
    backgroundColor:'#FFFFFF',
    marginLeft:'10%',
    borderRadius:'30px',
    paddingBottom:'10%',

})

const InfoH1 = styled.h1({
    paddingTop:'30px',
    paddingBottom:'30px',
    textAlign:'center',

})

const One = styled.div({
    paddingTop:'1%',
    paddingBottom:'2%',
    marginLeft:'10%',
    width:'80%',
    height:'30px',
    borderBottom:'1px solid #E1E1E1'
})
const OneName = styled.div({
    fontSize:'18px',
    float:'left'
})
const OneData = styled.div({
    color:'#444444',
    float:'right'
})

const infoarr=[{
    name:'케어요정 웹 내 신청서 날짜변경 오류 수정 공지',
    data:'2022.07.01'
},{
    name:'이용약관 개정에 따른 생활돌봄 서비스 범위 및 요금변경 안내',
    data:'2022.07.01'
},{
    name:'케어요정 이용약관 개정 안내',
    data:'2022.07.01'
},{ 
    name:'22-05-06 케어요정 업데이트 (1.0.2)',
    data:'2022.07.01'
},{
    name:'서비스 오류발생 공지',
    data:'2022.07.01'
},{
    name:'케어요정 대표번호 변경 안내',
    data:'2022.07.01'
},{
    name:'계좌 이체 등록 중지 안내',
    data:'2022.07.01'
},{
    name:'[케어요정] 긴급 서비스 공지',
    data:'2022.07.01'
},{
    name:'새로운 요양시설 추가 안내',
    data:'2022.07.01'
}]

function Information(){
    return (
        <StyledInfomation>
            <InfoBody>
                <InfoH1>공지사항</InfoH1>
                {infoarr.map((i)=><One><OneName>{i.name}</OneName><OneData>{i.data}</OneData></One>)}
            </InfoBody>
        </StyledInfomation>
    )
}

export default Information;