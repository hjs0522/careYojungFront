const SERVER_ADDRESS = "https://58fa-221-148-248-130.jp.ngrok.io";

export function postKakao(code) {
  return fetch(`${SERVER_ADDRESS}/member/login/kakao?code=${code}`, {
    method: "POST",
    headers: {
      "ngrok-skip-browser-warning": "69420",
      "Content-Type": "application/json",
    },
    credentials: "include",
    mode: "cors",
  }).then((res) => res.json());
}

export function getSearchList(keyword, service, grade, order) {
  return fetch(
    `${SERVER_ADDRESS}/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}&memberId=user1`,
    {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "69420",
        accept: "application/json",
      },
    }
  ).then((res) => res.json());
}

export function getWishList() {
  return fetch(`${SERVER_ADDRESS}/wish-list?memberId=user1`).then((res) =>
    res.json()
  );
}

export function getWishList() {
  return fetch(`http://13.124.65.61/wish-list?memberId=user1`).then((res) =>
    res.json()
  );
}
export function postWishItem(nursingHome_id) {
  return fetch(`${SERVER_ADDRESS}/wish-list`, {
    method: "POST", // *GET, POST, PUT, DELETE 등
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      memberId: "user12",
      svcId: nursingHome_id,
      svcType: "ho",
    }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
}

export function deleteWishItem(memberId, svcId, svcType) {
  fetch(`${SERVER_ADDRESS}/wish-list/compare`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
    body: JSON.stringify({
      memberId: memberId,
      svcId: svcId,
      svcType: svcType,
    }), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
}

export function postSignUp(
  age,
  careGrade,
  insuranceClickid,
  diseaseResult,
  recipientClickid,
  name,
  genderClickid,
  location,
  recoverResult
) {
  return fetch(`${SERVER_ADDRESS}/member/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
    body: JSON.stringify({
      age: age,
      careGrade: 1,
      insuranceType: insuranceClickid,
      necessaryTreat: diseaseResult,
      reciptientType: recipientClickid,
      seniorName: name,
      sex: genderClickid,
      location: location,
      withDisease: recoverResult,
    }),
  });
}

export function postLogout() {
  return fetch(`${SERVER_ADDRESS}/member/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "69420",
    },
  });
}

export function getMap(query) {
  fetch(`${SERVER_ADDRESS}/search/map?${query}`, {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "69420",
      accept: "application/json",
    },
  }).then((response) => response.json());
}
