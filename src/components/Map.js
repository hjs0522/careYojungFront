import { useState, useEffect, useRef } from "react";
import Maplist from "./Maplist";

let wholemap = null;

function Map({ list, mapArr }) {
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();
  const [mapOption, setMapOption] = useState({
    center: new kakao.maps.LatLng(33.450701, 126.570667), //시작위치 중앙점 (좌표로 잡기)
    level: 7, // 지도 확대 레벨
  });
  // const [detail_bool,setDetail_bool] = useState(false);
  const mapcontent = useRef();

  useEffect(() => {
    wholemap = new kakao.maps.Map(mapcontent.current, mapOption);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    wholemap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    mapArr.map((item) => {
      geocoder.addressSearch(item.addRoad, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new kakao.maps.Marker({
            map: wholemap,
            position: coords,
          });
          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${item.name}</div>
            <div>${item.addRoad}</div>`,
          });
          marker.setMap(wholemap);

          // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
          var bbbbb = document.getElementById("maplist" + item.nursingHome_id);
          // 마커에 마우스오버 이벤트를 등록합니다
          // kakao.maps.event.addListener(
          //   wholemap,
          //   "click",
          //   function (mouseEvent) {
          //     // 클릭한 위도, 경도 정보를 가져옵니다
          //     var latlng = mouseEvent.latLng;

          //     // 마커 위치를 클릭한 위치로 옮깁니다
          //     marker.setPosition(latlng);

          //     var message =
          //       "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
          //     message += "경도는 " + latlng.getLng() + " 입니다";

          //     console.log(message);
          //   }
          // );
          kakao.maps.event.addListener(marker, "mouseover", () => {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            bbbbb.style.backgroundColor = "#97b1ff";

            infowindow.open(wholemap, marker);
          });

          // kakao.maps.event.addListener(marker, 'click', function() {
          //   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          //   console.log('a');
          //   setDetail_bool(true);
          //   <Detail img={item.img} name={item.name} loc={item.addRoad} detail_bool={detail_bool} setDetail_bool={setDetail_bool} />
          // });
          // 마커에 마우스아웃 이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "mouseout", () => {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            bbbbb.style.backgroundColor = "white";
            infowindow.close();
          });
          if (item.nursingHome_id === 1) {
            wholemap.setCenter(coords);
          }
        }
      });
    });
    //마커의 위치를 움직일 때마다 현재 보고있는 지도 화면의 위치 얻기
    kakao.maps.event.addListener(wholemap, "mouseup", () => {
      // console.log(wholemap.getCenter()["La"]);
      // console.log(wholemap.getCenter()["Ma"]);
      const currentMap = {
        centerX: wholemap.getCenter()["La"],
        centerY: wholemap.getCenter()["Ma"],
        grade: 12,
        keyword: "aaa",
        order: "aaa",
        memberId: "user1",
        leftX: wholemap.getCenter()["La"] - 0.12189182448,
        leftY: wholemap.getCenter()["Ma"] - 0.0603703707,
        rightX: wholemap.getCenter()["La"] + 0.12189182448,
        rightY: wholemap.getCenter()["Ma"] + 0.0603703707,
        service: "asd",
      };
      // let query = Object.keys(currentMap)
      //   .map(
      //     (k) => encodeURIComponent(k) + "=" + encodeURIComponent(currentMap[k])
      //   )ㅜ
      //   .join("&");
      // const url = "https://83e5-14-40-73-49.jp.ngrok.io/search/map?" + query;
      const url =
        "https://ca4d-14-40-73-49.jp.ngrok.io/search/map?centerX=127.02080081879996&centerY=37.47233610357272&grade=12&keyword=aaa&order=aaa&memberId=user1&leftX=126.89890899431995&leftY=37.41196573287272&rightX=127.14269264327996&rightY=37.53270647427272&service=asd";
      fetch(url, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "69420",
          accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        });
      // fetch(url, {
      //   headers: {
      //     accept: "application/json",
      //   },
      // })
      //   .then((res) => {
      //     if (res.ok === true) {
      //       return console.log(res);
      //     }
      //     throw new Error("에러!");
      //   })
      //   .catch((err) => {
      //     alert(err);
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   });

      // console.log(currentMap);
    });
  }, []);

  // 마우스로 드래그해서 지도를 움직일때마다 지도의 중심좌표를 얻어서 현재 화면의 왼쪽 밑 꼭짓점과 오른쪽 위 꼭짓점을 반환한다.
  // const getMapCenter = () => {
  //   console.log(wholemap.getCenter()["La"]);
  //   console.log(wholemap.getCenter()["Ma"]);
  //   const currentMap = {
  //     LB1: wholemap.getCenter()["La"] - 0.12189182448,
  //     LB2: wholemap.getCenter()["Ma"] - 0.0603703707,
  //     RT1: wholemap.getCenter()["La"] + 0.12189182448,
  //     RT2: wholemap.getCenter()["Ma"] + 0.0603703707,
  //   };
  //   console.log(currentMap);
  // };

  return (
    <>
      <Maplist mapArr={mapArr} wholemap={wholemap} />
      <div
        style={{
          float: "right",
          display: "inline-block",
          width: "calc(100% - 350px)",
        }}
      >
        {/* <Findmap ist={list} /> */}
        <div
          // onMouseUp={getMapCenter}
          className="Map"
          ref={mapcontent}
          style={{ height: "100vh" }}
        ></div>
      </div>
    </>
  );
}
export default Map;
