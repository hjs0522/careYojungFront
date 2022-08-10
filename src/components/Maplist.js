import styled from "styled-components";
import {Grid,Icon} from "semantic-ui-react";

const StyledMaplist = styled.div({
    width:'35%',
    height:'100vh',
    border:'1px solid black',
})

const AllMaplist = styled.div({

})

const MaplistBox = styled.div({
    border:'1px solid #e1e1e1',
    height:'100vh',
    overflowY:'100vh',
    padding:'8%',
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
                <MaplistBox>
                    <Grid columns={2}>
                        <Grid.Column width={1}>
                            <MaplistBoxIcon src="https://react.semantic-ui.com/images/wireframe/image.png" />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <div>
                            <MaplistBoxTitle style={{}}>시립서부노인전문요양센터</MaplistBoxTitle>
                            <MaplistBoxTitle style={{marginLeft:'4%'}}>요양원</MaplistBoxTitle>
                            </div>
                            <div>
                            {getStar(4)}
                            <MaplistBoxText style={{marginLeft:'2%'}}>4.0</MaplistBoxText>
                            <MaplistBoxText style={{marginLeft:'2%'}}>리뷰 10개</MaplistBoxText>
                            </div>
                            <div>
                                <MaplistBoxText>서울 성동구 금호로 45</MaplistBoxText>
                            </div>
                            <div>
                                <MaplistBoxText style={{color:'#0596ff'}}>T.031-1234-3456</MaplistBoxText>
                            </div>
                            <div style={{float:'right'}}>
                                <Icon size="big" name="heart outline"/>
                            </div>
                        </Grid.Column>
                    </Grid> 
                </MaplistBox>
            </AllMaplist>
        </StyledMaplist>
    )
}

export default Maplist;