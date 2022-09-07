import { Link } from "react-router-dom";
import styled from "styled-components";


const StyleMypage = styled.div({
    backgroundColor:"#f5f7fa",
    paddingTop:'70px',
    height:'80vh',
})

const MypageBox = styled.div({
    display:'inline-block',
    width:'450px',
    height:'350px',
    marginTop:'10%',
    marginLeft:'35%',
    backgroundColor:"white",
    borderRadius:"15px",
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
})

const MypageInnerBox = styled.div({
    display:"inline-block",
    border:'1px solid #e1e1e1',
    width:'40%',
    height:'50%',
    borderRadius:'20px'
})

const MypageText = styled.div({
    display:'block',
    fontSize:"20px",
    textAlign:'center',
})

const MyPage = ()=>{

    const onBtn1 = (e)=>{
        const box = document.getElementById("mypage_innerbox1");
        box.style.border='1px solid #496ace';
        box.style.boxShadow='0px 6px 10px rgba(0, 0, 0, 0.1)';
    }
    const onBtn2 = (e)=>{
        const box = document.getElementById("mypage_innerbox2");
        box.style.border='1px solid #496ace';
        box.style.boxShadow='0px 6px 10px rgba(0, 0, 0, 0.1)';
    }
    const leaveBtn1 = (e)=>{
        const box = document.getElementById("mypage_innerbox1");
        box.style.border='1px solid #e1e1e1';
        box.style.boxShadow='none';
    }
    const leaveBtn2 = (e)=>{
        const box = document.getElementById("mypage_innerbox2");
        box.style.border='1px solid #e1e1e1';
        box.style.boxShadow='none';
    }
    return(
        <StyleMypage>
            <MypageBox>
                <MypageText style={{marginTop:'30px',fontSize:'24px',fontWeight:'bolder'}}>마이페이지</MypageText>
                <MypageText style={{marginTop:'20px',marginBottom:'30px'}}>가입정보와 위시리스트를 관리할 수 있습니다.</MypageText>
                
                <Link style={{color:'black'}} to="/personInfo"><MypageInnerBox id="mypage_innerbox1" onMouseEnter={onBtn1} onMouseLeave={leaveBtn1} style={{marginLeft:'8%'}}>
                    <MypageText onMouseEnter={(e)=>{e.preventDefault()}} style={{fontWeight:'bolder'}}>모시는분 관리</MypageText>
                    <MypageText style={{fontSize:'18px'}}>모시는분의 정보를 관리합니다.</MypageText>
                </MypageInnerBox></Link>

                <Link style={{color:'black'}} to="/wish"><MypageInnerBox id="mypage_innerbox2" onMouseEnter={onBtn2} onMouseLeave={leaveBtn2} style={{marginLeft:'4%'}}>
                    <MypageText style={{fontWeight:'bolder'}}>위시리스트 관리</MypageText>
                    <MypageText style={{fontSize:'18px'}}>위시리스트에 저장한 시설을 확인합니다.</MypageText>
                </MypageInnerBox></Link>
                
            </MypageBox>
        </StyleMypage>
    )
};

export default MyPage;