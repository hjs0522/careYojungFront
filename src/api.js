const SERVER_ADDRESS = "https://api.care-yojung.com";

export function postKakao(code) {
  return fetch(`${SERVER_ADDRESS}/member/login/kakao?code=${code}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
}

export async function getSearchList(keyword,service,grade,order){
    const res = await fetch(`${SERVER_ADDRESS}/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
    });
    
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return getSearchList(keyword,service,grade,order)
    }
    else{
        return res.json();
    }
};

export async function getWishList(){
    const res = await fetch(`${SERVER_ADDRESS}/wish-list?`,{
        method:"GET",
        headers:{
            accept:'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
        },
        credentials: 'include',
    })
    
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return getWishList();
    }
    else{
        return res.json();
    }
}


export async function postWishItem(nursingHome_id){
    const res = await fetch(`${SERVER_ADDRESS}/wish-list`, {
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
        
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return postWishItem(nursingHome_id);
    }
    else{
        return res.json();
    }
};

export async function deleteWishItem(svcId,svcType){
    const res = await fetch(`${SERVER_ADDRESS}/wish-list`, {
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
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return deleteWishItem(svcId,svcType);
    }
    else{
        return res.json();
    }
}

export async function postSignUp(age,careGrade,insuranceClickid,diseaseResult,recipientClickid,name,genderClickid,location,recoverResult){
    const res = await fetch(`${SERVER_ADDRESS}/member/signUp`,{
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
            "necessaryTreat": recoverResult,
            "recipientType": recipientClickid,
            "seniorName": name,
            "sex": genderClickid,
            "location": location,
            "withDisease": diseaseResult,
        }),
    })
    
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return postSignUp(age,careGrade,insuranceClickid,diseaseResult,recipientClickid,name,genderClickid,location,recoverResult);
    }
    else{
        return res.json();
    }
}

export async function postLogout(refresh){

    const res = await fetch(`${SERVER_ADDRESS}/member/logout`,{
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
    
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return postLogout(refresh);
    }
    else{
        return res.json();
    }
}

export async function getMap(query){
    const res = await fetch(`${SERVER_ADDRESS}/search/map?${query}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        'Authorization': `Bearer ${localStorage.getItem('access-token')}`
      },
      credentials: 'include',
    })
    
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return getMap(query);
    }
    else{
        return res.json();
    }
}


export async function getCompare(svcList){
    const res = await fetch(`${SERVER_ADDRESS}/wish-list/compare?${svcList}`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
      })
    if (res.status === 403){
      const refresh = localStorage.getItem('refresh-token')
      console.log(refresh);
      const data = await postReissuance(refresh)
      localStorage.setItem('access-token',data.accessToken);
      localStorage.setItem('refresh-token',data.refreshToken);
      return getCompare(svcList);
    }
    else{
        return res.json();
    }
}

export async function getMember(){
    const res = await fetch(`${SERVER_ADDRESS}/member`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
    })
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return getMember();
      }
    else{
        return res.json();
      }
};


export async function getPopularList(){
    const res = await fetch(`${SERVER_ADDRESS}/nursing-home/popular`,{
        method: "GET",
        headers: {
          accept: "application/json",
          'Authorization': `Bearer ${localStorage.getItem('access-token')}`
        },
        credentials: 'include',
    })
    
    if (res.status === 403){
        const refresh = localStorage.getItem('refresh-token')
        console.log(refresh);
        const data = await postReissuance(refresh)
        localStorage.setItem('access-token',data.accessToken);
        localStorage.setItem('refresh-token',data.refreshToken);
        return getPopularList();
      }
      else{
          return res.json();
      }
};

export function postReissuance(refresh) {
  return fetch(`${SERVER_ADDRESS}/member/reissuance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
    credentials: "include",
    body: JSON.stringify({
      refresh: refresh,
    }),
  }).then((res) => res.json());
}
