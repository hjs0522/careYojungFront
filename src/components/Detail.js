import React, {useState,useRef,useEffect} from 'react'
import { Button, Modal,Grid, Icon} from 'semantic-ui-react'
import styled from 'styled-components'
import DetailCost from './DetailCost'

const DetailPage = styled.div({
  marginLeft:'4%',
  marginRight:'4%',
  scrollBehavior:'smooth',
})

const StyledImage = styled.img({
    borderRadius:'10px',
    marginLeft:'20px',
    marginRight:'20px',
    filter:'drop-shadow(4px 4px 20px rgba(25,32,60,0.35))',
    display:'inline-block',
    cursor:'pointer',
})

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
          <DetailPersonText style={{float:'right',color:'#E9539b'}}>10명</DetailPersonText>
        </div>
        <div style={{padding:"7%"}}>
          <DetailPersonText style={{display:'block',marginBottom:'10px'}}>1명당 입소자 20명</DetailPersonText>
          <DetailPersonText style={{display:'block',fontSize:'18px',color:'#999999'}}>평균 1명당 20명</DetailPersonText>
        </div>
      </DetailPersonBox>
      <DetailPersonBox style={{marginLeft:'5%'}}>
        <div style={{padding:"7%",borderBottom:'1px solid #e1e1e1'}}>
          <DetailPersonText>간호사</DetailPersonText>
          <DetailPersonText style={{float:'right',color:'#E9539b'}}>10명</DetailPersonText>
        </div>
        <div style={{padding:"7%"}}>
          <DetailPersonText style={{display:'block',marginBottom:'10px'}}>1명당 입소자 20명</DetailPersonText>
          <DetailPersonText style={{display:'block',fontSize:'18px',color:'#999999'}}>평균 1명당 20명</DetailPersonText>
        </div>
      </DetailPersonBox>
      <DetailPersonBox style={{float:"right"}}>
        <div style={{padding:"7%",borderBottom:'1px solid #e1e1e1'}}>
          <DetailPersonText>요양보호사</DetailPersonText>
          <DetailPersonText style={{float:'right',color:'#E9539b'}}>10명</DetailPersonText>
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
        <DetailFaciltytext style={{paddingLeft:"0",borderRight:'1px solid #e1e1e1',color:'#706ee9'}}>10개</DetailFaciltytext>
        <DetailFaciltytext >2인실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",borderRight:'1px solid #e1e1e1',color:'#706ee9'}}>10개</DetailFaciltytext>
        <DetailFaciltytext>3인실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",borderRight:'1px solid #e1e1e1',color:'#706ee9'}}>10개</DetailFaciltytext>
        <DetailFaciltytext>4인실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",color:'#706ee9'}}>10개</DetailFaciltytext>
      </DetailFacilityBox>
      <DetailFacilityBox style={{width:"49%",display:'inline-block'}}>
      <DetailFacilityImg style={{marginLeft:'10%'}} src="https://react.semantic-ui.com/images/wireframe/image.png"/>
        <DetailFaciltytext style={{paddingLeft:'5%'}}>프로그램실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",paddingRight:'9%',color:'#706ee9',float:'right'}}>10개</DetailFaciltytext>
      </DetailFacilityBox>
      <DetailFacilityBox style={{width:"49%",display:'inline-block',float:'right'}}>
      <DetailFacilityImg src="https://react.semantic-ui.com/images/wireframe/image.png"/>
        <DetailFaciltytext style={{paddingLeft:'5%'}}>작업 및 일상동작 훈련실</DetailFaciltytext>
        <DetailFaciltytext style={{paddingLeft:"0",paddingRight:'9%',color:'#706ee9',float:'right'}}>10개</DetailFaciltytext>
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

const ReviewArr = [
  {name:'홍길동',star:4,date:'2022.07.10',review:'전반적으로 시설도 괜찮고 깔끔한 것 같았습니다. 직원들도 친절하시고 프로그램도 많이 다양한 편이네요,'},
  {name:'홍길동',star:5,date:'2022.07.10',review:'전반적으로 시설도 괜찮고 깔끔한 것 같았습니다. 직원들도 친절하시고 프로그램도 많이 다양한 편이네요,'},
  {name:'홍길동',star:5,date:'2022.07.10',review:'전반적으로 시설도 괜찮고 깔끔한 것 같았습니다. 직원들도 친절하시고 프로그램도 많이 다양한 편이네요,'},
  {name:'홍길동',star:4,date:'2022.07.10',review:'전반적으로 시설도 괜찮고 깔끔한 것 같았습니다. 직원들도 친절하시고 프로그램도 많이 다양한 편이네요,'},
  {name:'홍길동',star:3,date:'2022.07.10',review:'전반적으로 시설도 괜찮고 깔끔한 것 같았습니다. 직원들도 친절하시고 프로그램도 많이 다양한 편이네요,'},
  {name:'홍길동',star:1,date:'2022.07.10',review:'전반적으로 시설도 괜찮고 깔끔한 것 같았습니다. 직원들도 친절하시고 프로그램도 많이 다양한 편이네요,'}
]

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
    ReviewArr.map((i)=>sum+=i.star)
    return (sum/ReviewArr.length).toFixed(1);
  }

  return (
    <StyledDetailBox id="Detail-5">
      <div >
        <DetailTitle  style={{display:'inline-block'}}>시설리뷰</DetailTitle>
        <Icon size="large" style={{paddingLeft:"3%"}} name="star" color="yellow"/>
        <DetailReviewText style={{paddingLeft:'3%',paddingRight:'2%'}}>{avgStar()}</DetailReviewText>
        <DetailReviewText style={{paddingLeft:'2%',borderLeft:'1px solid #444444'}}>리뷰 {ReviewArr.length}개</DetailReviewText>
        <DetailReviewButton><img style={{width:'15px',height:'15px',marginRight:"10%"}} src="https://react.semantic-ui.com/images/wireframe/image.png" />리뷰하기</DetailReviewButton>
      </div>
      <DetailReviewBox>
        {ReviewArr.map((i)=>(
          <DetailReviewElement>
            <DetailReviewStar>{getStar(i.star)}</DetailReviewStar>
            <DetailReviewText style={{paddingRight:'2%',color:'black'}}>{i.name}</DetailReviewText>
            <DetailReviewText style={{paddingLeft:'2%',color:'#999999',borderLeft:'1px solid #444444'}}>{i.date}</DetailReviewText>
            <DetailReviewText style={{marginTop:'2%',display:'block',fontWeight:'normal'}}>{i.review}</DetailReviewText>
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

function Detail({img,name,loc}) {
  const [menubar, setMenubar] = useState();
  const [pageY,setPageY]=useState(0);
  const aRef=useRef(null);

  const onMenuClick= (i) =>{
    const item=document.getElementById(menuArr[i.target.innerText]);
    item.scrollIntoView({behavior: "smooth" })
  }
  const onClick= (i)=>{
    console.log(i.target.getBoundingClientRect().top);
    console.log(i);
  }
  const [open, setOpen] = useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      trigger={<StyledImage src={img} />}
    >
      <DetailPage>
        <ModalHeader >{name}</ModalHeader>
        <div style={{display:'inline-block',float:'right',marginTop:'1%',marginRight:'1%',cursor:'pointer'}}>
          <Modal.Actions >
            <Icon size="huge" color="grey" name="x" onClick={() => setOpen(false)}/>
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
                  <DetailImage  src="https://react.semantic-ui.com/images/wireframe/image.png"/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <DetailImage src="https://react.semantic-ui.com/images/wireframe/image.png"/>
                  <DetailImage src="https://react.semantic-ui.com/images/wireframe/image.png"/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={2} >
              <Grid.Row >
                <Grid.Column width={11}>
                  <DetailInfo>{loc}</DetailInfo>
                  <DetailTel>T : 031-1234-3456</DetailTel>
                  <DetailSummary>
                    <DetailSummaryText>시설정원</DetailSummaryText>
                    <DetailSummaryText style={{color:'#496ACE'}}>45</DetailSummaryText>
                    <DetailSummaryText style={{padding:'0'}}>명 </DetailSummaryText>
                    <DetailSummaryText>현원</DetailSummaryText>
                    <DetailSummaryText style={{color:'#496ACE'}}>45</DetailSummaryText>
                    <DetailSummaryText style={{padding:'0'}}>명 </DetailSummaryText>
                    <DetailSummaryText>대기</DetailSummaryText>
                    <DetailSummaryText style={{color:'#496ACE'}}>45</DetailSummaryText>
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
