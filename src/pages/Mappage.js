import { useSearchParams } from "react-router-dom";
import { Container } from "semantic-ui-react";
import DropDownRow from "../components/Header/DropDownRow";
import { useEffect, useState } from "react";
import Map from "../components/Map";

function Mappage({service,setService,grade,setGrade,order,setOrder}){
    const [searchParams,setSearchParams] = useSearchParams();
    
    const keyword = searchParams.get("keyword");
    const [mapdata,setMapdata] = useState([]);
    useEffect(() =>{
        
        fetch(`http://15.164.184.243:8080/search/list?keyword=${keyword}&service=${service}&grade=${grade}&order=${order}&memberId=user12`)
            .then((res) => res.json())
            .then((data)=> {
                //console.log(data);
                setMapdata(data);
                return data;
            });
    },[keyword,service,grade,order]);
    
    return(
        <>
            <DropDownRow service={service} grade={grade} order={order} setService = {setService} setGrade = {setGrade} setOrder = {setOrder}/>
            <Container fluid>
            {/* <Maplist mapArr={mapArr}/> */}
            <Map mapArr={mapdata} />
            </Container>
        </>
    )
}

export default Mappage;