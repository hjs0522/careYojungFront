
function Findmap({list,map}){
    const {kakao}=window;
    const geocoder = new kakao.maps.services.Geocoder();
    const onClick=(item)=>{
        item.preventDefault();
        //console.log(item.target);
        geocoder.addressSearch(item.target.value, function(result, status) {
    
          // 정상적으로 검색이 완료됐으면 
           if (status === kakao.maps.services.Status.OK) {
      
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords
            });
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${item.target.innerText}</div>`
            });
            infowindow.open(map, marker);
            //console.log(coords);
              // 지도의 중심을 결과값으로  받은 위치로 이동시킵니다
              //mapcontent.setCenter(coords);
            map.setCenter(coords);
          }  
        })
      }
    return(
        <div className="left">{list.map((item)=>
            <div id="leftbox" >
              <div className="name" >{item.시설명}</div>
              <div className="address">{item.소재지}</div>
              <button value={item.소재지} onClick={onClick}>{item.시설명}</button>
            </div>
            )}
        </div>
    )
}

export default Findmap;