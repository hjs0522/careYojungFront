"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderOptions = exports.gradeOptions = exports.serviceOptions = void 0;
var serviceOptions = [{
  key: "all",
  text: "전체",
  value: "all"
}, {
  key: "ho",
  text: "요양원",
  value: "ho"
}, {
  key: "hs",
  text: "요양병원",
  value: "hs"
}];
exports.serviceOptions = serviceOptions;
var gradeOptions = [{
  key: 0,
  text: "전체",
  value: 0
}, {
  key: 1,
  text: "A",
  value: 1
}, {
  key: 2,
  text: "B",
  value: 2
}, {
  key: 3,
  text: "C",
  value: 3
}, {
  key: 4,
  text: "D",
  value: 4
}, {
  key: 5,
  text: "E",
  value: 5
}];
exports.gradeOptions = gradeOptions;
var orderOptions = [{
  key: "ac",
  text: "정확도순",
  value: "ac"
}, {
  key: "sc",
  text: "평점순",
  value: "sc"
}, {
  key: "fa",
  text: "관심순",
  value: "fa"
}];
exports.orderOptions = orderOptions;