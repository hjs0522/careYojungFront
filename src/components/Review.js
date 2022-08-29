import {Icon,Modal,Button, Grid} from 'semantic-ui-react'
import {useState} from 'react'
import styled from 'styled-components'
import { photoarr } from './photos'
import CompareList from './CompareList'

const StyledModal = styled.div({
    padding:'50px 70px 30px 70px',
    
})

const StyledHeader = styled.div({
    display:'block',
    height:'70px',
})

const StyledHeaderText = styled.div({
    fontSize:'28px',
    display:'inline-block',
    textAlign:'center',
    width:'100%',
})
const StyledText = styled.div({
    fontSize:'20px',
    display:'inline-block',
    textAlign:'center',
})

const StyledImg = styled.img({
    height:'100px',
    width:'100px',
    borderRadius:'50px',
    display:'inline-block',
})

const StarBox = styled.div({
    height:'80px',
    width:'100%',
    backgroundColor:'#f5f7fa',
    border:'1px solid #e1e1e1',
    borderRadius:'10px',
})

const EndButton = styled.button({
    display:'block',
    padding:'10px',
    borderRadius:'50px',
    width:'40%',
    textAlign:'center',
    backgroundColor:'#496ace',
    color:'white',
    marginLeft:'30%',
})

function Review({review_bool, setReview_bool,name,addRoad}){
    const [open, setOpen] = useState(false)
    const [starlength,setStarlength] = useState(0);
    const aaa = (event)=>{
        event.stopPropagation();
        console.log(event);
    }
    function getStar(num){
        const starArr=[0,0,0,0,0];
        for(let i=0;i<num;i++){
          starArr[i]=1
        }
        const result=[]
        let index=0
        starArr.map((i)=>{
          if(i===1)
            result.push(<div id={index} onClick={aaa} style={{display:'inline-block'}}><Icon size="large" name="star" color="yellow"/></div>)
          else
            result.push(<div id={index} onClick={aaa} style={{display:'inline-block'}}><Icon size="large" name="star" color="grey"/></div>)
          index+=1
        }
        )
        return result;
      }
    return (
    <Modal
      onClose={() => setReview_bool(false)}
      onOpen={() => setReview_bool(true)}
      open={review_bool}
      size='small'
      trigger={<Button >비교하기</Button>}
    >
        <StyledModal>
            <StyledHeader>
                <StyledHeaderText>리뷰작성</StyledHeaderText>
                <div style={{display:'inline-block',float:'right',cursor:'pointer',marginTop:'-40px'}}>
                    <Modal.Actions >
                        <Icon size="huge" color="grey" name="x" onClick={() => setReview_bool(false)}/>
                    </Modal.Actions>
                </div>   
            </StyledHeader> 
            <div style={{borderBottom:'1px solid #e1e1e1',paddingBottom:'30px'}}>
                <Grid columns={2}>
                    <Grid.Column width={2}>
                        <StyledImg src={photoarr[name]} />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <div style={{padding:'20px',marginLeft:'50px'}}>
                            <StyledText style={{fontSize:'24px',marginBottom:'15px'}}>{name}</StyledText>
                            <StyledText style={{color:"#444444"}}>{addRoad}</StyledText>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
            <div style={{marginBottom:'15px'}}>
                <StyledText style={{fontSize:'24px',margin:'10px 0 10px 0',}}>시설 만족도</StyledText>
                <StyledText style={{fontSize:'18px',color:'#999999',marginLeft:'20px'}}>별점을 눌러 평가 해주세요</StyledText>
                <StarBox>
                    {getStar(starlength)}
                </StarBox>
            </div>
            <div style={{marginBottom:'15px'}}>
                <input onClick={(event)=>{
                    event.stopPropagation();
                }} style={{height:'300px',width:'100%',textAlign:'left'}} placeholder="시설을 이용하면서 느낀점을 상세하게 작성해주세요."  type="textbox" ></input>
            </div>
            <EndButton><StyledText>후기작성완료</StyledText></EndButton>
        </StyledModal>
    </Modal>)
}

export default Review;