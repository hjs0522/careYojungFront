import styled from "styled-components";

const ItemContainer = styled.div`
    display: flex;
`

const SearchItem = (name,type,grade,reviewScore,reviewNum,location,phoneNumber)=>
{
    return(
        <ItemContainer>
            <img alt = "요양원 사진"></img>
            <div>
                <div>
                    <span>{this.props.name}</span>
                    <span>{this.props.type}</span>
                    <span>{this.props.grade}</span>
                </div>
                <div>
                    <span>{this.props.reviewScore}</span>
                    <span>{this.props.reviewNum}</span>
                </div>
                <div>{this.props.location}</div>
                <div>{this.props.phoneNumber}</div>
            </div>
            
        </ItemContainer>
        
    );
};

export default SearchItem;