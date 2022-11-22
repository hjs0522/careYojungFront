import { useState,useEffect } from "react";
import { Container, Dimmer, Loader,Image} from "semantic-ui-react";
import DropDownRow from "../components/Header/DropDownRow";
import Map from "../components/Map";
import {useRecoilState} from 'recoil'
import {keywordState,serviceState,gradeState,orderState}from '../atom';
import {getSearchList} from '../api';

function Mappage() {
  const [keyword,setKeyword] = useRecoilState(keywordState);
  const [service,setService] = useRecoilState(serviceState);
  const [grade,setGrade] = useRecoilState(gradeState);
  const [order,setOrder] = useRecoilState(orderState);
  const [loading,setLoading] = useState(true);
  const [mapArr, setMapArr] = useState([]);
  
  useEffect(() =>{
    getSearchList(keyword,service,grade,order).then(
    (data)=>{
        setMapArr(data);
        setLoading(false);
    })
},[keyword,service,grade,order]);
  return (
    <>
      <DropDownRow service={service} grade={grade} order={order} setService = {setService} setGrade = {setGrade} setOrder = {setOrder} isMapPage = {true}/>
      {loading?
        <>
          <Dimmer active>
              <Loader>Loading</Loader>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </>:
        <Container fluid>
          <div style={{ padding: "10px 15% 10px 15%" }}>
          </div>
          <Map mapArr={mapArr} setMapArr={setMapArr} />
        </Container>
      }
    </>
  );
}

export default Mappage;
