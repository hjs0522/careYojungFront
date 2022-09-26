import {Modal,Icon, Grid, Button} from 'semantic-ui-react'
import {useState} from 'react'
import styled from 'styled-components'

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

const arr = [{
    key:0,
    img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3da-q2IzbDghh36ty1EQfK9pZTXfzMqpGcQmv0cnQ5eqCtFF0hg6hbFdtcv9EHdssG4OxF3979rqt3luWRF3uXoqzuWM1RuIgp5jBLSI3m2by3zyuN1iT1aFNGMZqb445k5i3veSoNSdzTMEcySx7Hn0k8YErIEgKm4bD1Bb_4OVu65&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
    name : "강서미소요양원",
    loc : "서울 강서구 화곡로 225 두산빌딩 3층",
    tel : 'T.031-1234-3456',
    cost : '210,000',
    per1 : 45,
    per2 : 42,
    per3 : 7,
    per4 : 10,
    per5 : 10,
    per6 : 10,
},{
    key : 1,
    img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3dtt3q8WNifDIih2_XTn1uLbPJnAVisiGxSyr8-eGTHYERgQnVxr3QQL_KgZcFhm6VYZijSEb_RFnqjNwClK2Xqcg_O-hvmg0APJ9vrN8hajvS9WQEEyGa1M9z5U5tJYdOkxTElNFgbEufRR9JVIh5Ws7-fJv6-Fo3wdCBqPefGwegC&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
    name : "시립서부노인전문요양센터",
    loc : "서울 성동구 금호로 45",
    tel : 'T.031-1234-3456',
    cost : '210,000',
    per1 : 35,
    per2 : 32,
    per3 : 7,
    per4 : 10,
    per5 : 10,
    per6 : 10,
},{
    key : 1,
    img:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3cFOwQtncajlbdVcUqhKGm9AxmHwzoxCwYILGNhUaLzisk42yWCOwqS4_3pl2zYWyGHuKyQzPgvVz9t2TmzC7xzOjKvwzQXLQ6-J29IE6nmtNuQDOQAsR11YRcB0-C60_tLTS5fbcC-DziBXVFC-9MGU1GpYJ7bFHL2jMAFTi4uYy8&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY",
    name : "시립서부노인전문요양센터",
    loc : "서울 성동구 금호로 45",
    tel : 'T.031-1234-3456',
    cost : '210,000',
    per1 : 35,
    per2 : 32,
    per3 : 7,
    per4 : 10,
    per5 : 10,
    per6 : 10,  
},]

function Compare(){
    const arrSize=arr.length;
    console.log(arrSize);
    const [open, setOpen] = useState(false)
    return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      trigger={<Button >비교하기</Button>}
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
                                <StyledheaderImg src={i.img} />
                            </Grid.Column>
                        ))}
                    </Grid>
                </Styledheader>
                <div style={{top:'6%',position:'sticky',padding:'2%',backgroundColor:'white',zIndex:'4'}}>
                    <Grid columns={arrSize}>
                        {arr.map((i)=>(
                            <Grid.Column>
                            <StyledText style={{display:'block',marginBottom:"8%"}}>{i.name}</StyledText>
                            <StyledText style={{fontSize:'18px',display:'block'}}>{i.loc}</StyledText>
                            <StyledText style={{color:'#0596FF',display:'block'}}>{i.tel}</StyledText>
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
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.per1}명</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </PersonBlock>
                    <PersonBlock>
                    <Grid columns={arrSize} divided>
                        {arr.map((i)=>(
                            <Grid.Column>
                                {i.key===0 ? <StyledText style={{marginLeft:'8%'}}>현원</StyledText>: null}
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.per2}명</StyledText>
                            </Grid.Column>
                        ))}
                    </Grid>
                    </PersonBlock>
                    <PersonBlock>
                    <Grid columns={arrSize} divided>
                        {arr.map((i)=>(
                            <Grid.Column>
                                {i.key===0 ? <StyledText style={{marginLeft:'8%'}}>대기</StyledText>: null}
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.per3}명</StyledText>
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
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.per4}명</StyledText>
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
                                <StyledText style={{float:'right',marginRight:'8%'}}>{i.per5}명</StyledText>
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
                                    <StyledText style={{float:'right',marginRight:'8%'}}>{i.per6}명</StyledText>
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
