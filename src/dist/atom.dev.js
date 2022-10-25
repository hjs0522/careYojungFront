"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginState = void 0;

var _recoil = require("recoil");

var _recoilPersist2 = require("recoil-persist");

var _recoilPersist = (0, _recoilPersist2.recoilPersist)(),
    persistAtom = _recoilPersist.persistAtom;

var loginState = (0, _recoil.atom)({
  key: 'loginState',
  "default": false,
  effects_UNSTABLE: [persistAtom]
});
exports.loginState = loginState;