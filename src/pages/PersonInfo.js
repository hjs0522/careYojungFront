import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import { useState,useEffect,useRef } from "react";
import { getMember, postSignUp } from "../api";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobilePage from "./MobilePage";
const StyledPersonInfo = styled.div({
  paddingBottom: "100px",
  paddingTop: "100px",
  backgroundColor: "#F5f7fa",
});
const StyledBody = styled.div({
  backgroundColor: "white",
  width: "1200px",
  margin: "0 auto",
  padding: "0 150px 70px 150px",
  borderRadius: "30px",
  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
});
const StyledText = styled.div({
  fontSize: "22px",
  display: "inline-block",
  marginBottom: "20px",
});

const StyledButton = styled.div`
  height: 40px;
  width: ${(prop) => prop.width || "23.5%"};
  display: inline-block;
  border: 1px solid #cccccc;
  text-align: center;
  border-radius: 10px;
  vertical-align: middle;
  cursor: pointer;
  padding-top: auto;
  padding-bottom: auto;
  font-size: 20px;
  color: #999999;
  margin-left: ${(prop) => prop.left || "2%"};
`;
const StyledFinishButton = styled.div({
  width: "40%",
  height: "70px",
  textAlign: "center",
  paddingTop: "25px",
  fontSize: "24px",
  color: "white",
  background: "#cccccc",
  marginLeft: "30%",
  borderRadius: "30px",
  cursor: "pointer",
});

const StyledBox = styled.div({
  marginBottom: "50px",
  width: "47.5%",
  display: "inline-block",
});

const ageOption = [
  {
    key: "65세 미만",
    text: "65세 미만",
    value: "65세 미만",
  },
  {
    key: "65~75세",
    text: "65~75세",
    value: "65~75세",
  },
  {
    key: "75~85세",
    text: "75~85세",
    value: "75~85세",
  },
  {
    key: "85세 이상",
    text: "85세 이상",
    value: "85세 이상",
  },
];
const careRatingOption = [
  {
    key: "1등급",
    text: "1등급",
    value: 1,
  },
  {
    key: "2등급",
    text: "2등급",
    value: 2,
  },
  {
    key: "3등급",
    text: "3등급",
    value: 3,
  },
  {
    key: "4등급",
    text: "4등급",
    value: 4,
  },
  {
    key: "5등급",
    text: "5등급",
    value: 5,
  },
  {
    key: "잘 모르겠음",
    text: "잘 모르겠음",
    value: 0,
  },
];

function PersonInfo(){
  //이름input 관리
  const [name,setName] = useState('');
  const nameInput = useRef();
  const onChangeName = e =>{
      setName(e.target.value);
  }
  
  //성별 버튼 관리
  const [genderClickid,setGenderClickid] = useState("");
  const [genderPreClickid,setGenderPreClickid] = useState("");

  const onClickGender = (i) => {
    const item = document.getElementById(i.target.id);
    setGenderClickid(i.target.id);
    item.style.color = "#496ace";
    item.style.fontWeight = "bolder";
    item.style.backgroundColor = "#e6edff";
    item.style.border = "1px solid #496ace";
    if (genderPreClickid !== "") {
      const preitem = document.getElementById(genderPreClickid);
      preitem.style.color = "black";
      preitem.style.fontWeight = "lighter";
      preitem.style.backgroundColor = "white";
      preitem.style.border = "1px solid #CCCCCC";
      if (i.target.id === genderPreClickid) {
        setGenderClickid("");
        setGenderPreClickid("");
        return;
      }
    }
}

    //나이
    const [age,setAge] = useState('');
    const handleAgeChange = (e,{value:age})=>{
        setAge(age);
    }
    //요양등급
    const [careGrade,setCareGrade] = useState('');
    const handleCareGradeChange = (e,{value:careGrade})=>{
        setCareGrade(careGrade);
    }

    //가지고 있는 질병 벼튼 관리 
    const [diseaseClickid,setdiseaseClickid] = useState("");
    const [diseaseList,setDiseaseList]=useState([
        {id:'de',
        value:0},
        {id:'ki',
        value:0},
        {id:'st',
        value:0},
        {id:'mo',
        value:0},
        {id:'he',
        value:0},
        {id:'ca',
        value:0},
        {id:'null',
        value:0}
    ]);
    let diseaseSum = 0;
    const onClickDisease = (i)=>{
        const item = document.getElementById(i.target.id);
        const findIndex= diseaseList.findIndex(e=>e.id===i.target.id);
        const copyList = [...diseaseList];
        if(copyList[findIndex].value===1){
            copyList[findIndex].value=0;
            item.style.color='#999999';
            item.style.fontWeight='normal';
            item.style.backgroundColor='white';
            item.style.border="1px solid #cccccc";
            setDiseaseList(copyList);
            diseaseSum -=1
        }
        else{
            item.style.color='#496ace';
            item.style.fontWeight='bolder';
            item.style.backgroundColor='#e6edff';
            item.style.border="1px solid #496ace";
            copyList[findIndex].value=1;
            setDiseaseList(copyList);
            diseaseSum+=1
        }
        
        if (diseaseSum>0){
            setdiseaseClickid(diseaseSum);
        }
        else{
            setdiseaseClickid("");
        }
    }

    //필요한 치료 버튼 관리
    const [recoverClickid,setrecoverClickid] = useState("");
    const [recoverList,setRecoverList]=useState([
        {id:'re-mo',
        value:0},
        {id:'re-de',
        value:0},
        {id:'re-bl',
        value:0},
        {id:'re-al',
        value:0},
        {id:'re-null',
        value:0}
    ]);
    
    let recoverSum = 0;
    const onClickRecover = (i)=>{
        const item = document.getElementById(i.target.id);
        const findIndex= recoverList.findIndex(e=>e.id===i.target.id);
        const copyList = [...recoverList];
        if(copyList[findIndex].value===1){
            copyList[findIndex].value=0;
            item.style.color='#999999';
            item.style.fontWeight='normal';
            item.style.backgroundColor='white';
            item.style.border="1px solid #cccccc";
            setRecoverList(copyList);
            recoverSum-=1
        }
        else{
            item.style.color='#496ace';
            item.style.fontWeight='bolder';
            item.style.backgroundColor='#e6edff';
            item.style.border="1px solid #496ace";
            copyList[findIndex].value=1;
            setRecoverList(copyList);
            recoverSum+=1
        }
        
        if(recoverSum>0){
            setrecoverClickid(recoverSum)
        }
        else{
            setrecoverClickid("")
        }
    }
  //보험 유형 버튼 관리
  const [insuranceClickid, setinsuranceClickid] = useState("");
  const [insurancePreClickid, setInsurancePreClickid] = useState("");

  const onClickInsurance = (i) => {
    const item = document.getElementById(i.target.id);
    setinsuranceClickid(i.target.id);
    item.style.color = "#496ace";
    item.style.fontWeight = "bolder";
    item.style.backgroundColor = "#e6edff";
    item.style.border = "1px solid #496ace";
    if (insurancePreClickid !== "") {
      const preitem = document.getElementById(insurancePreClickid);
      preitem.style.color = "black";
      preitem.style.fontWeight = "lighter";
      preitem.style.backgroundColor = "white";
      preitem.style.border = "1px solid #CCCCCC";
      if (i.target.id === insurancePreClickid) {
        setinsuranceClickid("");
        setInsurancePreClickid("");
        return;
      }
    }
    setInsurancePreClickid(i.target.id);
  };
  //수급자 유형 버튼 관리
  const [recipientClickid, setrecipientClickid] = useState("");
  const [recipientPreClickid, setRecipientPreClickid] = useState("");

  const onClickRecipient = (i) => 
  {
    const item = document.getElementById(i.target.id);
    setrecipientClickid(i.target.id);
    item.style.color = "#496ace";
    item.style.fontWeight = "bolder";
    item.style.backgroundColor = "#e6edff";
    item.style.border = "1px solid #496ace";
    if (recipientPreClickid !== "") {
      const preitem = document.getElementById(recipientPreClickid);
      preitem.style.color = "black";
      preitem.style.fontWeight = "lighter";
      preitem.style.backgroundColor = "white";
      preitem.style.border = "1px solid #CCCCCC";
      if (i.target.id === recipientPreClickid) {
        setrecipientClickid("");
        setRecipientPreClickid("");
        return;
      }
    }
    }

    //희망지역 상태관리
    const [location,setLocation]=useState('');
    const locationInput = useRef();
    
    const onChangeLocation = e=>{
        setLocation(e.target.value);
    }
    
    //회원가입 완료 버튼 상태
    const [finishState,setFinishState] = useState(false);
    useEffect(()=>{
        if(name!=="" && genderClickid!=="" && age!==""&& careGrade!==""&& diseaseClickid !=="" &&recoverClickid && insuranceClickid!=="" && recipientClickid!=="" &&location!=="")
            setFinishState(true);
        else
            setFinishState(false);
    },[name,genderClickid,age,careGrade,diseaseClickid,recoverClickid,insuranceClickid,recipientClickid,location])
    
    const diseaseResult = []
    for(let i=0;i<diseaseList.length;i++){
        if(diseaseList[i].value === 1){
            diseaseResult.push(diseaseList[i].id);
        }
    }
    const recoverResult = []
    for(let i=0;i<recoverList.length;i++){
        if(recoverList[i].value === 1){
            recoverResult.push(recoverList[i].id);
        }
    }
    const navigate = useNavigate();
    const handlerOnClick = () =>{
        postSignUp(age,careGrade,insuranceClickid,diseaseResult,recipientClickid,name,genderClickid,location,recoverResult).then(res=>console.log(res.headers))
        navigate("/");
    }
    
    const [info,setInfo] = useState('');
    useEffect(()=>{
      getMember().then((data)=>{
        setName(data.seniorName)
        setGenderClickid(data.sex);
        const itemSex = document.getElementById(data.sex);
        itemSex.style.color = "#496ace";
        itemSex.style.fontWeight = "bolder";
        itemSex.style.backgroundColor = "#e6edff";
        itemSex.style.border = "1px solid #496ace";
        setinsuranceClickid(data.insuranceType);
        const itmeInsure = document.getElementById(data.insuranceType);
        itmeInsure.style.color = "#496ace";
        itmeInsure.style.fontWeight = "bolder";
        itmeInsure.style.backgroundColor = "#e6edff";
        itmeInsure.style.border = "1px solid #496ace";
        setAge(data.age);
        setCareGrade(data.careGrade);
      });
    },[])
    
    const isMobile = useMediaQuery({
      query: "(max-width:767px)",
    });
    
    if (isMobile){
      return(
        <MobilePage></MobilePage>
      )
    }
    return(
        <StyledPersonInfo>
            <StyledBody>
                <StyledText style={{display:'block',fontSize:'24px',padding:'40px',textAlign:'center'}}>모시는 분의 정보를 입력해주세요.</StyledText>
                <StyledBox >
                    <StyledText style={{width:'50%'}}>이름</StyledText>
                    <input ref={nameInput} onChange={onChangeName} value={name} style={{width:'100%',height:'40px',display:'block',border:'1px solid #cccccc',borderRadius:'10px'}}  />
                </StyledBox>
                
                <StyledBox style={{marginLeft:'5%'}}>
                    <StyledText style={{width:'100%'}}>성별</StyledText>
                    <StyledButton onClick={onClickGender} id="M" width="30%" left="0">남자</StyledButton>
                    <StyledButton onClick={onClickGender} id="F" width="30%" left="5%">여자</StyledButton>
                    <StyledButton onClick={onClickGender} id="N" width="30%" left="5%">상관없음</StyledButton>
                </StyledBox>
                <StyledBox >
                    <StyledText style={{width:'100%'}}>연령</StyledText>
                    <Dropdown
                        placeholder='연령 선택'
                        fluid
                        selection
                        options={ageOption}
                        value={age}
                        onChange={handleAgeChange}
                    />
                </StyledBox>
                <StyledBox  style={{marginLeft:'5%'}}>
                    <StyledText style={{width:'100%'}}>장기노인요양등급</StyledText>
                    <Dropdown
                        placeholder='등급 선택'
                        fluid
                        selection
                        options={careRatingOption}
                        value={careGrade}
                        onChange={handleCareGradeChange}
                    />
                </StyledBox>
                <StyledBox style={{width:'100%'}}>
                    <div>
                        <StyledText>가지고 있는 질병</StyledText>
                        <StyledText style={{fontSize:'18px'}}>(복수선택 가능)</StyledText>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <StyledButton id="de" onClick={onClickDisease} left="0" >치매</StyledButton>
                        <StyledButton id="ki" onClick={onClickDisease}>신부전 (신장질환)</StyledButton>
                        <StyledButton id="st" onClick={onClickDisease}>뇌혈관질환 (중풍 등)</StyledButton>
                        <StyledButton id="mo" onClick={onClickDisease}>운동장애 (파키슨 등)</StyledButton>
                    </div>
                    <div>
                        <StyledButton id="he" onClick={onClickDisease} left="0">심장질환</StyledButton>
                        <StyledButton id="ca" onClick={onClickDisease}>암</StyledButton>
                        <StyledButton id="null" onClick={onClickDisease}>해당없음</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox style={{width:'100%'}}>
                    <div>
                        <StyledText>필요한 치료</StyledText>
                        <StyledText style={{fontSize:'18px'}}>(복수선택 가능)</StyledText>
                    </div>
                    <div style={{marginBottom:'2%'}}>
                        <StyledButton id="re-mo" onClick={onClickRecover} left="0">재활치표, 물리치료</StyledButton>
                        <StyledButton id="re-de" onClick={onClickRecover} >치매치료</StyledButton>
                        <StyledButton id="re-bl" onClick={onClickRecover} >혈액투석</StyledButton>
                        <StyledButton id="re-al" onClick={onClickRecover} >알콜중독치료</StyledButton>
                    </div>
                    <div>
                        <StyledButton id="re-null" onClick={onClickRecover} left="0">해당없음</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox style={{width:'100%'}}>
                    <StyledText style={{display:'block'}}>보험유형</StyledText>
                    <div style={{marginBottom:'2%'}}>
                        <StyledButton id="insurance1" onClick={onClickInsurance} left="0">건강보험</StyledButton>
                        <StyledButton id="insurance2" onClick={onClickInsurance}>{"건보료 0~25% 대상자"}</StyledButton>
                        <StyledButton id="insurance3" onClick={onClickInsurance}>건보료 25~50% 대상자</StyledButton>
                        <StyledButton id="insurance4" onClick={onClickInsurance}>의료급여</StyledButton>
                    </div>
                    <div>
                        <StyledButton id="insurance5" onClick={onClickInsurance} left="0">기초생활수급자</StyledButton>
                        <StyledButton id="insurance6" onClick={onClickInsurance}>모름</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox style={{width:'100%'}}>
                    <StyledText style={{display:'block'}}>수급자유형</StyledText>
                    <div style={{marginBottom:'2%'}}>
                        <StyledButton id="recipient1" onClick={onClickRecipient} left="0">일반대상</StyledButton>
                        <StyledButton id="recipient2" onClick={onClickRecipient} >기초생활수급자</StyledButton>
                        <StyledButton id="recipient3" onClick={onClickRecipient} >본인부담 40% 경감자</StyledButton>
                        <StyledButton id="recipient4" onClick={onClickRecipient} >본인부담 60% 경감자</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox style={{width:'100%'}}>
                    <StyledText>희망지역</StyledText>
                    <input ref={locationInput} onChange={onChangeLocation} style={{width:'100%',height:'40px',display:'block',border:'1px solid #cccccc',borderRadius:'10px'}}  />
                </StyledBox>
                {finishState?<StyledFinishButton style={{backgroundColor:'#496ace',color:'white'}} onClick={handlerOnClick}>제출하기</StyledFinishButton>:<StyledFinishButton onClick={()=>{alert("항목을 전부 체크해주세요")}}>제출하기</StyledFinishButton>}
            </StyledBody>
        </StyledPersonInfo>
    )
}

export default PersonInfo;