import {useState,useEffect,useRef} from "react"
import Findmap from "./FindMap";

let map = null;

function Map({list}){
  const { kakao } = window;
  const [mapOption,setMapOption]=useState({
    center: new kakao.maps.LatLng(33.450701, 126.570667), //시작위치 중앙점 (좌표로 잡기)
    level: 3 // 지도 확대 레벨
  })
  const mapcontent = useRef();
  useEffect(()=>{
    map = new kakao.maps.Map(mapcontent.current,mapOption);
  },[]);
  return (
    <div style={{float:'right',display:"inline-block",width:'70%',}}>
        <Findmap map={map} list={list} />
        <div className="Map" ref={mapcontent} style={{height:"88vh"}}></div>
    </div>
  );
} 
export default Map;
