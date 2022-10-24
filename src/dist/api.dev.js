"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postKakao = postKakao;
exports.getSearchList = getSearchList;
exports.getWishList = getWishList;
exports.PostWishItem = PostWishItem;
exports.PostSignUp = PostSignUp;
exports.PostLogout = PostLogout;
var SERVER_ADDRESS = '4ed1-118-32-133-32.jp.ngrok.io';

function postKakao(code) {
  return fetch("https://care-yojung.com/member/login/kakao?code=".concat(code), {
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
  return fetch("https://care-yojung.com/search/list?keyword=".concat(keyword, "&service=").concat(service, "&grade=").concat(grade, "&order=").concat(order, "&memberId=user1"), {
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
  return fetch("https://4ed1-118-32-133-32.jp.ngrok.io/wish-list?memberId=user1").then(function (res) {
    return res.json();
  });
}

function PostWishItem(nursingHome_id) {
  return fetch("https://care-yojung.com/wish-list", {
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

function PostSignUp(age, careGrade, insuranceClickid, diseaseResult, recipientClickid, name, genderClickid, location, recoverResult) {
  return fetch("https://care-yojung.com/member/signUp", {
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

function PostLogout() {
  return fetch("https://care-yojung.com/member/logout", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "ngrok-skip-browser-warning": "69420"
    }
  });
}