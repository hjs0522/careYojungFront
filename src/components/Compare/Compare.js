import {Modal,Icon, Grid, Button} from 'semantic-ui-react'
import {useState} from 'react'
import styled from 'styled-components'
import { getCompare } from '../../api'
import { photoarr } from '../photos'

const DetailPage = styled.div({
    marginTop:'4%',
    marginLeft:'4%',
    marginRight:'4%',
    scrollBehavior:'smooth',
})


const PageHeader = styled.div({
    top:'-2%',
    position:'sticky',
    padding:'2%',
    backgroundColor:'white',
    zIndex:'4',
    borderBottom:'1px solid #e1e1e1',
})

const PageBody = styled.div({
    border:'1px solid #e1e1e1',
})
const TitleText = styled.div({
    fontSize:'26px',
    display:'inline-block',
})

const Styledheader = styled.div({

})

const StyledheaderImg = styled.img({
    width:'100%',
    height:'100%',
})

const StyledText = styled.div({
    marginBottom:'2%',
    fontSize:'20px',
    display:'inline-block',
})

const StyledBox = styled.div({
    display:'block',
})

const CostBlock = styled.div({
    width:'90%',
    textAlign:'center',
    marginLeft:'5%',
    padding:'5%',
    backgroundColor:"#496ACE",
    color:'white',
    
    marginBottom:'5%',
    borderRadius:'10px',

})

const PersonBlock = styled.div({
    width:'97%',
    backgroundColor:'#f4f4f4',
    marginLeft:'1.5%',
    borderRadius:'50px',
    marginBottom:'2%',
})

const Text = styled.text`
    margin-right: 8px;
`

const CompareButton= styled(Button)`
    &.ui.button{
        background-color: #496ace;
        color: #ffffff;
    }
`

function Compare({compareList}){
    const [arr,setArr] = useState([]);
    console.log(compareList);
    const handleOnClick=()=>{
        console.log(compareList.length)
        if(compareList.length === 2){
            getCompare(`svcList=${compareList[0].nursingHome_id},${compareList[1].nursingHome_id}&svcType=ho`)
            .then((data)=> {
                console.log(data);
                setArr(data);
            });
        }
        else if(compareList.length === 3){
            getCompare(`svcList=${compareList[0].nursingHome_id},${compareList[1].nursingHome_id},${compareList[2].nursingHome_id}&svcType=ho`)
            .then((data)=> {
                setArr(data);
            });
        }
        else{
            alert("시설을 추가해주세요")
        }

    }
    
    console.log(arr);
    const arrSize=arr.length;
    console.log(arrSize);
    const [open, setOpen] = useState(false)
    return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      trigger={<CompareButton onClick={handleOnClick}>비교하기</CompareButton>}
    >
        <PageHeader>
            <TitleText >서비스 비교결과</TitleText>
            <div style={{display:'inline-block',float:'right',cursor:'pointer'}}>
            <Modal.Actions >
                <Icon size="big" color="grey" name="x" onClick={() => setOpen(false)}/>
            </Modal.Actions>
            </div>    
        </PageHeader>
        <Modal.Content >
        <DetailPage>
            <PageBody>
                <Styledheader >
                    <Grid columns={arrSize}>
                        {arr.map((i)=>(
                            <Grid.Column>
                                <StyledheaderImg src={photoarr[i.name]+process.env.REACT_APP_GOOGLEMAP_KEY} />
                            </Grid.Column>
                        ))}
                    </Grid>
                </Styledheader>
                <div style={{top:'6%',position:'sticky',padding:'2%',backgroundColor:'white',zIndex:'4'}}>
                    <Grid columns={arrSize}>
                        {arr.map((i)=>(
                            <Grid.Column>
                            <StyledText style={{display:'block',marginBottom:"8%"}}>{i.name}</StyledText>
                            <StyledText style={{fontSize:'18px',display:'block'}}>{
                            <>
                                <Text>{i.addrSiDo}</Text>
                                <Text>{i.addrSiGunGu}</Text>
                                <Text>{i.addrRoad}</Text>
                                <Text>{i.buildingMainNum}</Text>
                            </>
                            }</StyledText>
                            <StyledText style={{color:'#0596FF',display:'block'}}>{i.phoneNumber}</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </div>
                <StyledBox> {/* 예상비용 */}
                    <StyledText style={{fontSize:'24px',paddingLeft:'2%',paddingTop:'3%'}}>예상비용</StyledText>
                    <StyledText style={{fontSize:'18px',paddingLeft:'1%',color:'#999999'}}>(30일)</StyledText>
                    <Grid columns={arrSize}>
                        {arr.map((i)=>(
                            <Grid.Column>
                                <CostBlock>
                                    <StyledText>{i.cost}원</StyledText>
                                </CostBlock>
                            </Grid.Column>
                        ))}
                    </Grid>
                </StyledBox>

                <StyledBox> {/* 시설정원 */}
                    <StyledText style={{fontSize:'24px',paddingLeft:'2%',paddingTop:'3%'}}>시설정원</StyledText>
                    <PersonBlock>
                    <Grid columns={arrSize} divided>
                        {arr.map((i)=>(
                            <Grid.Column>
                                {i.key===0 ? <StyledText style={{marginLeft:'8%'}}>정원</StyledText>: null}
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.headCount}명</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </PersonBlock>
                    <PersonBlock>
                    <Grid columns={arrSize} divided>
                        {arr.map((i)=>(
                            <Grid.Column>
                                {i.key===0 ? <StyledText style={{marginLeft:'8%'}}>현원</StyledText>: null}
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.nowCount}명</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </PersonBlock>
                    <PersonBlock>
                    <Grid columns={arrSize} divided>
                        {arr.map((i)=>(
                            <Grid.Column>
                                {i.key===0 ? <StyledText style={{marginLeft:'8%'}}>대기</StyledText>: null}
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.waitingCount}명</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </PersonBlock>
                </StyledBox>

                <StyledBox> {/* 인력현황 */}
                    <StyledText style={{fontSize:'24px',paddingLeft:'2%',paddingTop:'3%'}}>인력현황</StyledText>
                    <StyledText style={{fontSize:'18px',paddingLeft:'1%',color:'#999999'}}>(1인당 담당하는 입소자 수)</StyledText>
                    <PersonBlock style={{backgroundColor:'white',border:'solid 1px #CCCCCC',paddingTop:'1%',paddingBottom:'1%'}}>
                    <Grid columns={arrSize} divided>
                        {arr.map((i)=>(
                            <Grid.Column>
                                {i.key===0 ? <>
                                    <StyledText style={{marginLeft:'8%'}}>의사</StyledText>
                                    <StyledText style={{fontSize:'18px',marginLeft:'5%',color:'#999999'}}>평균 30명</StyledText>
                                    </>: null}
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.doctor}명</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </PersonBlock>
                    <PersonBlock style={{backgroundColor:'white',border:'solid 1px #CCCCCC',paddingTop:'1%',paddingBottom:'1%'}}>
                    <Grid columns={arrSize} divided>
                        {arr.map((i)=>(
                            <Grid.Column>
                                {i.key===0 ? <>
                                    <StyledText style={{marginLeft:'8%'}}>간호사</StyledText>
                                    <StyledText style={{fontSize:'18px',marginLeft:'5%',color:'#999999'}}>평균 30명</StyledText>
                                    </>: null}
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.nurse}명</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </PersonBlock>
                    <PersonBlock style={{backgroundColor:'white',border:'solid 1px #CCCCCC',paddingTop:'1%',paddingBottom:'1%'}}>
                        <Grid columns={arrSize} divided>
                            {arr.map((i)=>(
                                <Grid.Column>
                                    {i.key===0 ? <>
                                        <StyledText style={{marginLeft:'8%'}}>요양보호사</StyledText>
                                        <StyledText style={{fontSize:'18px',marginLeft:'5%',color:'#999999'}}>평균 30명</StyledText>
                                        </>: null}
                                    <StyledText style={{float:'right',marginRight:'8%'}}>{i.careGiver}명</StyledText>
                                </Grid.Column>
                            ))}
                        </Grid>
                    </PersonBlock>
                </StyledBox>
            </PageBody>
        </DetailPage>
        </Modal.Content>
    </Modal>
    )
}

export default Compare;
