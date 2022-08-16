import styled from "styled-components";
import {  Grid, Image,Icon} from 'semantic-ui-react'
import ListArg from "./ListArg";
import Detail from "./Detail";
import { useRef } from "react";

const HorizontalScroll = styled.div`
    white-space:nowrap;
    overflow:auto;
    height:100%;
    padding-bottom:20px;
    width:80%;
    marginLeft:5%;
    display:inline-block;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background: #706EE9;
      border-radius: 6px;
    }
`;



const GridExampleRelaxedVery = ({size, arr,id}) => {  //넘겨받는 count는 semantic-ui-react의 grid에서 출력 크기 (값이 클수록 커짐)
  return(<Grid>
    <Grid.Row>
      <Grid.Column  >
        {arr.map( (i) => <ListArg id={id} name={i.name} img={i.img} loc={i.ShortLoc} /> )}
      </Grid.Column>
    </Grid.Row>
  </Grid>)
}

function FacilityList({size,arr,id,listCount,setListCount,listLen}){
  
  const row = useRef();
  const onClick=()=>{
    if(listCount<listLen)
      setListCount(cur=>cur+1);
    document.getElementById(id).scrollLeft+=(id==="Themelist"?400 :225);
  }
  const onClick2=()=>{
    if(listCount>0)
      setListCount(cur=>cur-1);
    document.getElementById(id).scrollLeft-=(id==='Themelist'?400:225);
  }
    return (
      <>
        <Icon name="angle left" size="huge" style={{marginTop:'-25%',verticalAlign:'middle'}} onClick={onClick2} />
        <HorizontalScroll id={id} onTouchMove >
            <GridExampleRelaxedVery size={size} arr={arr} id={id}/>
        </HorizontalScroll>
        <Icon name="angle right" size="huge" style={{marginTop:'-25%',verticalAlign:'middle'}} onClick={onClick} />
      </>
    )
}

export default FacilityList;