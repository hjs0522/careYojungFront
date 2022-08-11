import styled from "styled-components";
import {Grid,Icon} from "semantic-ui-react";

const StyledMaplist = styled.div({
    display:"inline-block",
    width:'30%',
    height:'88vh',
    border:'1px solid black',
})

const AllMaplist = styled.div({
    overflowY:'auto',
    height:'88vh',
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
    fontSize:'24px',
    display:'inline-block',
})

const MaplistBoxIcon = styled.img({
    display:'inline-block',
    width:'20px',
    height:'20px',
})

const MaplistBoxText = styled.div({
    fontSize:'20px',
    display:'inline-block',
})

const maplistArr = [{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
    name:"시립서부노인전문요양센터",
    class :"요양원",
    star:4.5,
    reviewLen:10,
    loc : "서울 성동구 금호로 45",
    tel : "T.031-1234-4566",
    img : "https://react.semantic-ui.com/images/wireframe/image.png"
}]



function Maplist(){
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
    return(
        <StyledMaplist>
            <AllMaplist>
                {maplistArr.map((i)=>{
                    return(
                        <MaplistBox>
                            <Grid columns={2}>
                                <Grid.Column width={2}>
                                    <MaplistBoxIcon style={{marginLeft:'50%'}} src="https://react.semantic-ui.com/images/wireframe/image.png" />
                                </Grid.Column>
                                <Grid.Column width={14}>
                                    <MaplistElement>
                                    <MaplistBoxTitle style={{}}>{i.name}</MaplistBoxTitle>
                                    <MaplistBoxTitle style={{marginLeft:'4%'}}>{i.class}</MaplistBoxTitle>
                                    </MaplistElement>
                                    <MaplistElement>
                                    {getStar(i.star)}
                                    <MaplistBoxText style={{marginLeft:'2%'}}>{i.star}</MaplistBoxText>
                                    <MaplistBoxText style={{marginLeft:'2%'}}>리뷰 {i.reviewLen}개</MaplistBoxText>
                                    </MaplistElement>
                                    <MaplistElement>
                                        <MaplistBoxText>{i.loc}</MaplistBoxText>
                                    </MaplistElement>
                                    <MaplistElement>
                                        <MaplistBoxText style={{color:'#0596ff'}}>{i.tel}</MaplistBoxText>
                                        <MaplistBoxText style={{float:'right',marginRight:"8%"}}><Icon size="large" name="heart outline"/></MaplistBoxText>
                                    </MaplistElement>
                                </Grid.Column>
                            </Grid> 
                        </MaplistBox>
                    )
                })}
                
            </AllMaplist>
        </StyledMaplist>
    )
}

export default Maplist;