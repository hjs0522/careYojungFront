import styled from "styled-components"

const DetailTitle = styled.h2({
    fontWeight:'normal',
    fontSize:'24px'
  })
  
  const StyledDetailBox = styled.div({
    marginTop:'4%',
  })
  
const StyledDetailAI = styled.div({
    backgroundColor:'#FAFAFA',
    border:'1px solid #e1e1e1',
    borderRadius:'10px',
  })
  
  const DetailAIElement = styled.div({
    display:'inline-block',
    width:'50%',
    padding:'2%',
  })
  
  const DetailAIText = styled.div({
    display:'inline-block',
    fontSize:'16px',
    width:'80px',
  })
  
  const DetailAIGraph = styled.div({
    display:'inline-block',
    width:'60%',
    height:'10px',
    backgroundColor:'#e1e1e1',
    
    borderRadius:'15px',
  })
  const DetailAIInnerGraph = styled.div`
    position:absolute;
    display:inline-block;
    height:10px;
    background:linear-gradient(270deg, #496ACE 0%, #A3A1FD 100%);
    border-radius:15px;
    width:${(prop)=>prop.width || '20%' };
  `
  const AIarr = [
    {name : '청결도', value: '20%'},
    {name : '위치(접근)', value: '10%'},
    {name : '식사', value: '8%'},
    {name : '시설', value: '12%'},
    {name : '친절도', value: '9%'}
  ]
  
  
  function DetailAI(){
    return (
      <StyledDetailBox id="Detail-4">
        <DetailTitle>AI점수</DetailTitle>
        <StyledDetailAI>
            {AIarr.map((i)=>(
              <DetailAIElement>
                <DetailAIText>{i.name}</DetailAIText>
                <DetailAIGraph><DetailAIInnerGraph width={i.value}></DetailAIInnerGraph></DetailAIGraph>
                <DetailAIText style={{width:'0',color:'#496ace',marginLeft:'3%'}}>{i.value}</DetailAIText>
              </DetailAIElement>
            ))}
        </StyledDetailAI>
      </StyledDetailBox>
    )
  }
  
export default DetailAI;