import styled from "styled-components";
import {Image} from "semantic-ui-react";
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
    filter:drop-shadow(1px 1px 5px rgba(25,32,60,0.3));
    height:${prop=>prop.id==='Themelist'? '320px':'220px'};
    width:${prop=>prop.id==='Themelist'? '450px':'250px'};
    display:inline-block;
    cursor:pointer;
`
const StyleName = styled.div({
    position:'absolute',
    marginLeft:'30px',
    marginTop:'-50px',
    zIndex:'2',
    color:"white",
    fontSize:'20px',
    display:'block',
    cursor:'pointer',
    
})
const StyleLoc = styled.div({
    position:'absolute',
    marginLeft:'30px',
    marginTop:'-30px',
    zIndex:'2',
    color:"white",
    display:'block',
    cursor:'pointer',
})

function ListArg({name,img,loc,id}){
    const [bb,setbb]=useState(false);
    return (
        <>  
            <div style={{display:"inline-block"}}>
                <StyleName >{name}</StyleName>
                <StyleLoc >{loc}</StyleLoc>
            </div>
            <StyledImage id={id} src={img} onClick={()=>{
                setbb(true);
            }}/>
            {/* <StyledImage src={img} /> */}
            <Detail img={img} name={name} loc={loc} id={id} bb={bb} setbb={setbb} />
        </>
    )
}

export default ListArg;