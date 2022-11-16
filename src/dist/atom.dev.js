"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderState = exports.gradeState = exports.serviceState = exports.keywordState = exports.loginState = void 0;

var _recoil = require("recoil");

var _recoilPersist2 = require("recoil-persist");

var _searchOptions = require("./searchOptions");

var _recoilPersist = (0, _recoilPersist2.recoilPersist)(),
    persistAtom = _recoilPersist.persistAtom;

var loginState = (0, _recoil.atom)({
  key: 'loginState',
  "default": false,
  effects_UNSTABLE: [persistAtom]
});
exports.loginState = loginState;
var keywordState = (0, _recoil.atom)({
  key: 'keywordState',
  "default": "",
  effects_UNSTABLE: [persistAtom]
});
exports.keywordState = keywordState;
var serviceState = (0, _recoil.atom)({
  key: 'serviceState',
  "default": _searchOptions.serviceOptions[0].key,
  effects_UNSTABLE: [persistAtom]
});
exports.serviceState = serviceState;
var gradeState = (0, _recoil.atom)({
  key: 'gradeState',
  "default": _searchOptions.gradeOptions[0].key,
  effects_UNSTABLE: [persistAtom]
});
exports.gradeState = gradeState;
var orderState = (0, _recoil.atom)({
  key: 'orderState',
  "default": _searchOptions.orderOptions[0].key,
  effects_UNSTABLE: [persistAtom]
});
exports.orderState = orderState;