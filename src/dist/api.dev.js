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
var SERVER_ADDRESS = 'care-yojung.com';

function postKakao(code) {
  return fetch("https://".concat(SERVER_ADDRESS, "/member/login/kakao?code=").concat(code), {
    method: 'POST',
    headers: {
      "ngrok-skip-browser-warning": "69420",
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return console.log(res.json());
  });
}

function getSearchList(keyword, service, grade, order) {
  return fetch("https://".concat(SERVER_ADDRESS, "/search/list?keyword=").concat(keyword, "&service=").concat(service, "&grade=").concat(grade, "&order=").concat(order, "&memberId=user1"), {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "69420",
      accept: "application/json"
    }
  }).then(function (res) {
    return res.json();
  });
}

;

function getWishList() {
  return fetch("https://".concat(SERVER_ADDRESS, "/wish-list?memberId=user1")).then(function (res) {
    return res.json();
  });
}

function postWishItem(nursingHome_id) {
  return fetch("https://".concat(SERVER_ADDRESS, "/wish-list"), {
    method: 'POST',
    // *GET, POST, PUT, DELETE 등
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420" // 'Content-Type': 'application/x-www-form-urlencoded',

    },
    body: JSON.stringify({
      "memberId": "user12",
      "svcId": nursingHome_id,
      "svcType": "ho"
    }) // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함

  });
}

;

function deleteWishItem(memberId, svcId, svcType) {
  fetch("https://".concat(SERVER_ADDRESS, "/wish-list/compare"), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
    body: JSON.stringify({
      "memberId": memberId,
      "svcId": svcId,
      "svcType": svcType
    }) // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함

  });
}

function postSignUp(age, careGrade, insuranceClickid, diseaseResult, recipientClickid, name, genderClickid, location, recoverResult) {
  return fetch("https://".concat(SERVER_ADDRESS, "/member/signUp"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    },
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

function postLogout() {
  return fetch("https://".concat(SERVER_ADDRESS, "/member/logout"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    }
  });
}

function getMap(query) {
  fetch("https://".concat(SERVER_ADDRESS, "/search/map?").concat(query), {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "69420",
      accept: "application/json"
    }
  }).then(function (response) {
    return response.json();
  });
}