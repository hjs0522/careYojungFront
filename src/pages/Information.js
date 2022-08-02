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
})

const InfoH1 = styled.h1({
    paddingTop:'30px',
    paddingBottom:'30px',
    textAlign:'center',

})

const One = styled.div({
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
    name:'이런거 누가 씀',
    data:'2022.07.01'
},{
    name:'소마 너무 힘듬',
    data:'2022.07.01'
},{
    name:'아 배고프다',
    data:'2022.07.01'
},{ 
    name:'ㄴㅇㅁㄹㄴㅇㅁㄹㅇㄴㄹㅁㄹㄹㅇㅁㄴㅇㄹㅁㄹ',
    data:'2022.07.01'
},{
    name:'메이플 꿀잼',
    data:'2022.07.01'
},{
    name:'메이플 꿀잼',
    data:'2022.07.01'
},{
    name:'메이플 꿀잼',
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