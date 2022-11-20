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
exports.getMember = getMember;
exports.getPopularList = getPopularList;
exports.postReissuance = postReissuance;
var SERVER_ADDRESS = "https://api.care-yojung.com";

function postKakao(code) {
  return fetch("".concat(SERVER_ADDRESS, "/member/login/kakao?code=").concat(code), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  }).then(function (res) {
    return res.json();
  });
}

function getSearchList(keyword, service, grade, order) {
  var res, refresh, data;
  return regeneratorRuntime.async(function getSearchList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/search/list?keyword=").concat(keyword, "&service=").concat(service, "&grade=").concat(grade, "&order=").concat(order), {
            method: "GET",
            headers: {
              accept: "application/json",
              'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
            },
            credentials: 'include'
          }));

        case 2:
          res = _context.sent;

          if (!(res.status === 403)) {
            _context.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context.abrupt("return", getSearchList(keyword, service, grade, order));

        case 14:
          return _context.abrupt("return", res.json());

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function getWishList() {
  var res, refresh, data;
  return regeneratorRuntime.async(function getWishList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/wish-list?"), {
            method: "GET",
            headers: {
              accept: 'application/json',
              'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
            },
            credentials: 'include'
          }));

        case 2:
          res = _context2.sent;

          if (!(res.status === 403)) {
            _context2.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context2.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context2.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context2.abrupt("return", getWishList());

        case 14:
          return _context2.abrupt("return", res.json());

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function postWishItem(nursingHome_id) {
  var res, refresh, data;
  return regeneratorRuntime.async(function postWishItem$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/wish-list"), {
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

          }));

        case 2:
          res = _context3.sent;

          if (!(res.status === 403)) {
            _context3.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context3.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context3.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context3.abrupt("return", postWishItem(nursingHome_id));

        case 14:
          return _context3.abrupt("return", res.json());

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  });
}

;

function deleteWishItem(svcId, svcType) {
  var res, refresh, data;
  return regeneratorRuntime.async(function deleteWishItem$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/wish-list"), {
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

          }));

        case 2:
          res = _context4.sent;

          if (!(res.status === 403)) {
            _context4.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context4.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context4.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context4.abrupt("return", deleteWishItem(svcId, svcType));

        case 14:
          return _context4.abrupt("return", res.json());

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function postSignUp(age, careGrade, insuranceClickid, diseaseResult, recipientClickid, name, genderClickid, location, recoverResult) {
  var res, refresh, data;
  return regeneratorRuntime.async(function postSignUp$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/member/signUp"), {
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
              "recipientType": recipientClickid,
              "seniorName": name,
              "sex": genderClickid,
              "location": location,
              "withDisease": recoverResult
            })
          }));

        case 2:
          res = _context5.sent;

          if (!(res.status === 403)) {
            _context5.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context5.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context5.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context5.abrupt("return", postSignUp(age, careGrade, insuranceClickid, diseaseResult, recipientClickid, name, genderClickid, location, recoverResult));

        case 14:
          return _context5.abrupt("return", res.json());

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function postLogout(refresh) {
  var res, _refresh, data;

  return regeneratorRuntime.async(function postLogout$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/member/logout"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
            },
            credentials: 'include',
            body: JSON.stringify({
              'refresh': refresh
            })
          }));

        case 2:
          res = _context6.sent;

          if (!(res.status === 403)) {
            _context6.next = 14;
            break;
          }

          _refresh = localStorage.getItem('refresh-token');
          console.log(_refresh);
          _context6.next = 8;
          return regeneratorRuntime.awrap(postReissuance(_refresh));

        case 8:
          data = _context6.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context6.abrupt("return", postLogout(_refresh));

        case 14:
          return _context6.abrupt("return", res.json());

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function getMap(query) {
  var res, refresh, data;
  return regeneratorRuntime.async(function getMap$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/search/map?").concat(query), {
            method: "GET",
            headers: {
              accept: "application/json",
              'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
            },
            credentials: 'include'
          }));

        case 2:
          res = _context7.sent;

          if (!(res.status === 403)) {
            _context7.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context7.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context7.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context7.abrupt("return", getMap(query));

        case 14:
          return _context7.abrupt("return", res.json());

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function getCompare(svcList) {
  var res, refresh, data;
  return regeneratorRuntime.async(function getCompare$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/wish-list/compare?").concat(svcList), {
            method: "GET",
            headers: {
              accept: "application/json",
              'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
            },
            credentials: 'include'
          }));

        case 2:
          res = _context8.sent;

          if (!(res.status === 403)) {
            _context8.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context8.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context8.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context8.abrupt("return", getCompare(svcList));

        case 14:
          return _context8.abrupt("return", res.json());

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  });
}

function getMember() {
  var res, refresh, data;
  return regeneratorRuntime.async(function getMember$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/member"), {
            method: "GET",
            headers: {
              accept: "application/json",
              'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
            },
            credentials: 'include'
          }));

        case 2:
          res = _context9.sent;

          if (!(res.status === 403)) {
            _context9.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context9.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context9.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context9.abrupt("return", getMember());

        case 14:
          return _context9.abrupt("return", res.json());

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  });
}

;

function getPopularList() {
  var res, refresh, data;
  return regeneratorRuntime.async(function getPopularList$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(fetch("".concat(SERVER_ADDRESS, "/nursing-home/popular"), {
            method: "GET",
            headers: {
              accept: "application/json",
              'Authorization': "Bearer ".concat(localStorage.getItem('access-token'))
            },
            credentials: 'include'
          }));

        case 2:
          res = _context10.sent;

          if (!(res.status === 403)) {
            _context10.next = 14;
            break;
          }

          refresh = localStorage.getItem('refresh-token');
          console.log(refresh);
          _context10.next = 8;
          return regeneratorRuntime.awrap(postReissuance(refresh));

        case 8:
          data = _context10.sent;
          localStorage.setItem('access-token', data.accessToken);
          localStorage.setItem('refresh-token', data.refreshToken);
          return _context10.abrupt("return", getPopularList());

        case 14:
          return _context10.abrupt("return", res.json());

        case 15:
        case "end":
          return _context10.stop();
      }
    }
  });
}

;

function postReissuance(refresh) {
  return fetch("".concat(SERVER_ADDRESS, "/member/reissuance"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ".concat(localStorage.getItem("access-token"))
    },
    credentials: "include",
    body: JSON.stringify({
      refresh: refresh
    })
  }).then(function (res) {
    return res.json();
  });
}