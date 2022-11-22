import styled from "styled-components";
import { Grid, Icon, List } from "semantic-ui-react";
import { useState } from "react";
import Detail from "./Detail";

const StyledMaplist = styled.div({
  display: "inline-block",
  width: "400px",
  height: "100vh",
  border: "1px solid #e1e1e1",
});

const AllMaplist = styled.div`
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: #496ace;
    border-radius: 6px;
  }
  overflow-y: auto;
  height: 100vh;
`;

const MaplistBox = styled.div({
  border: "1px solid #e1e1e1",
  paddingLeft: "8%",
  paddingTop: "5%",
  paddingBottom: "3%",
});

const MaplistElement = styled.div({
  marginBottom: "3%",
});

const MaplistBoxTitle = styled.div({
  fontFamily: "NanumB",
  fontSize: "19px",
  display: "inline-block",
});

const MaplistBoxIcon = styled.div({
  display: "inline-block",
  width: "30px",
  height: "30px",
  backgroundColor: "#496ace",
  color: "white",
  textAlign: "center",
  fontFamily: "NanumB",
  fontSize: "20px",
  paddingTop: "5px",
  marginTop: "-5px",
});

const MaplistBoxText = styled.div({
  color: "#444444",
  fontSize: "16px",
  display: "inline-block",
});

export function Detail_Maplist({
  score,
  reviewNum,
  addrFront,
  addrRoad,
  buildingMainNum,
  buildingSubNum,
  img,
  name,
  phoneNumber,
  type,
  nursingHome_id,
  wholemap,
  mapIndex,
  key,
}) {
  function getStar(num) {
    const starArr = [0, 0, 0, 0, 0];
    for (let i = 0; i < num; i++) {
      starArr[i] = 1;
    }
    const result = [];
    starArr.map((i) => {
      if (i === 1) result.push(<Icon name="star" color="yellow" />);
      else result.push(<Icon name="star" color="grey" />);
    });
    return result;
  }
  const [detail_bool, setDetail_bool] = useState(false);
  // const onClick=(item)=>{
  // item.preventDefault();
  // //console.log(item.target);
  // geocoder.addressSearch(loc, function(result, status) {

  // 정상적으로 검색이 완료됐으면
  //    if (status === kakao.maps.services.Status.OK) {

  //     const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  //     const marker = new kakao.maps.Marker({
  //       wholemap: wholemap,
  //       position: coords
  //     });
  //     // 인포윈도우로 장소에 대한 설명을 표시합니다
  //     const infowindow = new kakao.maps.InfoWindow({
  //         content: `<div style="width:150px;text-align:center;padding:6px 0;">${item.target.innerText}</div>`
  //     });
  //     infowindow.open(wholemap, marker);
  //     //console.log(coords);
  //       // 지도의 중심을 결과값으로  받은 위치로 이동시킵니다
  //       //mapcontent.setCenter(coords);
  //     wholemap.setCenter(coords);
  //   }
  // })
  // }
  // const markerMap = (item)=>{
  //     console.log(loc);
  //     geocoder.addressSearch(loc,(result, status)=>{
  //         if(status === kakao.maps.services.Status.OK){
  //             const coords = new kakao.maps.LatLng(result[0].y,result[0].x);
  //             const marker = new kakao.maps.Marker({
  //                 map : wholemap,
  //                 position : coords
  //             })
  //             const infowindow = new kakao.maps.InfoWindow({
  //                 content: `<div style="width:150px;text-align:center;padding:6px 0;">${item.target.innerText}</div>`
  //             });
  //             infowindow.open(wholemap,marker);
  //             console.log(coords);
  //             wholemap.setCenter(coords);
  //         }
  //     })
  // }
  return (
    <MaplistBox
      onClick={() => {
        setDetail_bool(true);
      }}
      style={{ cursor: "pointer" }}
      id={"maplist" + nursingHome_id}
    >
      <Grid columns={2}>
        <Grid.Column width={2}>
          {/* {mapIndex} */}
          <MaplistBoxIcon style={{ marginLeft: "40%" }}>
            {mapIndex}
          </MaplistBoxIcon>
        </Grid.Column>
        <Grid.Column width={14}>
          <MaplistElement>
            <MaplistBoxTitle>{name}</MaplistBoxTitle>
            <MaplistBoxTitle style={{ marginLeft: "4%" }}>
              {type}
            </MaplistBoxTitle>
          </MaplistElement>
          <MaplistElement>
            {getStar(score)}
            <MaplistBoxText style={{ marginLeft: "2%" }}>
              {score.toFixed(1)} (리뷰 {reviewNum})
            </MaplistBoxText>
          </MaplistElement>
          <MaplistElement>
            <MaplistBoxText>
              {addrFront} {addrRoad} {buildingMainNum}{" "}
              {buildingSubNum === "0" ? null : buildingSubNum}
            </MaplistBoxText>
          </MaplistElement>
          <MaplistElement>
            <MaplistBoxText style={{ color: "#0596ff" }}>
              {phoneNumber}
            </MaplistBoxText>
            <MaplistBoxText style={{ float: "right", marginRight: "8%" }}>
              <Icon size="large" name="heart outline" />
            </MaplistBoxText>
          </MaplistElement>
        </Grid.Column>
        <Detail
          img={img}
          name={name}
          loc={addrRoad}
          detail_bool={detail_bool}
          setDetail_bool={setDetail_bool}
          nursingHome_id={nursingHome_id}
        />
      </Grid>
    </MaplistBox>
  );
}

function Maplist({ mapArr, wholemap }) {
  let mapIndex = 0;
  return (
    <StyledMaplist>
      <AllMaplist>
        {mapArr.map((i) => {
          mapIndex = mapIndex + 1;
          return (
            <div
              onClick={() => {
                console.log(i.nursingHome_id);
              }}
            >
              <Detail_Maplist {...i} wholemap={wholemap} mapIndex={mapIndex} />
            </div>
          );
        })}
      </AllMaplist>
    </StyledMaplist>
  );
}

export default Maplist;
