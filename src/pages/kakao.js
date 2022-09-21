import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Kakao = (props) =>{
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`http://127.0.0.1/oauth/callback/kakao?code=${code}`)
        .then((res)=>{
            console.log(res);
            const ACCESS_TOKEN = res.formData.accesssToken;
            
            localStorage.setItem("token", ACCESS_TOKEN);
            navigate("/")
        }).catch((err)=>{
            console.log(err)
            console.log("로그인 실패")
            navigate("/login")
        })
    },[code,navigate]);
    return(
        <h1>대기중</h1>
    );
}

export default Kakao;