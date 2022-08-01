import styled from "styled-components";
import {Image} from "semantic-ui-react";


const StyledImage = styled.img({
    // width:"190px",
    // height:"190px",
    borderRadius:'10px',
    marginLeft:'20px',
    marginRight:'20px',
    filter:'drop-shadow(4px 4px 20px rgba(25,32,60,0.35))',
    display:'inline-block',
      
})


const StyleName = styled.div({
    position:'absolute',
    marginLeft:'15%',
    marginTop:"55%",
    zIndex:'2',
    color:"white",
    fontSize:'20px',
    display:'inline-block',
    
})
const StyleLoc = styled.div({
    position:'absolute',
    marginLeft:'15%',
    marginTop:'63%',
    zIndex:'2',
    color:"white",
    display:'inline-block',
})

function ListArg({name,img,loc}){
    console.log(img);
    return (
        <>
            <StyleName>{name}</StyleName>
            <StyleLoc>{loc}</StyleLoc>
            <StyledImage src={img} onClick={()=>window.open("https://www.naver.com")}/>
        </>
    )
}

export default ListArg;