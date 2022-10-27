import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postKakao } from "../api";
import { useRecoilState } from "recoil";
import { loginState } from "../atom";
import {useCookies}from'react-cookie';
const Kakao = (props) =>{
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    const [login,setLogin] = useRecoilState(loginState);
    useEffect(()=>{
        postKakao(code)
        .then((data)=>{
            try{
                localStorage.setItem('user',data);
                localStorage.setItem('access-token',data.accessToken);
                if (localStorage.getItem('user')){
                    setLogin(true);
                }
            }catch(e){
                console.log(e);
                console.log('localStorage is not working');
            }
            console.log(`data value is ${data}`);
            if (data.flag=== false)
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
    },[]);
    
    return(
        <h1>대기중</h1>
    );
}

export default Kakao;