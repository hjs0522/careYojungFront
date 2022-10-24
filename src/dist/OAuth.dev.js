"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KAKAO_AUTH_URL = void 0;
var REST_API_KEY = "4d25ed5cdc352b736fb6ea9ef35066bd";
var REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
var KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=".concat(REST_API_KEY, "&redirect_uri=").concat(REDIRECT_URI);
exports.KAKAO_AUTH_URL = KAKAO_AUTH_URL;