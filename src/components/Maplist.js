import styled from "styled-components";
import {Grid,Icon, List} from "semantic-ui-react";
import {  useState } from "react";
import Detail from "./Detail";

const StyledMaplist = styled.div({
    display:"inline-block",
    width:'350px',
    height:'100vh',
    border:'1px solid black',
})

const AllMaplist = styled.div({
    overflowY:'auto',
    height:'100vh',
})

const MaplistBox = styled.div({
    border:'1px solid #000000',
    paddingLeft:"4%",
    paddingTop:'5%',
    paddingBottom:'3%',
})

const MaplistElement = styled.div({
    marginBottom:'3%',
})

const MaplistBoxTitle = styled.div({
    fontSize:'22px',
    display:'inline-block',
})

const MaplistBoxIcon = styled.img({
    display:'inline-block',
    width:'20px',
    height:'20px',
})

const MaplistBoxText = styled.div({
    fontSize:'18px',
    display:'inline-block',
})



export function Detail_Maplist({score,reviewNum,addRoad,img,name,phoneNumber,type,nursingHome_id,wholemap}){

    function getStar(num){
        const starArr=[0,0,0,0,0];
        for(let i=0;i<num;i++){
          starArr[i]=1
        }
        const result=[]
        starArr.map((i)=>{
          if(i===1)
            result.push(<Icon key={i} name="star" color="yellow"/>)
          else
            result.push(<Icon key={i}  name="star" color="grey"/>)
        })
        return result;
    }
    const [detail_bool,setDetail_bool]=useState(false); 
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
    return(
    <MaplistBox onClick={()=>{setDetail_bool(true)}} style={{cursor:'pointer'}} id={'maplist'+nursingHome_id}>
        <Grid columns={2}>
            <Grid.Column width={2}>
                <MaplistBoxIcon style={{marginLeft:'50%'}} src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column width={14}>
                <MaplistElement>
                <MaplistBoxTitle>{name}</MaplistBoxTitle>
                <MaplistBoxTitle style={{marginLeft:'4%'}}>{type}</MaplistBoxTitle>
                </MaplistElement>
                <MaplistElement>
                {getStar(score)}
                <MaplistBoxText style={{marginLeft:'2%'}}>리뷰 {reviewNum}</MaplistBoxText>
                </MaplistElement>
                <MaplistElement>
                    <MaplistBoxText>{addRoad}</MaplistBoxText>
                </MaplistElement>
                <MaplistElement>
                    <MaplistBoxText style={{color:'#0596ff'}}>{phoneNumber}</MaplistBoxText>
                    <MaplistBoxText style={{float:'right',marginRight:"8%"}}><Icon size="large" name="heart outline"/></MaplistBoxText>
                </MaplistElement>
            </Grid.Column>
            <Detail img={img} name={name} loc={addRoad} detail_bool={detail_bool} setDetail_bool={setDetail_bool} />
        </Grid> 
    </MaplistBox>
    )
}


function Maplist({mapArr,wholemap}){
    // const {kakao}=window;
    // const geocoder = new kakao.maps.services.Geocoder();
    // useEffect(()=>{
    //     console.log(loc);
    //     geocoder.addressSearch('서울시 성동구 금호로 45',(result, status)=>{
    //         if(status === kakao.maps.services.Status.OK){
    //             const coords = new kakao.maps.LatLng(result[0].y,result[0].x);
    //             const marker = new kakao.maps.Marker({
    //                 map : wholemap,
    //                 position : coords
    //             })
    //             const infowindow = new kakao.maps.InfoWindow({
    //                 content: `<div style="width:150px;text-align:center;padding:6px 0;">ㅁㅁㅁ</div>`
    //             });
    //             infowindow.open(wholemap,marker);
    //             console.log(coords);
    //             wholemap.setCenter(coords);
    //         }
    //     })
    // },[])
    return(
        <StyledMaplist>
            <AllMaplist>
                {mapArr.map((i)=>{
                    return(<Detail_Maplist {...i} wholemap={wholemap}/>)
                })}
            </AllMaplist>
        </StyledMaplist>
    )
}

export default Maplist;