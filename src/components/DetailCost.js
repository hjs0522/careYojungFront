import {useRef,useEffect,useState} from 'react'
import { Button, Grid } from "semantic-ui-react"
import styled from "styled-components"

const StyledDetailCost = styled.div({
    boxSizing:'border-box',
    border:'1px solid #CCCCCC',
    padding:'20px',
    borderRadius:'10px',
})

const StyledHeader = styled.h4({
    fontSize:'24px',
    fontWeight:'normal',
})

const StyledInnerHeader = styled.h4({
    fontSize:'20px',
    color:'#444444',
    display:'block',
    marginBottom:'4%',
    marginTop:'4%',
    fontWeight:'normal',
})
  

const BeneficalType = styled.div({
    marginTop:'5%',
})

const CostButton = styled.button({
    margin:'auto',
    marginBottom:'3%',
    border:'1px solid #CCCCCC',
    fontSize:'16px',
    padding:'2%',
    borderRadius:'10px',
    cursor:'pointer',
    fontWeight:'lighter',
    backgroundColor:'white',
})

const CareLevel = styled.div({
    
})

const ResCost = styled.div`
    
    margin-top:5%;
    background-color:#f15aa3;
    border-radius:10px;
    color:white;
    width:100%;
    
`
const ResCostText = styled.div`
    display:inline-block;
    font-size:20px;
    font-weight:400;
    font-style:normal;
    margin:3%;
`

const costArr={
    benetype1:1000,
    benetype2:2000,
    benetype3:3000,
    benetype4:4000,
    carelevel1:3,
    carelevel2:4,
    carelevel3:5,
    carelevel4:6,
    carelevel5:7,
}

function DetailCost(){
    const boxRef = useRef(null);
    const [enterid,setEnterid]= useState(""); //버튼 호버시 id 가져오는 상태변수
    const [isEnter,setIsEnter] = useState(false); //버튼에 마우스가 올라가있는지 판별

    /*수급자 유형 버튼관련*/
    const [beneClickid,setBeneClickid]= useState(""); //수급자 유형 버튼 id
    const [benePreClick,setBenePreClick] = useState(""); //수급자 유형 바로 전 클릭 버튼 id
    const [beneCost,setBeneCost]= useState(0); //현재 클릭된 버튼의 cost

    /*요양등급 버튼관련*/
    const [careClickid,setCareClickid]=useState(""); //요양 등급 버튼 id
    const [carePreClick,setCarePreClick] = useState(""); // 요양 등급 바로 전 클릭 버튼 id
    const [careCost,setCareCost]= useState(0); //현재 클릭된 버튼의 cost

    const onMouseEnter = (i)=>{
        setEnterid(i.target.id);
        setIsEnter(true);
    }
    const onMouseLeave = (i)=>{
        setEnterid(i.target.id);
        setIsEnter(false);
    }
    const beneOnClick = (i) =>{ //수급자 유형 버튼 클릭시 하이라이팅, 한번에 한개의 버튼만 선택할 수 있게 바로 전 선택을 저장한 후 다른 버튼 클릭 시 호버 풀어줌.
        if(i.target.id===beneClickid)
            return;
        setBeneClickid(i.target.id)
        const item = document.getElementById(i.target.id);
        item.style.color='#496ace';
        item.style.fontWeight='bolder';
        item.style.backgroundColor='#e6edff';
        item.style.border="1px solid #496ace";
        if(benePreClick!==''){
            const preitem = document.getElementById(benePreClick);
            preitem.style.color='black';
            preitem.style.fontWeight='lighter';
            preitem.style.backgroundColor='white';
            preitem.style.border="1px solid #CCCCCC";
        }
        setBenePreClick(i.target.id);
        setBeneCost(costArr[beneClickid]);
    }
    const careOnClick = (i) =>{ // 요양 등급 버튼 클릭시 하이라이팅, 한번에 한개의 버튼만 선택할 수 있게 바로 전 선택을 저장한 후 다른 버튼 클릭 시 호버 풀어줌.
        if(careClickid===i.target.id)
            return;
        setCareClickid(i.target.id)
        const item = document.getElementById(i.target.id);
        item.style.color='#496ace';
        item.style.fontWeight='bolder';
        item.style.backgroundColor='#e6edff';
        item.style.border="1px solid #496ace";
        if(carePreClick!==''){
            const preitem = document.getElementById(carePreClick);
            preitem.style.color='black';
            preitem.style.fontWeight='lighter';
            preitem.style.backgroundColor='white';
            preitem.style.border="1px solid #CCCCCC";
        }
        setCarePreClick(i.target.id);
    }

    useEffect(()=>{ //마우스 enter or leave시 배경 변경
        if(enterid!==''&&(enterid!==beneClickid&&enterid!==careClickid)){
            const item = document.getElementById(enterid);
            if(isEnter) item.style.backgroundColor='#e6edff';
            else {
                item.style.backgroundColor='white'
            }
        }
    },[isEnter])

    //클릭된 버튼에 따른 출력가격 업데이트
    //그냥 setCareCost 안하고 useEffect사용하는 이유는 useState는 비동기 방식임.
    //그래서 무조건 가격 책정 후 화면에 출력 되어야 하므로 동기방식인 useEffect 사용.
    useEffect(()=>{ 
        if(careClickid!=='')
            setCareCost(costArr[careClickid]);
    },[careClickid]);
    useEffect(()=>{
        if(beneClickid!=='')
            setBeneCost(costArr[beneClickid]);
    },[beneClickid]);

    return (
        <StyledDetailCost >
            
            <StyledHeader>예상비용</StyledHeader>
            <BeneficalType> 
            <StyledInnerHeader>수급자 유형</StyledInnerHeader>
                <CostButton id="benetype1" onClick={beneOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'48%'}}>일반대상</CostButton>
                <CostButton id="benetype2" onClick={beneOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'48%',float:'right'}}>기초생활수급자</CostButton>
                <CostButton id="benetype3" onClick={beneOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'100%'}}>본인부담 40% 경감자</CostButton>
                <CostButton id="benetype4" onClick={beneOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'100%'}}>본인부담 60% 경감자</CostButton>
            </BeneficalType>
            <CareLevel>
                <StyledInnerHeader>요양등급</StyledInnerHeader>
                    <CostButton id="carelevel1" onClick={careOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} type="button" style={{width:'30%'}}>1등급</CostButton>
                    <CostButton id="carelevel2" onClick={careOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'30%',marginLeft:'5%'}}>2등급</CostButton>
                    <CostButton id="carelevel3" onClick={careOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'30%',float:'right'}}>3등급</CostButton>
                    <CostButton id="carelevel4" onClick={careOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'30%'}}>4등급</CostButton>
                    <CostButton id="carelevel5" onClick={careOnClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{width:'30%',marginLeft:'5%'}}>5등급</CostButton>
            </CareLevel>
            <ResCost>
                <div style={{borderBottom:"1px dashed #FFFFFF",padding:'4%'}}>
                    <ResCostText style={{marginLeft:'25%'}}>{beneCost+careCost}원</ResCostText>
                    <ResCostText >x</ResCostText>
                    <ResCostText >30일</ResCostText>
                </div>
                <div style={{padding:'4%'}}>
                    <ResCostText >총금액</ResCostText>
                    <div style={{float:'right',marginRight:'3%',width:'50%',padding:'2%'}}>
                        <ResCostText >210,000원</ResCostText>
                    </div>
                </div>
            </ResCost>
        </StyledDetailCost>
    )
}



export default DetailCost;