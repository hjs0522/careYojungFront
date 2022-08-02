import React from 'react'
import { Button, Header, Image, Modal,Grid,Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledImage = styled.img({
    borderRadius:'10px',
    marginLeft:'20px',
    marginRight:'20px',
    filter:'drop-shadow(4px 4px 20px rgba(25,32,60,0.35))',
    display:'inline-block',
    cursor:'pointer',
})

function Detail({img,name,loc}) {
  const [open, setOpen] = React.useState(false)
    
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<StyledImage src={img}/>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content Grid>
        <Grid columns={2} >
            <Grid.Row stretched>
            <Grid.Column width={10}>
                <Segment><Image src="https://react.semantic-ui.com/images/wireframe/image.png"/></Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                <Segment><Image src="https://react.semantic-ui.com/images/wireframe/image.png"/></Segment>
                <Segment><Image src="https://react.semantic-ui.com/images/wireframe/image.png"/></Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Modal.Content>
      <Modal.Content>
        {loc}
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          닫기
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Detail;
