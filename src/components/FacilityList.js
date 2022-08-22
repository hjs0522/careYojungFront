import styled from "styled-components";
import { Icon, Grid} from 'semantic-ui-react'
import ListArg from "./ListArg";

const HorizontalScroll = styled.div`
    white-space:nowrap;
    overflow:auto;
    height:100%;
    padding-bottom:20px;
    width:80%;
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
  const onClick=()=>{
    if(listCount>=listLen){
      return;
    }
    else if(listCount==listLen-1){
      setListCount(cur=>cur+1);
      document.getElementById(id).scrollLeft+=(10000);
      return;
    }
    setListCount(cur=>cur+1);
    document.getElementById(id).scrollLeft+=(id==="Themelist"?'460%' :270);
  }
  const onClick2=()=>{
    if(listCount<listLen){
      if(listLen>4&&listCount<=4){
        return;
      }
      else if(listLen<4)
        return;
      else if(listCount==5){
        setListCount(cur=>cur-1);
        document.getElementById(id).scrollLeft-=(10000);
        return;
      }  
    }
    if(listCount>0)
      setListCount(cur=>cur-1);
    document.getElementById(id).scrollLeft-=(id==='Themelist'?'460%':270);
  }
    return (
      <>
      <div style={{display:'inline-block',height:'100%'}}>
        {id==='Themelist' ?<Icon name="angle left" size="huge" style={{height:'100%',marginTop:'-450%',cursor:'pointer'}} onClick={onClick2} /> :<Icon name="angle left" size="huge" style={{height:'100%',marginTop:'-100%',cursor:'pointer'}} onClick={onClick2} />}
      </div>
      <HorizontalScroll id={id} onTouchMove >
        <GridExampleRelaxedVery size={size} arr={arr} id={id}/>
      </HorizontalScroll>
      <div style={{display:'inline-block',height:'100%'}}>
      {id==='Themelist' ?<Icon name="angle right" size="huge" style={{height:'100%',marginTop:'-450%',cursor:'pointer'}} onClick={onClick} /> :<Icon name="angle right" size="huge" style={{height:'100%',marginTop:'-100%',cursor:'pointer'}} onClick={onClick} />}
      </div>
      </>
    )
}

export default FacilityList;