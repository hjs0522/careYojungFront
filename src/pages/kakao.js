import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postKakao } from "../api";

const Kakao = (props) =>{
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    
    useEffect(()=>{
        
        postKakao(code)
        .then((data)=>{
            try{
                localStorage.setItem('user',data);
            }catch(e){
                console.log('localStorage is not working');
            }
            
            if (data=== false)
            {
                navigate('/personInfo');
            }
            else{
                navigate('/');
            }
        })
        .catch((err)=>{
            console.log(err)
            console.log("로그인 실패")
            navigate('/login');
        })
    },[code,navigate]);
    
    return(
        <h1>대기중</h1>
    );
}

export default Kakao;