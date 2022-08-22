import React, {useState,useRef,useEffect} from 'react'
import { Button, Modal,Grid, Icon} from 'semantic-ui-react'
import styled from 'styled-components'
import DetailCost from './DetailCost'
import ListArg from './ListArg'

const response={
		nursingHome_id:123, // 요양원 id
		name:'서울요양시설', // 요양원이름
		addrSiDo:11, //시도코드
		addrSiGunGu:500, // 시군구코드
		addrDong:500, // 법정동코드
		addrRi:123, // 리코드
		addrRoad:"서울시 상도로 22길", // 도로명주소
		addrDetail:"4층", // 상세주소
		phoneNumber:"010-1234-4567", // 전화번호
		headCount:40, // 정원
		nowCount:35, // 현원
		waitingCount:23, // 대기
		doctor:10, // 의사 수
		nurse:13, // 간호사 수
		careGiver:5, // 요양보호사 수
		singleRoom:12, // 1인실
		doubleRoom:21, // 2인실
		tripleRoom:13, // 3인실
		quadrupleRoom:12, // 4인실
		programRoom:1, // 프로그램실
		trainingRoom:1, // 작업 및 일상동작 훈련실
		cost:210000, // 비용
		reviews: [
			{
				review_id:'abd', // 리뷰 id
				member_id:'vcdc', // 사용자 id
				nursingHome_id:'sdafasdf', // 요양원 id
				text:"별로예요!", // 리뷰
				score:4, // 평점
				date:"2022.07.21" // 작성 날짜
			},
		]
		// word 키워드 추가 예정
}

const DetailPage = styled.div({
  marginLeft:'4%',
  marginRight:'4%',
  scrollBehavior:'smooth',
})

const StyledImage = styled.img`
    border-radius:10px;
    margin-left:20px;
    filter:drop-shadow(1px 1px 5px rgba(25,32,60,0.3));
    height:${prop=>prop.id==='Themelist'? '320px':'220px'};
    width:${prop=>prop.id==='Themelist'? '31.5%':'22.5%'};
    display:inline-block;
    cursor:pointer;
`

const DetailImage = styled.img({
  marginTop:'20px',
  height:'170px',
  borderRadius:'10px',
})

const ModalHeader = styled.div({
  display:'inline-block',
  fontSize:'28px',
  marginTop:'2%',
  marginBottom:'2%',
})

const MenuBarBox = styled.div({
  width:'95%',
  fontSize:'20px',
  borderTop:'3px solid #706EE9',
})

const Menubar= styled.button({
  cursor:'pointer',
  textAlign:'center',
  width:'20%',
  height:'40px',
  fontSize:'17px',
  backgroundColor:"#F2F2FF",
  display:'inline',
  border:'1px solid #706EE9',
  outline:'0',
  color:'#706EE9',
  
})  

const DetailBody = styled.div({
  width:'95%',
})

const DetailInfo = styled.div({
  fontSize:"20px",
  display:'inline',
})

const DetailTel = styled.div({
  color:"#0596FF",
  fontSize:'20px',
  display:'inline',
  marginLeft:'3%',
})

const DetailSummary = styled.div({
  width:'100%',
  backgroundColor:'#F4F4F4',
  borderRadius:'20px',
  padding:'2%',
  marginTop:'3%',
  textAlign:'center',
})

const DetailSummaryText = styled.div({
  fontSize:'20px',
  color:'#444444',
  
  display:'inline-block',
  padding:'1%'
})

const DetailTitle = styled.h2({
  fontWeight:'normal',
  fontSize:'24px'
})

const StyledDetailBox = styled.div({
  marginTop:'4%',
})

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

function DetailPerson(){
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

function DetailFacility(){
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

const StyledDetailAI = styled.div({
  backgroundColor:'#FAFAFA',
  border:'1px solid #e1e1e1',
  borderRadius:'10px',
})

const DetailAIElement = styled.div({
  display:'inline-block',
  width:'50%',
  padding:'2%',
})

const DetailAIText = styled.div({
  display:'inline-block',
  fontSize:'16px',
  width:'80px',
})

const DetailAIGraph = styled.div({
  display:'inline-block',
  width:'60%',
  height:'10px',
  backgroundColor:'#e1e1e1',
  
  borderRadius:'15px',
})
const DetailAIInnerGraph = styled.div`
  position:absolute;
  display:inline-block;
  height:10px;
  background:linear-gradient(270deg, #496ACE 0%, #A3A1FD 100%);
  border-radius:15px;
  width:${(prop)=>prop.width || '20%' };
`
const AIarr = [
  {name : '청결도', value: '20%'},
  {name : '위치(접근)', value: '10%'},
  {name : '식사', value: '8%'},
  {name : '시설', value: '12%'},
  {name : '친절도', value: '9%'}
]


function DetailAI(){
  return (
    <StyledDetailBox id="Detail-4">
      <DetailTitle>AI점수</DetailTitle>
      <StyledDetailAI>
          {AIarr.map((i)=>(
            <DetailAIElement>
              <DetailAIText>{i.name}</DetailAIText>
              <DetailAIGraph><DetailAIInnerGraph width={i.value}></DetailAIInnerGraph></DetailAIGraph>
              <DetailAIText style={{width:'0',color:'#496ace',marginLeft:'3%'}}>{i.value}</DetailAIText>
            </DetailAIElement>
          ))}
      </StyledDetailAI>
    </StyledDetailBox>
  )
}

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


function DetailReview(){
  function getStar(num){
    const starArr=[0,0,0,0,0];
    for(let i=0;i<num;i++){
      starArr[i]=1
    }
    const result=[]
    starArr.map((i)=>{
      if(i===1)
        result.push(<Icon key={i} size="large" name="star" color="yellow"/>)
      else
        result.push(<Icon key={i} size="large" name="star" color="grey"/>)
    })
    return result;
  }

  function avgStar(){
    let sum=0;
    console.log(sum)
    response.reviews.map((i)=>sum+=i.score)
    console.log(sum)
    return (sum/response.reviews.length).toFixed(1);
  }

  return (
    <StyledDetailBox id="Detail-5">
      <div >
        <DetailTitle  style={{display:'inline-block'}}>시설리뷰</DetailTitle>
        <Icon size="large" style={{paddingLeft:"3%"}} name="star" color="yellow"/>
        <DetailReviewText style={{paddingLeft:'3%',paddingRight:'2%'}}>{avgStar()}</DetailReviewText>
        <DetailReviewText style={{paddingLeft:'2%',borderLeft:'1px solid #444444'}}>리뷰 {response.reviews.length}개</DetailReviewText>
        <DetailReviewButton><img style={{width:'15px',height:'15px',marginRight:"10%"}} src="https://react.semantic-ui.com/images/wireframe/image.png" />리뷰하기</DetailReviewButton>
      </div>
      <DetailReviewBox>
        {response.reviews.map((i)=>(
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

const menuArr={
  기본정보:'Detail-1',
  인력현황:'Detail-2',
  시설현황:'Detail-3',
  AI점수:'Detail-4',
  시설리뷰:'Detail-5'
}

function Detail({img,name,loc,id,bb,setbb}) {

  const onMenuClick= (i) =>{
    const item=document.getElementById(menuArr[i.target.innerText]);
    item.scrollIntoView({behavior: "smooth" })
  }
  return (
    <Modal
      onClose={() => setbb(false)}
      onOpen={() => setbb(true)}
      open={bb}
      size='large'
      // trigger={
      //   <StyledImage id={id} src={img} />
      //   // <ListArg img={img} name={name} loc={loc} id={id}/>
      // }
    >
      <DetailPage>
        <ModalHeader >{name}</ModalHeader>
        <div style={{display:'inline-block',float:'right',marginTop:'1%',marginRight:'1%',cursor:'pointer'}}>
          <Modal.Actions >
            <Icon size="huge" color="grey" name="x" onClick={() => setbb(false)}/>
          </Modal.Actions>
        </div>
        <MenuBarBox >
          <Menubar onClick={onMenuClick}>기본정보</Menubar>
          <Menubar onClick={onMenuClick} >인력현황</Menubar>
          <Menubar onClick={onMenuClick}>시설현황</Menubar>
          <Menubar onClick={onMenuClick}>AI점수</Menubar>
          <Menubar onClick={onMenuClick}>시설리뷰</Menubar>
        </MenuBarBox>
        <Modal.Content scrolling>
          <DetailBody id="Detail-1">
            <Grid columns={2}relaxe >
              <Grid.Row stretched>
                <Grid.Column  width={11}>
                  <DetailImage  src={img}/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <DetailImage src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210627_259%2F1624777448578z0UmE_JPEG%2FNmbf0Se_e3WnRHnHeFr39mX7.jpg"/>
                  <DetailImage src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220308_120%2F1646721661971q1ccQ_JPEG%2FmosaBADqZ0.jpg"/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={2} >
              <Grid.Row >
                <Grid.Column width={11}>
                  <DetailInfo>{loc}</DetailInfo>
                  <DetailTel>T : {response.phoneNumber}</DetailTel>
                  <DetailSummary>
                    <DetailSummaryText>시설정원</DetailSummaryText>
                    <DetailSummaryText style={{color:'#496ACE'}}>{response.headCount}</DetailSummaryText>
                    <DetailSummaryText style={{padding:'0'}}>명 </DetailSummaryText>
                    <DetailSummaryText>현원</DetailSummaryText>
                    <DetailSummaryText style={{color:'#496ACE'}}>{response.nowCount}</DetailSummaryText>
                    <DetailSummaryText style={{padding:'0'}}>명 </DetailSummaryText>
                    <DetailSummaryText>대기</DetailSummaryText>
                    <DetailSummaryText style={{color:'#496ACE'}}>{response.waitingCount}</DetailSummaryText>
                    <DetailSummaryText style={{padding:'0'}}>명 </DetailSummaryText>
                  </DetailSummary>
                  <DetailPerson />  {/*인력현황 컴포넌트*/}
                  <DetailFacility />  {/*시설현황 컴포넌트*/}
                  <DetailAI />  {/*AI점수 컴포넌트*/}
                  <DetailReview /> {/*시설리뷰 컴포넌트*/}
                  
                </Grid.Column>
                <Grid.Column width={5}>
                  <div style={{top:'5%',position:'sticky'}}> 
                    {/* position:'sticky'를 사용하면 스크롤을 따라오게 할 수 있음. */}
                    <DetailCost />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </DetailBody>
        </Modal.Content>
      </DetailPage>
    </Modal>
  )
}

export default Detail;
