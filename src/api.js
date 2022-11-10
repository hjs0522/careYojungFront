const SERVER_ADDRESS = 'https://api.care-yojung.com';

export function postKakao(code){
    return fetch(`${SERVER_ADDRESS}/member/login/kakao?code=${code}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
    .then((res) => res.json());
}

export function getSearchList(keyword,service,grade,order){
    return fetch(`${SERVER_ADDRESS}/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
    })
    .then((res) => {
        console.log(res.status)
        if (res.status === 403){
            const refresh = localStorage.getItem('refresh-token')
            console.log(refresh);
            postReissuance(refresh).then(data=>{
                localStorage.setItem('access-token',data.accessToken);
                localStorage.setItem('refresh-token',data.refreshToken);
            })
        }
        else{
            return res.json();
        }
    });
};

export function getWishList(){
    return fetch(`${SERVER_ADDRESS}/wish-list?`,{
        method:"GET",
        headers:{
            accept:'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
        },
        credentials: 'include',
    })
    .then((res)=>res.json());
}


export function postWishItem(nursingHome_id){
    return fetch(`${SERVER_ADDRESS}/wish-list`, {
        method: 'POST', // *GET, POST, PUT, DELETE 등
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
        body: JSON.stringify({
            "memberId": "user12",
            "svcId": nursingHome_id,
            "svcType": "ho"
        }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
        });
};

export function deleteWishItem(svcId,svcType){
    fetch(`${SERVER_ADDRESS}/wish-list`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
            },
            credentials: 'include',
            body: JSON.stringify({
                "svcId": svcId,
                "svcType": svcType,
            }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
            })
}

export function postSignUp(age,careGrade,insuranceClickid,diseaseResult,recipientClickid,name,genderClickid,location,recoverResult){
    return fetch(`${SERVER_ADDRESS}/member/signUp`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
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

export function postLogout(refresh){

    return fetch(`${SERVER_ADDRESS}/member/logout`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
        body: JSON.stringify({
            'refresh': refresh,
        }),
    })
}

export function getMap(query){
    fetch(`${SERVER_ADDRESS}/search/map?${query}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        'Authorization': `Bearer ${localStorage.getItem('access-token')}`
      },
      credentials: 'include',
    }).then((response) => response.json());
}


export function getCompare(svcList){
    return fetch(`${SERVER_ADDRESS}/wish-list/compare?${svcList}`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
      }).then((response) => response.json());
}

export function getRecentList(){
    return fetch(`${SERVER_ADDRESS}/main/recent`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
    })
    .then(res => res.json());
};


export function getPopularList(){
    return fetch(`${SERVER_ADDRESS}/main/popular`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
    })
    .then(res => res.json());
};


export function postReissuance(refresh){
    return fetch(`${SERVER_ADDRESS}/member/reissuance`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
        body: JSON.stringify({
            'refresh': refresh,
        }),
    }).then(res => res.json());

}