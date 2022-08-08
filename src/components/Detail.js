import React, {useState} from 'react'
import { Button, Modal,Grid} from 'semantic-ui-react'
import styled from 'styled-components'
import DetailCost from './DetailCost'

const DetailPage = styled.div({
  marginLeft:'4%',
  marginRight:'4%',
})

const StyledImage = styled.img({
    borderRadius:'10px',
    marginLeft:'20px',
    marginRight:'20px',
    filter:'drop-shadow(4px 4px 20px rgba(25,32,60,0.35))',
    display:'inline-block',
    cursor:'pointer',
})

const DetailImage = styled.img({
  marginTop:'20px',
  height:'170px',
  borderRadius:'10px',
})

const ModalHeader = styled.div({
  fontSize:'28px',
  marginTop:'2%',
  marginBottom:'2%',
})

const MenuBarBox = styled.div({
  width:'100%',
  fontSize:'20px',
  borderTop:'3px solid #706EE9'
})

const MenuBar = styled.button({
  cursor:'pointer',
  textAlign:'center',
  width:'20%',
  height:'40px',
  fontSize:'17px',
  backgroundColor:"#F2F2FF",
  display:'inline',
  border:'1px solid #706EE9',
  outline:'0',
  color:'#706EE9'
})

const DetailBody = styled(Modal.Content)({
  marginTop:'3%',
})

const DetailInfo = styled.div({
  fontSize:"24px",
  display:'inline',
})

const DetailTel = styled.div({
  color:"#0596FF",
  fontSize:'24px',
  display:'inline',
  marginLeft:'3%',
})

const DetailPerson = styled.div({
  
})



function Detail({img,name,loc}) {
  const [menubar, setMenubar] = useState();
  const [open, setOpen] = useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      trigger={<StyledImage src={img} />}
    >
      <DetailPage>
      <ModalHeader>{name}</ModalHeader>
      <MenuBarBox >
        <MenuBar>기본정보</MenuBar>
        <MenuBar>인력현황</MenuBar>
        <MenuBar>시설현황</MenuBar>
        <MenuBar>AI점수</MenuBar>
        <MenuBar>시설리뷰</MenuBar>
      </MenuBarBox>
      <Modal.Content Grid>
        <Grid columns={2} >
            <Grid.Row stretched>
            <Grid.Column width={11}>
                <DetailImage src="https://react.semantic-ui.com/images/wireframe/image.png"/>
            </Grid.Column>
            <Grid.Column width={5}>
                <DetailImage src="https://react.semantic-ui.com/images/wireframe/image.png"/>
                <DetailImage src="https://react.semantic-ui.com/images/wireframe/image.png"/>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Modal.Content>
      <Modal.Content Grid>
        <Grid columns={2} >
            <Grid.Row >
            <Grid.Column width={11}>
              <DetailInfo>{loc}</DetailInfo>
              <DetailTel>T : 031-1234-3456</DetailTel>
            </Grid.Column>
            <Grid.Column width={5}>
                <DetailCost />
                  
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Modal.Content>

      
      <Modal.Actions >
        <Button color='black' onClick={() => setOpen(false)}>
          닫기
        </Button>
      </Modal.Actions>
      </DetailPage>
    </Modal>
  )
}

export default Detail;
