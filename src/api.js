const SERVER_ADDRESS = '4ed1-118-32-133-32.jp.ngrok.io';

export function postKakao(code){
    return fetch(`https://care-yojung.com/member/login/kakao?code=${code}`,{
        method: 'POST',
        headers:{
            "ngrok-skip-browser-warning": "69420",
            'Content-Type': 'application/json',
        },
    })
    .then((res) => console.log(res.json()));
}

export function getSearchList(keyword,service,grade,order){
    return fetch(`https://care-yojung.com/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}&memberId=user1`,{
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "69420",
          accept: "application/json",
        },
    })
    .then(res => res.json());
};

export function getWishList(){
    return fetch(`https://4ed1-118-32-133-32.jp.ngrok.io/wish-list?memberId=user1`)
    .then((res)=>res.json());
}


export function PostWishItem(nursingHome_id){
    return fetch("https://care-yojung.com/wish-list", {
        method: 'POST', // *GET, POST, PUT, DELETE 등
        headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420",
    // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            "memberId": "user12",
            "svcId": nursingHome_id,
            "svcType": "ho"
        }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
        });
};

export function PostSignUp(age,careGrade,insuranceClickid,diseaseResult,recipientClickid,name,genderClickid,location,recoverResult){
    return fetch("https://care-yojung.com/member/signUp",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420",
        },
        body: JSON.stringify({
            "age":age,
            "careGrade": careGrade,
            "insuranceType": insuranceClickid,
            "necessaryTreat": diseaseResult,
            "reciptientType": recipientClickid,
            "seniorName": name,
            "sex": genderClickid,
            "location": location,
            "withDisease": recoverResult,
        }),
    })
}

export function PostLogout(){
    return fetch("https://care-yojung.com/member/logout",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": "69420",
        },
    })
}
