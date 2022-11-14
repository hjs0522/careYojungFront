import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postKakao } from "../api";
import { useRecoilState } from "recoil";
import { loginState } from "../atom";
import { Dimmer,Loader,Image } from "semantic-ui-react";

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
                localStorage.setItem('refresh-token',data.refreshToken);
                if (localStorage.getItem('user')){
                    setLogin(true);
                }
            }catch(e){
                console.log(e);
                console.log('localStorage is not working');
            }
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
        <>
            <Dimmer active>
                <Loader>Loading</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </>
    );
}

export default Kakao;