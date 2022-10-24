import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { postKakao } from "../api";

const Kakao = (props) =>{
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch(`https://4ed1-118-32-133-32.jp.ngrok.io/member/login/kakao?code=${code}`,{
            method: 'POST',
            headers:{
                "ngrok-skip-browser-warning": "69420",
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data)=>{
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