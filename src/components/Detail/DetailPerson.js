import styled from "styled-components"

const DetailPersonBox = styled.div({
    width:'30%',
    border:'1px solid #e1e1e1',
    borderRadius:'20px',
    padding:'1%',
    display:'inline-block',
    
})
const DetailPersonText = styled.div({
  fontSize:'20px',
  display:'inline',
  textAlign:'center',
})

const DetailTitle = styled.h2({
  fontWeight:'normal',
  fontSize:'24px'
})
const StyledDetailBox = styled.div({
    marginTop:'4%',
})
  
function DetailPerson({response}){
  return(
    <StyledDetailBox id="Detail-2">
      <DetailTitle>인력현황</DetailTitle>
      <DetailPersonBox style={{marginLeft:"0"}}>
        <div style={{padding:"7%",borderBottom:'1px solid #e1e1e1'}}>
          <DetailPersonText>의사</DetailPersonText>
          <DetailPersonText style={{float:'right',color:'#E9539b'}}>{response.doctor}명</DetailPersonText>
        </div>
        <div style={{padding:"7%"}}>
          <DetailPersonText style={{display:'block',marginBottom:'10px'}}>1명당 입소자 10명</DetailPersonText>
          <DetailPersonText style={{display:'block',fontSize:'18px',color:'#999999'}}>평균 1명당 20명</DetailPersonText>
        </div>
      </DetailPersonBox>
      <DetailPersonBox style={{marginLeft:'5%'}}>
        <div style={{padding:"7%",borderBottom:'1px solid #e1e1e1'}}>
          <DetailPersonText>간호사</DetailPersonText>
          <DetailPersonText style={{float:'right',color:'#E9539b'}}>{response.nurse}명</DetailPersonText>
        </div>
        <div style={{padding:"7%"}}>
          <DetailPersonText style={{display:'block',marginBottom:'10px'}}>1명당 입소자 20명</DetailPersonText>
          <DetailPersonText style={{display:'block',fontSize:'18px',color:'#999999'}}>평균 1명당 20명</DetailPersonText>
        </div>
      </DetailPersonBox>
      <DetailPersonBox style={{float:"right"}}>
        <div style={{padding:"7%",borderBottom:'1px solid #e1e1e1'}}>
          <DetailPersonText>요양보호사</DetailPersonText>
          <DetailPersonText style={{float:'right',color:'#E9539b'}}>{response.careGiver}명</DetailPersonText>
        </div>
        <div style={{padding:"7%"}}>
          <DetailPersonText style={{display:'block',marginBottom:'10px'}}>1명당 입소자 20명</DetailPersonText>
          <DetailPersonText style={{display:'block',fontSize:'18px',color:'#999999'}}>평균 1명당 20명</DetailPersonText>
        </div>
      </DetailPersonBox>
    </StyledDetailBox>
  )
}

export default DetailPerson;