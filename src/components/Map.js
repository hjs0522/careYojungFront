import { useState, useEffect, useRef } from "react";
import { getMap } from "../api";
import Maplist from "./Maplist";
import { useMediaQuery } from "react-responsive";
import MobilePage from "../pages/MobilePage";
let wholemap = null;

function Map({ mapArr, setMapArr }) {
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();
  const [mapOption, setMapOption] = useState({
    center: new kakao.maps.LatLng(37.46761583782297, 126.97801640947317), //시작위치 중앙점 (좌표로 잡기)
    level: 7, // 지도 확대 레벨
  });
  const mapcontent = useRef();

  //지도 초기 위치를 잡고 클릭으로 조절할 수 있는 줌 컨트롤 생성
  useEffect(() => {
    wholemap = new kakao.maps.Map(mapcontent.current, mapOption);
    var zoomControl = new kakao.maps.ZoomControl();
    wholemap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    wholemap.setMaxLevel(8);
    wholemap.setMinLevel(5);
  }, []);

  useEffect(() => {
    let markerIndex = 0;
    // setMapOption({center:})
    mapArr.map((item) => {
      markerIndex += 1;
      let road =
        item.addrFront +
        " " +
        item.addrRoad +
        " " +
        item.buildingMainNum +
        (item.buildingMainNum === 0 ? null : item.buildingMainNum);
      // console.log(road);
      const coords = new kakao.maps.LatLng(item.y, item.x);
      const marker = new kakao.maps.Marker({
        map: wholemap,
        position: coords,
      });
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:30px;height:30px;background-color:#496ace;color:center;font-family:NanumB;font-size:20px">${markerIndex}</div>+<div style="text-align:center;">${item.name}</div>`,
      });
      // const detailwindow = new kakao.maps.InfoWindow({
      //   content: `<div style="width:200px;height:100px;text-align:center;padding:10px;"><div style="font-size:20px">${item.name}</div></div>`,
      // });
      marker.setMap(wholemap);

      // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
      var bbbbb = document.getElementById("maplist" + item.nursingHome_id);
      kakao.maps.event.addListener(marker, "mouseover", (i) => {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        bbbbb.style.backgroundColor = "#97b1ff";
        infowindow.open(wholemap, marker);
      });
      kakao.maps.event.addListener(marker, "click", (i) => {
        bbbbb.scrollIntoView({ behavior: "smooth" });
        // detailwindow.open(wholemap, marker);
      });
      kakao.maps.event.addListener(marker, "mouseout", () => {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        bbbbb.style.backgroundColor = "white";
        infowindow.close();
        // detailwindow.close();
      });

      // if (item.nursingHome_id === mapArr[0].nursingHome_id) {
      //   console.log(item.name);
      //   wholemap.setCenter(coords);
      //   console.log(item.name);
      // }
    });
  });

  useEffect(() => {
    // wholemap = new kakao.maps.Map(mapcontent.current, mapOption);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    //마커의 위치를 움직일 때마다 현재 보고있는 지도 화면의 위치(왼쪽 아래 좌표, 오른족 위 좌표)) 얻기
    kakao.maps.event.addListener(wholemap, "mousedown", () => {
      const currentMap = {
        centerX: wholemap.getCenter()["La"],
        centerY: wholemap.getCenter()["Ma"],
        grade: 12,
        keyword: "aaa",
        order: "aaa",
        memberId: "user1",
        leftX: wholemap.getCenter()["La"] - 0.065514,
        leftY: wholemap.getCenter()["Ma"] - 0.055675,
        rightX: wholemap.getCenter()["La"] + 0.065514,
        rightY: wholemap.getCenter()["Ma"] + 0.055675,
        service: "asd",
        words:"all"
      };
      let query = Object.keys(currentMap)
        .map(
          (k) => encodeURIComponent(k) + "=" + encodeURIComponent(currentMap[k])
        )
        .join("&");

      fetch(`https://api.care-yojung.com/search/map?${query}`, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((res) => {
          setMapArr(res);
        });
      console.log(
        "left : " +
          currentMap["leftY"] +
          ", " +
          currentMap["leftX"] +
          " right : " +
          currentMap["rightY"] +
          ", " +
          currentMap["rightX"]
      );
    });
  }, []);

  // useEffect(() => {
  //   wholemap = new kakao.maps.Map(mapcontent.current, mapOption);
  //   mapArr.map((item) => {
  // const road =
  //   item.addFront +
  //   " " +
  //   item.addRoad +
  //   " " +
  //   item.buildingMainNum +
  //   (item.buildingMainNum === 0 ? null : item.buildingMainNum);
  //     geocoder.addressSearch(road, (result, status) => {
  //       if (status === kakao.maps.services.Status.OK) {
  //         const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  //         const marker = new kakao.maps.Marker({
  //           map: wholemap,
  //           position: coords,
  //         });
  //         const infowindow = new kakao.maps.InfoWindow({
  //           content: `<div style="width:150px;text-align:center;padding:6px 0;">${item.name}</div>
  //           <div>${item.addRoad}</div>`,
  //         });
  //         marker.setMap(wholemap);
  //       }
  //     });
  //   });
  // }, [mapArr]);
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  if (isMobile) {
    return <MobilePage></MobilePage>;
  }
  return (
    <>
      <Maplist mapArr={mapArr} wholemap={wholemap} />
      <div
        style={{
          float: "right",
          display: "inline-block",
          width: "calc(100% - 400px)",
        }}
      >
        <div className="Map" ref={mapcontent} style={{ height: "90vh" }}></div>
      </div>
    </>
  );
}
export default Map;
