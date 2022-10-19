import styled from "styled-components"
import { Icon } from "semantic-ui-react"

const DetailTitle = styled.h2({
    fontWeight:'normal',
    fontSize:'24px'
  })
const StyledDetailBox = styled.div({
    marginTop:'4%',
  })
const DetailReviewText = styled.div({
    display:'inline-block',
    fontSize:"16px",
    color:'#444444'
  })
  
  const DetailReviewButton = styled.button({
    display:"inline-block",
    float:'right',
    width:'130px',
    height:'40px',
    fontSize:'18px',
    backgroundColor:'#878edf',
    color:'white',
    borderRadius:'6px',
    border:'0',
    cursor:'pointer',
  
  })
  
  const DetailReviewStar = styled.div({
    marginBottom:'2%',
  })
  const DetailReviewBox = styled.div({
    
  })
  
  const DetailReviewElement = styled.div({
    marginTop:'2%',
    padding:"1%",
    borderBottom:'1px solid #e1e1e1'
  })
  
  
  function DetailReview({detailInfo}){
    function getStar(num){
      const starArr=[0,0,0,0,0];
      for(let i=0;i<num;i++){
        starArr[i]=1
      }
      const result=[]
      starArr.forEach((i)=>{
        if(i===1)
          result.push(<Icon key={i} size="large" name="star" color="yellow"/>)
        else
          result.push(<Icon key={i} size="large" name="star" color="grey"/>)
      })
      return result;
    }
  
    function avgStar(){
      let sum=0;
      detailInfo.reviews.map((i)=>sum+=i.score)
      return (sum/detailInfo.reviews.length).toFixed(1);
    }
  
    return (
      <StyledDetailBox id="Detail-5">
        <div >
          <DetailTitle  style={{display:'inline-block'}}>시설리뷰</DetailTitle>
          <Icon size="large" style={{paddingLeft:"3%"}} name="star" color="yellow"/>
          <DetailReviewText style={{paddingLeft:'3%',paddingRight:'2%'}}>{avgStar()}</DetailReviewText>
          <DetailReviewText style={{paddingLeft:'2%',borderLeft:'1px solid #444444'}}>리뷰 {detailInfo.reviews.length}개</DetailReviewText>
          <DetailReviewButton><img style={{width:'15px',height:'15px',marginRight:"10%"}} src="https://react.semantic-ui.com/images/wireframe/image.png" alt="리뷰버튼"/>리뷰하기</DetailReviewButton>
        </div>
        <DetailReviewBox>
          {detailInfo.reviews.map((i)=>(
            <DetailReviewElement>
              <DetailReviewStar>{getStar(i.score)}</DetailReviewStar>
              <DetailReviewText style={{paddingRight:'2%',color:'black'}}>{i.member_id}</DetailReviewText>
              <DetailReviewText style={{paddingLeft:'2%',color:'#999999',borderLeft:'1px solid #444444'}}>{i.date}</DetailReviewText>
              <DetailReviewText style={{marginTop:'2%',display:'block',fontWeight:'normal'}}>{i.text}</DetailReviewText>
            </DetailReviewElement>
          ))}
        </DetailReviewBox>
  
      </StyledDetailBox>
    )
  }
  
export default DetailReview;