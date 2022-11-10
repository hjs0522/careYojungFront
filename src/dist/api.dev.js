"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postKakao = postKakao;
exports.getSearchList = getSearchList;
exports.getWishList = getWishList;
exports.postWishItem = postWishItem;
exports.deleteWishItem = deleteWishItem;
exports.postSignUp = postSignUp;
exports.postLogout = postLogout;
exports.getMap = getMap;
exports.getCompare = getCompare;
exports.getRecentList = getRecentList;
exports.getPopularList = getPopularList;
exports.postReissuance = postReissuance;
var SERVER_ADDRESS = 'https://api.care-yojung.com';

function postKakao(code) {
  return fetch("".concat(SERVER_ADDRESS, "/member/login/kakao?code=").concat(code), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
}

function getSearchList(keyword, service, grade, order) {
  return fetch("".concat(SERVER_ADDRESS, "/search/list?keyword=").concat(keyword, "&service=").concat(service, "&grade=").concat(grade, "&order=").concat(order), {
    method: "GET",
    headers: {
      accept: "application/json",
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include'
  }).then(function (res) {
    console.log(res.status);

    if (res.status === 403) {
      var refresh = localStorage.getItem('refresh-token');
      console.log(refresh);
      postReissuance(refresh).then(function (data) {
        localStorage.setItem('access-token', data.accessToken);
        localStorage.setItem('refresh-token', data.refreshToken);
      });
    } else {
      return res.json();
    }
  });
}

;

function getWishList() {
  return fetch("".concat(SERVER_ADDRESS, "/wish-list?"), {
    method: "GET",
    headers: {
      accept: 'application/json',
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
}

function postWishItem(nursingHome_id) {
  return fetch("".concat(SERVER_ADDRESS, "/wish-list"), {
    method: 'POST',
    // *GET, POST, PUT, DELETE 등
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include',
    body: JSON.stringify({
      "memberId": "user12",
      "svcId": nursingHome_id,
      "svcType": "ho"
    }) // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함

  });
}

;

function deleteWishItem(svcId, svcType) {
  fetch("".concat(SERVER_ADDRESS, "/wish-list"), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include',
    body: JSON.stringify({
      "svcId": svcId,
      "svcType": svcType
    }) // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함

  });
}

function postSignUp(age, careGrade, insuranceClickid, diseaseResult, recipientClickid, name, genderClickid, location, recoverResult) {
  return fetch("".concat(SERVER_ADDRESS, "/member/signUp"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include',
    body: JSON.stringify({
      "age": age,
      "careGrade": careGrade,
      "insuranceType": insuranceClickid,
      "necessaryTreat": diseaseResult,
      "reciptientType": recipientClickid,
      "seniorName": name,
      "sex": genderClickid,
      "location": location,
      "withDisease": recoverResult
    })
  });
}

function postLogout(refresh) {
  return fetch("".concat(SERVER_ADDRESS, "/member/logout"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include',
    body: JSON.stringify({
      'refresh': refresh
    })
  });
}

function getMap(query) {
  fetch("".concat(SERVER_ADDRESS, "/search/map?").concat(query), {
    method: "GET",
    headers: {
      accept: "application/json",
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include'
  }).then(function (response) {
    return response.json();
  });
}

function getCompare(svcList) {
  return fetch("".concat(SERVER_ADDRESS, "/wish-list/compare?").concat(svcList), {
    method: "GET",
    headers: {
      accept: "application/json",
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include'
  }).then(function (response) {
    return response.json();
  });
}

function getRecentList() {
  return fetch("".concat(SERVER_ADDRESS, "/main/recent"), {
    method: "GET",
    headers: {
      accept: "application/json",
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
}

;

function getPopularList() {
  return fetch("".concat(SERVER_ADDRESS, "/main/popular"), {
    method: "GET",
    headers: {
      accept: "application/json",
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
}

;

function postReissuance(refresh) {
  return fetch("".concat(SERVER_ADDRESS, "/member/reissuance"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
    },
    credentials: 'include',
    body: JSON.stringify({
      'refresh': refresh
    })
  }).then(function (res) {
    return res.json();
  });
}