import styled from "styled-components";
import Detail from "./Detail";
import { useState } from "react";

// const StyledImage = styled.img({
//     borderRadius:'10px',
//     marginLeft:'20px',
//     marginRight:'20px',
//     filter:'drop-shadow(4px 4px 20px rgba(25,32,60,0.35))',
//     display:'inline-block',
//     cursor:'pointer',
// })

const StyledImage = styled.img`
    border-radius:10px;
    margin-left:20px;
    filter:drop-shadow(1px 1px 5px rgba(25,32,60,1));
    height:${prop=>prop.id==='Themelist'? '320px':'220px'};
    width:${prop=>prop.id==='Themelist'? '450px':'200px'};
    display:inline-block;
    cursor:pointer;
    z-index:0;
`
const TextBox = styled.div({
    borderRadius:'0 0 10px 10px',
    display:"inline-block",
    width:'200px',
    marginLeft:'20px',
    bottom:'0',
    height:'60px',
    background:'rgba(0, 0, 0, 0.3)',
    zIndex:'1',
    position:'absolute'
})

const StyleName = styled.div({
    position:'absolute',
    top:'10px',
    marginLeft:'15px',
    zIndex:'1',
    color:"white",
    fontSize:'18px',
    display:'block',
    cursor:'pointer',
    
})
const StyleLoc = styled.div({
    position:'absolute',
    marginLeft:'14px',
    top:'30px',
    zIndex:'1',
    color:"white",
    display:'block',
    cursor:'pointer',
})

const StyledListArg = styled.div({
    display:"inline-block",
    cursor:'pointer',
})

function ListArg({index,name,img,loc,id}){
    const [detail_bool,setDetail_bool]=useState(false);
    return (  
        <StyledListArg id={id+index} onClick={()=>{
            console.log("Listarg : ",detail_bool);
            setDetail_bool(true);
            console.log("Listarg : ",detail_bool);
            }}>
            <TextBox>
                <StyleName >{name}</StyleName>
                <StyleLoc >{loc}</StyleLoc>
            </TextBox>
            <StyledImage id={id} src={img}/>
            <Detail img={img} name={name} loc={loc} id={id} detail_bool={detail_bool} setDetail_bool={setDetail_bool} />
        </StyledListArg>
    )
}

export default ListArg;