import { Button, Grid } from "semantic-ui-react"
import styled from "styled-components"

const StyledDetailCost = styled.div({
    
})

const StyledHeader = styled.text({
    fontSize:'24px',
  
})

const StyledInnerHeader = styled.text({
    fontSize:'22px',
    color:'#444444',
})
  

const BeneficalType = styled.div({
    marginTop:'5%',
})

function DetailCost(){

    return (
        <StyledDetailCost>
            <StyledHeader>예상비용</StyledHeader>
            <BeneficalType>
                <StyledInnerHeader>수급자 유형</StyledInnerHeader>
                <Grid columns={2}>
                        <Button>aa</Button>
                        <Button>aa</Button>
                </Grid>
            </BeneficalType>
        </StyledDetailCost>
    )
}



export default DetailCost;