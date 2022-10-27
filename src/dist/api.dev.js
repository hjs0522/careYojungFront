"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postKakao = postKakao;
exports.getSearchList = getSearchList;
exports.getWishList = getWishList;
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
  return fetch("".concat(SERVER_ADDRESS, "/search/list?keyword=").concat(keyword, "&service=").concat(service, "&grade=").concat(grade, "&order=").concat(order, "&memberId=user1"), {
    method: "GET",
    headers: {
      accept: "application/json"
    },
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
}

;

function getWishList() {
  return fetch("".concat(SERVER_ADDRESS, "/wish-list?memberId=user1")).then(function (res) {
    return res.json();
  });
}