import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const StyledPageup = styled.div({
    cursor:'pointer',
    display:'inline',
    float:'right',
    marginRight:'40px',
    
})

const StyledIcon = styled(Icon)({
    display:'table-cell',
    textAlign:'center',
    marginTop:'20px',
    
})

function Pageup(){
    const onClick = () =>{
        window.scrollTo({left:0, top:0, behavior:'smooth'})
    }
    return(
        <StyledPageup>
            <StyledIcon circular name="arrow up" size="big" onClick={onClick}/>
        </StyledPageup>
    )

}

export default Pageup;