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
    return fetch(`${SERVER_ADDRESS}/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}&memberId=user1`,{
        method: "GET",
        headers: {
          accept: "application/json",
        },
        credentials: 'include',
    })
    .then(res => res.json());
};

export function getWishList(){
    return fetch(`${SERVER_ADDRESS}/wish-list?memberId=user1`)
    .then((res)=>res.json());
}