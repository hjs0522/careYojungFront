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
            content: `<div style="width:150px;text-align:center;padding:6px 0;">${item.name}</div>`,
          });
          marker.setMap(wholemap);

          // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
          var bbbbb = document.getElementById("maplist" + item.nursingHome_id);
          // 마커에 마우스오버 이벤트를 등록합니다
          kakao.maps.event.addListener(
            wholemap,
            "click",
            function (mouseEvent) {
              // 클릭한 위도, 경도 정보를 가져옵니다
              var latlng = mouseEvent.latLng;

              // 마커 위치를 클릭한 위치로 옮깁니다
              marker.setPosition(latlng);

              var message =
                "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
              message += "경도는 " + latlng.getLng() + " 입니다";

              console.log(message);
            }
          );
          kakao.maps.event.addListener(marker, "mouseover", function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            bbbbb.style.backgroundColor = "#EEEEEF";
            // console.log(bbbbb);
            infowindow.open(wholemap, marker);
          });
          // kakao.maps.event.addListener(marker, 'click', function() {
          //   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
          //   console.log('a');
          //   setDetail_bool(true);
          //   <Detail img={item.img} name={item.name} loc={item.addRoad} detail_bool={detail_bool} setDetail_bool={setDetail_bool} />
          // });
          // 마커에 마우스아웃 이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "mouseout", function () {
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
  }, []);

  //마우스로 드래그해서 지도를 움직일때마다 지도의 중심좌표를 얻어서 현재 화면의 왼쪽 밑 꼭짓점과 오른쪽 위 꼭짓점을 반환한다.
  const getMapCenter = () => {
    console.log(wholemap.getCenter()["La"]);
    console.log(wholemap.getCenter()["Ma"]);
    const currentMap = {
      LB1: wholemap.getCenter()["La"] - 0.12189182448,
      LB2: wholemap.getCenter()["Ma"] - 0.0603703707,
      RT1: wholemap.getCenter()["La"] + 0.12189182448,
      RT2: wholemap.getCenter()["Ma"] + 0.0603703707,
    };
    console.log(currentMap);
  };

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
          onMouseUp={getMapCenter}
          className="Map"
          ref={mapcontent}
          style={{ height: "100vh" }}
        ></div>
      </div>
    </>
  );
}
export default Map;
