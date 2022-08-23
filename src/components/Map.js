import { getElementError } from "@testing-library/react";
import {useState,useEffect,useRef} from "react"
import Findmap from "./FindMap";
import Maplist from "./Maplist";
import Detail from "./Detail";

let wholemap = null;


function Map({list,mapArr}){
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();
  const [mapOption,setMapOption]=useState({
    center: new kakao.maps.LatLng(33.450701, 126.570667), //시작위치 중앙점 (좌표로 잡기)
    level: 7 // 지도 확대 레벨
  })
  const [detail_bool,setDetail_bool] = useState(false);

  const mapcontent = useRef();
  useEffect(()=>{
    wholemap = new kakao.maps.Map(mapcontent.current,mapOption);
    mapArr.map((item)=>{
      geocoder.addressSearch(item.addRoad,(result, status)=>{
        if(status === kakao.maps.services.Status.OK){
            const coords = new kakao.maps.LatLng(result[0].y,result[0].x);
            const marker = new kakao.maps.Marker({
                map : wholemap,
                position : coords
            })
            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${item.name}</div>`
            });
            marker.setMap(wholemap);

            // 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
            const bbbbb = document.getElementById('maplist'+item.nursingHome_id);
            // 마커에 마우스오버 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseover', function() {
              // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                bbbbb.style.backgroundColor='#EEEEEF';
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
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                bbbbb.style.backgroundColor='white';
                infowindow.close();
            });
            if(item.nursingHome_id===1){
              wholemap.setCenter(coords);
            }

            // const customOverlay = new kakao.maps.CustomOverlay({
            //   position: coords,
            //   content : `<div style="width:150px;text-align:center;padding:6px 0;background-color:white;">${item.name}</div>`
            // })
            // if(item.nursingHome_id===1){
            //   wholemap.setCenter(coords);
            // }

            // // 인포윈도우를 생성합니다
            // infowindow.setMap(marker,wholemap);
            // //마커에 마우스오버 이벤트를 등록합니다
            // kakao.maps.event.addListener(marker, 'mouseover', function() {
            //   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            //   infor
            // });

            // // 마커에 마우스아웃 이벤트를 등록합니다
            // kakao.maps.event.addListener(marker, 'mouseout', function() {
            //     // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            //     infowindow.close();
            // });
        }
    })
  })
    
  },[]);
  
  return (
    <>
    <Maplist mapArr={mapArr} wholemap={wholemap} />
    <div style={{float:'right',display:"inline-block",width:'70%',}}>
        {/* <Findmap ist={list} /> */}
        <div className="Map" ref={mapcontent} style={{height:"100vh"}}></div>
    </div>
    </>
  );
} 
export default Map;
