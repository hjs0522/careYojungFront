import styled from "styled-components";
import {Image} from "semantic-ui-react";
import Detail from "./Detail";


const StyledImage = styled.img({
    borderRadius:'10px',
    marginLeft:'20px',
    marginRight:'20px',
    filter:'drop-shadow(4px 4px 20px rgba(25,32,60,0.35))',
    display:'inline-block',
    cursor:'pointer',
})

const StyleName = styled.div({
    position:'absolute',
    marginLeft:'15%',
    marginTop:"55%",
    zIndex:'2',
    color:"white",
    fontSize:'20px',
    display:'inline-block',
    cursor:'pointer',
    
})
const StyleLoc = styled.div({
    position:'absolute',
    marginLeft:'15%',
    marginTop:'63%',
    zIndex:'2',
    color:"white",
    display:'inline-block',
    cursor:'pointer',
})

function ListArg({name,img,loc}){
    
    return (
        <>
            <StyleName onClick={()=>window.open("https://www.naver.com")}>{name}</StyleName>
            <StyleLoc onClick={()=>window.open("https://www.naver.com")}>{loc}</StyleLoc>
            <Detail img={img} name={name} loc={loc} />
        </>
    )
}

export default ListArg;