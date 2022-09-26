import styled from "styled-components"
const DetailTitle = styled.h2({
    fontWeight:'normal',
    fontSize:'24px'
})

const StyledDetailBox = styled.div({
  marginTop:'4%',
})


const DetailFaciltytext = styled.div({
  fontSize:'18px',
  display:'inline-block',
  paddingLeft:'3%',
  paddingRight:'3%',
})
const DetailFacilityBox = styled.div({
  
  border:'1px solid #E1e1e1',
  paddingTop:'3%',
  paddingBottom:'3%',
  borderRadius:'10px',
})

const DetailFacilityImg = styled.img({
  marginLeft:'35px',
  width:'16px',
  height:'16px',
  display:'inline-block'
})

function DetailFacility({response}){
  return (
    <StyledDetailBox id="Detail-3">
      <DetailTitle>시설현황</DetailTitle>
      <DetailFacilityBox style={{marginBottom:'2%'}} >
        <DetailFacilityImg src="https://react.semantic-ui.com/images/wireframe/image.png"/>
        <DetailFaciltytext style={{paddingLeft:'5%'}}>1인실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",borderRight:'1px solid #e1e1e1',color:'#706ee9'}}>{response.singleRoom}개</DetailFaciltytext>
        <DetailFaciltytext >2인실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",borderRight:'1px solid #e1e1e1',color:'#706ee9'}}>{response.doubleRoom}개</DetailFaciltytext>
        <DetailFaciltytext>3인실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",borderRight:'1px solid #e1e1e1',color:'#706ee9'}}>{response.tripleRoom}개</DetailFaciltytext>
        <DetailFaciltytext>4인실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",color:'#706ee9'}}>{response.quadrupleRoom}개</DetailFaciltytext>
      </DetailFacilityBox>
      <DetailFacilityBox style={{width:"49%",display:'inline-block'}}>
      <DetailFacilityImg style={{marginLeft:'10%'}} src="https://react.semantic-ui.com/images/wireframe/image.png"/>
        <DetailFaciltytext style={{paddingLeft:'5%'}}>프로그램실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",paddingRight:'9%',color:'#706ee9',float:'right'}}>{response.programRoom}개</DetailFaciltytext>
      </DetailFacilityBox>
      <DetailFacilityBox style={{width:"49%",display:'inline-block',float:'right'}}>
      <DetailFacilityImg src="https://react.semantic-ui.com/images/wireframe/image.png"/>
        <DetailFaciltytext style={{paddingLeft:'5%'}}>작업 및 일상동작 훈련실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",paddingRight:'9%',color:'#706ee9',float:'right'}}>{response.trainingRoom}개</DetailFaciltytext>
      </DetailFacilityBox>
    </StyledDetailBox>
  )
}

export default DetailFacility;